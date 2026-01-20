import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface BlockchainNetworkProps {
    nodeCount?: number;
    radius?: number;
}

export default function BlockchainNetwork({
    nodeCount = 12,
    radius = 3
}: BlockchainNetworkProps) {
    const groupRef = useRef<THREE.Group>(null);
    const linesRef = useRef<THREE.LineSegments>(null);

    const { nodes, linePositions } = useMemo(() => {
        const nodes: THREE.Vector3[] = [];
        const linePositionsArray: number[] = [];

        // Generate node positions in a sphere
        for (let i = 0; i < nodeCount; i++) {
            const phi = Math.acos(-1 + (2 * i) / nodeCount);
            const theta = Math.sqrt(nodeCount * Math.PI) * phi;

            const x = radius * Math.cos(theta) * Math.sin(phi);
            const y = radius * Math.sin(theta) * Math.sin(phi);
            const z = radius * Math.cos(phi);

            nodes.push(new THREE.Vector3(x, y, z));
        }

        // Generate connections between nearby nodes
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                const distance = nodes[i].distanceTo(nodes[j]);
                if (distance < radius * 1.2) {
                    linePositionsArray.push(
                        nodes[i].x, nodes[i].y, nodes[i].z,
                        nodes[j].x, nodes[j].y, nodes[j].z
                    );
                }
            }
        }

        return {
            nodes,
            linePositions: new Float32Array(linePositionsArray)
        };
    }, [nodeCount, radius]);

    useFrame((state) => {
        if (!groupRef.current) return;

        const time = state.clock.elapsedTime;
        groupRef.current.rotation.y = time * 0.1;
        groupRef.current.rotation.x = Math.sin(time * 0.2) * 0.1;

        // Pulse effect on lines
        if (linesRef.current) {
            const material = linesRef.current.material as THREE.LineBasicMaterial;
            material.opacity = 0.3 + Math.sin(time * 2) * 0.2;
        }
    });

    return (
        <group ref={groupRef}>
            {/* Connection Lines */}
            <lineSegments ref={linesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={linePositions.length / 3}
                        array={linePositions}
                        itemSize={3}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    color="#3b82f6"
                    transparent
                    opacity={0.4}
                    linewidth={1}
                />
            </lineSegments>

            {/* Nodes */}
            {nodes.map((position, i) => (
                <mesh key={i} position={position}>
                    <sphereGeometry args={[0.08, 16, 16]} />
                    <meshBasicMaterial
                        color={i % 3 === 0 ? '#8b5cf6' : i % 3 === 1 ? '#3b82f6' : '#22d3ee'}
                        transparent
                        opacity={0.9}
                    />
                </mesh>
            ))}

            {/* Center core */}
            <mesh>
                <icosahedronGeometry args={[0.5, 2]} />
                <meshBasicMaterial color="#8b5cf6" wireframe transparent opacity={0.6} />
            </mesh>
        </group>
    );
}
