import React, { useRef, useEffect } from 'react';
import RecommendedVideoConstraints from './RecommendedVideoConstraints';
export default function SetVideoTrackConstraints({ mediaStream,applyConstraints }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (mediaStream) {
      debugger;
      videoRef.current.srcObject = mediaStream;
    }
  }, [mediaStream]);

  return (
    <div style={{ display: 'flex',position:'relative' }}>
      <video ref={videoRef} autoPlay={true}></video>
      <RecommendedVideoConstraints applyConstraints={applyConstraints}/>
    </div>
  );
}
