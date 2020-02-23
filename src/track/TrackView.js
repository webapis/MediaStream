import React from 'react';
import Row from '../layout';
import TrackProps from './TrackProps';
import TrackCapabilities from './TrackCapabilities';
export default function MediaStreamTrackView({ tracks }) {
  return (
    <Row>
      {tracks &&
        tracks.map(t => {
          return (
            <div>
              <TrackProps track={t} />
              <TrackCapabilities track={t} kind={t.kind} />
            </div>
          );
        })}
    </Row>
  );
}
