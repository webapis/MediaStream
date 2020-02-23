import React, { useEffect } from 'react';
import Prop from '../Prop';
export default function TrackProps({ track }) {
  useEffect(() => {
    if (track) {
      debugger;
    }
  }, [track]);
  return (
    <div>
      <Prop title="kind" value={track['kind']} />
      <Prop title="id" value={track['id']} />
      <Prop title="label" value={track['label']} />
      <Prop title="enabled" value={track['enabled']} />
      <Prop title="muted" value={track['muted']} />
      <Prop title="readyState" value={track['readyState']} />
      <Prop title="contentHint" value={track['contentHint']} />
    </div>
  );
}
