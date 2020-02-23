import React from 'react';
import useTabs, { Tabs, Tab } from './Tabs';
import MediaStreamProps from './MediaStreamProps';
export default function MediaSteamTab({ mediaStream,id,active,readyState }) {
  const { index, selectTab } = useTabs();

  return (
    <div>
      <Tabs>
        <Tab title="MediaStream Props" selectTab={selectTab} index={0} />
      </Tabs>
      <div>{index === 0 && <MediaStreamProps mediaStream={mediaStream} id={id}active={active} readyState={readyState}/>}</div>
    </div>
  );
}
