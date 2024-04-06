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
      rearCamera = devices.find(device => device.kind === 'videoinput' && device.label.includes('back'));
      // console.log("camera de la laptop" + webcamRef)
    } catch (error) {
      console.error('Error accessing media devices:', error);
    }
  };
  enumerateDevices()
  return (
    <div>
      <Webcam
        audio={false}
        ref={rearCamera}
        screenshotFormat="image/jpeg"
        width="40%"
      />
      <p>MAMA</p>
    </div>
  )
}