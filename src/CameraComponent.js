import React, { useState, useEffect } from 'react';

const CameraComponent = () => {
    const [stream, setStream] = useState(null);

    useEffect(() => {
        const getCameraStream = async () => {
            try {
                // Obține dispozitivele media disponibile
                const devices = await navigator.mediaDevices.enumerateDevices();
                console.log(devices);
                // // Identifică dispozitivul video din spate
                // const rearCamera = devices.find(device => device.kind === 'videoinput' && device.label.includes('back'));
                // // Configurează constrângerile pentru a selecta camera din spate
                // const constraints = {
                //     video: {
                //         deviceId: rearCamera ? { exact: rearCamera.deviceId } : undefined,
                //     },
                // };
                // // Obține fluxul video folosind constrângerile
                // const mediaStream = await navigator.mediaDevices.getUserMedia(constraints);
                // // Actualizează starea cu fluxul video
                // setStream(mediaStream);
            } catch (error) {
                console.error('Error accessing camera:', error);
            }
        };

        // Apelează funcția pentru a obține fluxul video
        getCameraStream();

        // Cleanup: oprește fluxul video când componenta este dezmontată
        // return () => {
        //     if (stream) {
        //         stream.getTracks().forEach(track => track.stop());
        //     }
        // };
        return getCameraStream;
    }, []);
};

export default CameraComponent;
