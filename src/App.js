import React, { useEffect, useState, useRef } from 'react';
import './App.css';
function App() {
  const [mediaStream, setMediaStream] = useState(null);
  const [mediaError, setMediaError] = useState(null);
  const [starting, setStarting] = useState(false);
  const videoRef = useRef(null);
  function stopTack() {
    const tracks = mediaStream.getTracks();
    tracks[0].stop();
  }
  async function getMedia(constraints) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      /* use the stream */
      stream.onaddtrack = () => {
        debugger;
      };
      setMediaStream(stream);
      setStarting(false);
    } catch (err) {
      /* handle the error */
      setMediaError(err);
      setStarting(false);
    }
  }

  useEffect(() => {
    if (mediaStream && videoRef && videoRef.current) {
      videoRef.current.srcObject = mediaStream;
    }
    if (mediaError) {
    }
  }, [mediaStream, mediaError, videoRef, starting]);
  function startMediaStream() {
    setStarting(true);
    getMedia({ video: true, audio: false });
  }
  if (mediaError) {
    return <div>{mediaError.message}</div>;
  }
  if (starting) {
    return <div>Loading...</div>;
  }
  return (
    <div className="App">
      <div>
        <video ref={videoRef} autoPlay></video>
        <div>
          mediaStream.active:{mediaStream && mediaStream.active.toString()}
        </div>
        <div>
          mediaStream.ended:
          {mediaStream && mediaStream.ended && mediaStream.ended.toString()}
        </div>
        <div>
          mediaStream.id:{mediaStream && mediaStream.id && mediaStream.id}
        </div>
      </div>
      <div>
        <button onClick={startMediaStream}>Start</button>
        <button onClick={stopTack}>Stop</button>
      </div>
    </div>
  );
}

export default App;
