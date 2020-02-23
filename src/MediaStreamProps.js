import React from 'react';

const style = {
  root: {
    display: 'flex'
  }
};

function Prop({ title, value }) {
  return (
    <div style={style.root}>
      <div>title:</div>
      <div>{value && value.toString()}</div>
    </div>
  );
}

export default function MediaStreamProps({
  mediaStream,
  id,
  active,
  readyState
}) {
  return (
    <div>
      <Prop title="active" value={active} />
      <Prop title="id" value={id} />
      <Prop title="readyState" value={readyState} />
    </div>
  );
}
