import React, { useState } from 'react';
import useMediaStream from './useMediaStream';
import useMediaStreamTrack from './track/useMediaStreamTrack';
import AudioTracks from './track/TrackView';
import VideoTracks from './track/TrackView';
import Prop from './Prop';

import './style.css';
import Row, {
  Col,
  BtnContainer,
  Description,
  Props,
  Methods,
  Method
} from './layout';
export default function MediaStreamView() {
  const {
    getUserMedia,
    mediaStream,
    starting,
    mediaError,
    active,
    readyState,
    id
  } = useMediaStream({
    autoPlay: false,
    constraints: { video: true, audio: true }
  });
  const {
    getAudioTracks,
    getTracks,
    getVideoTracks,
    tracks,
    audioTracks,
    videoTracks
  } = useMediaStreamTrack({ mediaStream });
  return (
    <div className="root">
      <Row>
        <Col>
          <BtnContainer>
            <button onClick={getUserMedia}>getUserMedia()</button>
          </BtnContainer>
        </Col>
      </Row>

      <Row>
        <Col>
          <Props title="MediaStream props">
            <Prop title="id" value={id} />
            <Prop title="active" value={active} />
          </Props>
        </Col>
      </Row>

      <Row>
        <div style={{ display: 'flex' }}>
          <button disabled onClick={getTracks}>
            getTracks
          </button>

          <button disabled={!mediaStream} onClick={getAudioTracks}>
            getAudioTracks
          </button>

          <button disabled={!mediaStream} onClick={getVideoTracks}>
            getVideoTracks
          </button>
        </div>
      </Row>

      <Row>
        <div style={{display:'flex'}}>
        <AudioTracks tracks={audioTracks} />
        <VideoTracks tracks={videoTracks} />
        </div>
   
      </Row>
    </div>
  );
}
