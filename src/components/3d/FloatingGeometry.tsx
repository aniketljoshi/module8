import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingGeometryProps {
    position?: [number, number, number];
    scale?: number;
    color?: string;
    speed?: number;
    distort?: number;
}

export default function FloatingGeometry({
    position = [0, 0, 0],
    scale = 1,
    color = '#8b5cf6',
    speed = 1,
    distort = 0.3
}: FloatingGeometryProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;

        const time = state.clock.elapsedTime * speed;

        meshRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
        meshRef.current.rotation.y = time * 0.2;
        meshRef.current.rotation.z = Math.cos(time * 0.2) * 0.1;

        meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.3;
    });

    return (
        <Icosahedron ref={meshRef} args={[1, 4]} scale={scale} position={position}>
            <MeshDistortMaterial
                color={color}
                attach="material"
                distort={distort}
                speed={2}
                roughness={0.2}
                metalness={0.8}
                wireframe
            />
        </Icosahedron>
    );
}
