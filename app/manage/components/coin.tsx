import { useGLTF, useTexture } from '@react-three/drei'
import React from 'react'
import * as THREE from 'three'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Coin_Material_0: THREE.Mesh
  }
  materials: {
    ['Material.001']: THREE.MeshBasicMaterial
  }
}

type CoinProps = {
  texture: string
} & JSX.IntrinsicElements['group']

export default function Coin(props: CoinProps) {
  const { nodes, materials } = useGLTF('/coin.glb') as GLTFResult
  const texture = useTexture(props.texture)

  return (
    <group {...props} dispose={null}>
      <group scale={0.08}>
        <group scale={100}>
          <mesh geometry={nodes.Coin_Material_0.geometry} material={materials['Material.001']} rotation={[0, 0, 0.5]}>
            <meshStandardMaterial map={texture} />
          </mesh>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/coin.glb')
