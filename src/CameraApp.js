// import React, { useState, useEffect } from 'react';

// const CameraApp = ({ rearCamera }) => {
//     const [stream, setStream] = useState(null);
//     const [facingMode, setFacingMode] = useState('environment'); // Setează implicit camera pe spate

//     useEffect(() => {
//         const videoConstraints = {
//             facingMode: facingMode
//         };

//         if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
//             console.log('getUserMedia is not supported');
//             return;
//         }

//         navigator.mediaDevices.getUserMedia({ video: videoConstraints })
//             .then(mediaStream => {
//                 setStream(mediaStream);
//                 if (rearCamera.current) {
//                     rearCamera.current.srcObject = mediaStream;
//                 }
//             })
//             .catch(error => console.error('Error accessing media devices:', error));

//         return () => {
//             if (stream) {
//                 stream.getTracks().forEach(track => {
//                     track.stop();
//                 });
//             }
//         };
//     }, [facingMode, rearCamera]);

//     const switchCamera = () => {
//         setFacingMode(prevMode => (prevMode === 'user' ? 'environment' : 'user'));
//     };

//     return (
//         <div>
//             <button onClick={switchCamera}>Switch Camera</button>
//             <video ref={rearCamera} autoPlay playsInline muted />
//         </div>
//     );
// };

// export default CameraApp;
import React, { useRef, useEffect } from "react";
import Webcam from "react-webcam";

const CameraComponent = ({ enumerateDevices }) => {
    useEffect(() => {
        // Apelați funcția enumerateDevices pentru a obține dispozitivele media
        enumerateDevices();
    }, [enumerateDevices]); // Asigurați-vă că funcția este apelată o singură dată, la încărcarea componentei

    return (
        <div>
            <Webcam
                audio={false}
                screenshotFormat="image/jpeg"
                width="40%"
                videoConstraints={{
                    facingMode: "environment" // Utilizează camera din spate a dispozitivului
                }}
                onUserMediaError={() => {
                    console.error('Error accessing camera');
                }}
            />
        </div>
    );
};

export default CameraComponent;
