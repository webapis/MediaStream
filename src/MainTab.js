import React from 'react';
import useTabs, { Tab, Tabs } from './Tabs';
import TrackTab from './TrackTab';
import MediaStreamTab from './MediaStreamTab';
import useMediaStream from './useMediaStream';
import useMediaStreamTrack from './track/useMediaStreamTrack';
import BrowserCapability from './BrowserCapability';
export default function MainTab() {
  const { index, selectTab } = useTabs();
  const {
    getUserMedia,
    mediaStream,
    starting,
    mediaError,
    active,
    readyState,
    id,
    getBrowserCapability
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

  function handleSelectTab({ ind, type }) {
    if (type === 'mediaStream') {
      debugger;
      selectTab(ind);
      getUserMedia();
    }
    if (mediaStream) {
      if (type === 'browser') {
        selectTab(ind);
        getBrowserCapability();
      }

      if (type === 'audio') {
        debugger;
        selectTab(ind);
        if (audioTracks.length === 0) {
          getAudioTracks();
        }
      }
      if (type === 'video') {
        debugger;
        selectTab(ind);
        if (videoTracks.length === 0) {
          getVideoTracks();
        }
      }
    }
  }
  return (
    <div>
      <Tabs>
        <Tab
          selectedTab={index}
          title="Browser Capability"
          selectTab={() => handleSelectTab({ ind: 0, type: 'browser' })}
          index={0}
        />
        <Tab
          selectedTab={index}
          title="MediaStream"
          selectTab={() => handleSelectTab({ ind: 1, type: 'mediaStream' })}
          index={1}
        />
        <Tab
        starting={starting}
          disabled={!mediaStream}
          selectedTab={index}
          title="MediaStreamTrack (Video)"
          selectTab={() => handleSelectTab({ ind: 2, type: 'video' })}
          index={2}
        />
        <Tab
          disabled={!mediaStream}
          selectedTab={index}
          title="MediaStreamTrack (Audio)"
          selectTab={() => handleSelectTab({ ind: 3, type: 'audio' })}
          index={3}
        />
      </Tabs>
      <div>
        {index === 0 && <BrowserCapability />}
        {index === 1 && (
          <MediaStreamTab
            active={active}
            readyState={readyState}
            id={id}
            mediaStream={mediaStream}
          />
        )}
        {index === 2 && <TrackTab track={videoTracks[0]} />}
        {index === 3 && <TrackTab track={audioTracks[0]} />}
      </div>
    </div>
  );
}
