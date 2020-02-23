import { useState, useEffect } from 'react';
export default function useMediaStream({
  autoPlay = false,
  constraints = { video: true, audio: true }
}) {
  const [mediaStream, setMediaStream] = useState(null);
  const [active, setActive] = useState(false);
  const [readyState, setReadyState] = useState('');
  const [id, setId] = useState(null);
  const [starting, setStarting] = useState(false);
  const [mediaError, setMediaError] = useState(null);
  const [supportedConstraints, setSupportedConstraints] = useState(null);
  function getSupportedConstraints() {
    setSupportedConstraints(navigator.mediaDevices.getSupportedConstraints());
  }

  useEffect(() => {
    if (autoPlay && constraints && !mediaStream) {
      setStarting(true);
      getUserMedia(constraints);
    }
  }, [autoPlay, mediaStream, constraints]);

  useEffect(() => {
    if (mediaStream) {
      setReadyState(mediaStream.readyState);
      setId(mediaStream.id);
      setActive(mediaStream.active);
    }
  }, [mediaStream]);
  async function getUserMedia() {
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
  return {
    getUserMedia,
    mediaStream,
    starting,
    mediaError,
    active,
    readyState,
    id,
    getSupportedConstraints,
    supportedConstraints
  };
}
