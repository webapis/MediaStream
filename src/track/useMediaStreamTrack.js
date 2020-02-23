import { useState } from 'react';
export default function useMediaStreamTrack({ mediaStream }) {
  const [tracks, setTracks] = useState([]);
  const [videoTracks, setVideoTracks] = useState([]);
  const [audioTracks, setAudioTracks] = useState([]);

  function getAudioTracks() {
    setAudioTracks(mediaStream.getAudioTracks());

  }
  function getVideoTracks() {
    setVideoTracks(mediaStream.getVideoTracks());
   
  }
  function getTracks() {
    setTracks(mediaStream.getTracks());

  }

  return {
    getAudioTracks,
    getTracks,
    getVideoTracks,
    tracks,
    audioTracks,
    videoTracks
  };
}
