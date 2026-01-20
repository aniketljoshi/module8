import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ParticleFieldProps {
    count?: number;
    color?: string;
    size?: number;
    spread?: number;
}

export default function ParticleField({
    count = 1000,
    color = '#8b5cf6',
    size = 0.02,
    spread = 15
}: ParticleFieldProps) {
    const pointsRef = useRef<THREE.Points>(null);

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const velocities = new Float32Array(count * 3);

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * spread;
            positions[i3 + 1] = (Math.random() - 0.5) * spread;
            positions[i3 + 2] = (Math.random() - 0.5) * spread;

            velocities[i3] = (Math.random() - 0.5) * 0.01;
            velocities[i3 + 1] = (Math.random() - 0.5) * 0.01;
            velocities[i3 + 2] = (Math.random() - 0.5) * 0.01;
        }

        return { positions, velocities };
    }, [count, spread]);

    useFrame((state) => {
        if (!pointsRef.current) return;

        const positions = pointsRef.current.geometry.attributes.position.array as Float32Array;
        const time = state.clock.elapsedTime;

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;

            // Gentle floating motion
            positions[i3] += Math.sin(time + i * 0.1) * 0.001;
            positions[i3 + 1] += Math.cos(time + i * 0.1) * 0.001;
            positions[i3 + 2] += Math.sin(time * 0.5 + i * 0.1) * 0.0005;

            // Wrap around boundaries
            const halfSpread = spread / 2;
            if (positions[i3] > halfSpread) positions[i3] = -halfSpread;
            if (positions[i3] < -halfSpread) positions[i3] = halfSpread;
            if (positions[i3 + 1] > halfSpread) positions[i3 + 1] = -halfSpread;
            if (positions[i3 + 1] < -halfSpread) positions[i3 + 1] = halfSpread;
        }

        pointsRef.current.geometry.attributes.position.needsUpdate = true;
        pointsRef.current.rotation.y = time * 0.02;
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particles.positions.length / 3}
                    array={particles.positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={size}
                color={color}
                transparent
                opacity={0.6}
                sizeAttenuation
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}
