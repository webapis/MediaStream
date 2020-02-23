import React from 'react';
import useTrackCapabilities from './useTrackCapabilities';
import Row, {Col } from '../layout';
import PropsView from '../PropsView';
import TrackMethods from './TrackMethods';
export default function TrackCapablilities({ track, kind }) {
  const {
    getCapabilities,
    getConstraints,
    getSettings,
    capabilities,
    constraints,
    settings
  } = useTrackCapabilities({ track });
  debugger;
  return (
    <div>
      <Row>
        <Col>
          <TrackMethods
            kind={track.kind}
            getCapabilities={getCapabilities}
            getConstraints={getConstraints}
            getSettings={getSettings}
          />
        </Col>
      </Row>
      <Row>
        {capabilities && (
          <PropsView title={`${kind} capablilites`} settings={capabilities} />
        )}
      </Row>
      <Row>
        {settings && (
          <PropsView title={`${kind} settings`} settings={settings} />
        )}
      </Row>
    </div>
  );
}
