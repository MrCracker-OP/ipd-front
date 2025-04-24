import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { button, useControls } from "leva";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function Avatar3(props) {
  // Load the model with animations
  const { nodes, materials, animations } = useGLTF("/models/model (1).glb");
  const group = useRef();
  const mixer = useRef(new THREE.AnimationMixer(undefined));

  // Animation state
  const [isPaused, setIsPaused] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(0);
  const [speedRatio, setSpeedRatio] = useState(1.0);
  const [animationName, setAnimationName] = useState("Standard_Smoking");

  // Get animation actions
  const { actions, names } = useAnimations(animations, group);

  // Log available animations for debugging
  useEffect(() => {
    console.log("Available animations:", names);
    if (!names.includes(animationName)) {
      console.warn(`Animation '${animationName}' not found. Available: ${names.join(", ")}`);
    }
  }, [names, animationName]);

  // Setup animation
  useEffect(() => {
    const action = actions[animationName];
    if (!action) return;

    // Configure animation
    action.reset();
    action.setLoop(THREE.LoopRepeat, Infinity); // Loop indefinitely
    action.setEffectiveWeight(1.0); // Positive weight
    action.setEffectiveTimeScale(speedRatio);

    // Play or pause
    if (!isPaused) {
      action.play();
    } else {
      action.paused = true;
    }

    // Cleanup
    return () => {
      action.stop();
    };
  }, [actions, animationName, isPaused, speedRatio]);

  // Update frame display
  useFrame((state, delta) => {
    if (!isPaused && actions[animationName]) {
      mixer.current.update(delta * speedRatio); // Update mixer with scaled time
      const action = actions[animationName];
      const duration = action.getClip().duration;
      const time = action.time;
      setCurrentFrame((time / duration) * totalFrames);
    }
  });

  // Animation parameters
  const totalFrames = 988; // Adjust based on your animation

  // Leva controls
  useControls("CONTROLS", {
    Animation: {
      value: animationName,
      options: names,
      onChange: setAnimationName,
    },
    Pause: button(() => {
      setIsPaused(true);
      if (actions[animationName]) actions[animationName].paused = true;
    }),
    Play: button(() => {
      setIsPaused(false);
      if (actions[animationName]) actions[animationName].play();
    }),
    Stop: button(() => {
      setIsPaused(true);
      if (actions[animationName]) {
        actions[animationName].stop();
        setCurrentFrame(0);
      }
    }),
    "Speed ratio": {
      value: speedRatio,
      min: 0,
      max: 2,
      onChange: setSpeedRatio,
    },
    "Current frame": {
      value: currentFrame,
      min: 0,
      max: totalFrames,
      onChange: (value) => {
        if (actions[animationName]) {
          const duration = actions[animationName].getClip().duration;
          actions[animationName].time = (value / totalFrames) * duration;
          setCurrentFrame(value);
        }
      },
    },
  });

  // Info section
  useControls("INFOS", {
    "Animation count": { value: animations.length, disabled: true },
    "Current animation": { value: animationName, disabled: true },
    "Total frames": { value: totalFrames, disabled: true },
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Armature">
          <primitive object={nodes.Hips} />
          {Object.entries(nodes)
            .filter(([_, node]) => node.isMesh || node.isSkinnedMesh)
            .map(([key, node]) => {
              if (!node.geometry || !node.material) return null;
              if (node.isSkinnedMesh) {
                return (
                  <skinnedMesh
                    key={key}
                    name={key}
                    geometry={node.geometry}
                    material={node.material}
                    skeleton={node.skeleton}
                  />
                );
              }
              return (
                <mesh
                  key={key}
                  name={key}
                  geometry={node.geometry}
                  material={node.material}
                />
              );
            })}
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/model (1).glb");