import React, { useEffect } from 'react';
import useTabs, { Tab, Tabs } from './Tabs';
import PropsView from './PropsView';
import TrackProps from './track/TrackProps';
import useTrackCapabilities from './track/useTrackCapabilities';
export default function TrackTab({ track, SetConstraints, mediaStream }) {
  const { index, selectTab } = useTabs();
  const {
    capabilities,
    settings,
    constrains,
    getCapabilities,
    getSettings,
    getConstraints,
    applyConstraints
  } = useTrackCapabilities({ track });

  function handleSelectTab(ind) {
    if (ind === 'settings') {
      getCapabilities();
      getSettings();
      getConstraints();
      selectTab(0);
    }
  }
  useEffect(() => {
    getCapabilities();
    getSettings();
    getConstraints();
  }, []);
  return (
    <div>
      <Tabs>
        <Tab
          selectedTab={index}
          index={0}
          selectTab={() => handleSelectTab('settings')}
          title="Capabilities,Constraints,Settings"
        />
        <Tab
          selectedTab={index}
          index={1}
          selectTab={selectTab}
          title="Track Props"
        />
        <Tab
          selectedTab={index}
          index={2}
          selectTab={selectTab}
          title="setConstraints"
        />
      </Tabs>
      <div>
        {index === 0 && (
          <PropsView
            settings={settings}
            capabilities={capabilities}
            constraints={constrains}
          />
        )}
        {index === 1 && <TrackProps track={track} />}
        {index === 2 && (
          <SetConstraints
            mediaStream={mediaStream}
            applyConstraints={applyConstraints}
          />
        )}
      </div>
    </div>
  );
}
