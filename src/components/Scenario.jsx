import { CameraControls, Environment } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { Avatar } from "./Avatar"; // Default avatar
import { Avatar2 } from "./Avatar2";
import { Avatar3 } from "./Avatar3";

export const Scenario = ({ avatarType }) => {
  const cameraControls = useRef();
  useEffect(() => {
    if (cameraControls.current) {
      if (avatarType === "omkar") {
        // Closer position for Omkar (zoom effect, optional)
        cameraControls.current.setLookAt(0, 2.2, 5, 0, 1.5, 0, true);
      } else {
        // Default position for other avatars
        cameraControls.current.setLookAt(0, 2.2, 5, 0, 1.0, 0, true);
      }
    }
  }, [avatarType]);

  const avatarComponents = {
    maitri: Avatar,
    harsh: Avatar2,
    omkar: Avatar3,
  };

  const SelectedAvatar = avatarComponents[avatarType] || Avatar;

  return (
    <>
      <CameraControls ref={cameraControls} />
      <Environment preset="sunset" />
      <SelectedAvatar />
    </>
  );
};