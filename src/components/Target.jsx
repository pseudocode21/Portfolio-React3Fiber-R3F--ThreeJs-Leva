import { useGLTF } from "@react-three/drei";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
const Target = (props) => {
  const targetRef = useRef();
  const { scene } = useGLTF(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );
  useGLTF.preload(
    "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/target-stand/model.gltf"
  );
  // useGSAP(() => {
  //   gsap.to(targetRef.current.position, {
  //     y: targetRef.current.position.y + 0.5,
  //     duration: 1.5,
  //     repeat: -1,
  //     yoyo: true,
  //   });
  // });
  useEffect(() => {
    if (!targetRef.current) return;

    const t1 = gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
    return () => t1.kill();
  }, []);
  return (
    <mesh {...props} ref={targetRef} rotation={[0, Math.PI / 5, 0]} scale={1.4}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Target;
