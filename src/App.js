import Webcam from "react-webcam";
import React, { useRef, useState } from "react";

export default function App() {
  const webcamRef = useRef(null);
  // const [imgSrc, setImgSrc] = useState(null);

  // const interval = setInterval(async function () {
  //   if (webcamRef.current) { // Add null check here
  //     let imageSrc = webcamRef.current.getScreenshot();
  //     imageSrc = imageSrc.substring(23);
  //     setImgSrc(imageSrc);

  //     let user_data_face = {
  //       image: imageSrc,
  //     };

  //     const response = await fetch('http://127.0.0.1:5000/photo2material', {
  //       method: 'POST',
  //       body: JSON.stringify(user_data_face),
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     const data = await response.json();
  //     if (data['status'] === true) {
  //       console.log(data);
  //       clearInterval(interval);
  //     }

  //   }
  // },10000);

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