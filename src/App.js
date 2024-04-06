import Webcam from "react-webcam";
import React, { useRef, useState, useEffect } from "react";
import CameraComponent from "./CameraComponent";

export default function App() {
  const webcamRef = useRef(null);
  // Funcția care enumerează dispozitivele media
  const enumerateDevices = async () => {
    try {
      // Obține dispozitivele media disponibile
      const devices = await navigator.mediaDevices.enumerateDevices();
      console.log("MERGE?????" + devices);
      const rearCamera = devices.find(device => device.kind === 'videoinput');
      console.log("camera de la laptop" + rearCamera)
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };
  enumerateDevices()
  return (
    <div>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width="40%"
      />
      <p>MAMA</p>
    </div>
  )
}