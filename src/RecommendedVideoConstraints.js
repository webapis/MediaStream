import React, { useState, useEffect } from 'react';

const style = {
  controls: {
    position: 'absolute',
    left: '20px',
    top: 0,
    display: 'flex',
    width: '100%',

    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
  
  }
};
export default function RecommenedVideoConstraints({ applyConstraints }) {
  const [value, setValue] = useState(null);
  const [orientation, setOrientation] = useState('landscape');
  const [first, setFirst] = useState(1280);
  const [second, setSecond] = useState(720);
  const [frameRate, setFrameRate] = useState(30);
  function handleChange(e) {
    setValue(e.target.value);
  }
  function changeOriantation(e) {
    debugger;
    setOrientation(e.target.value);
  }
  function changeFrameRate(e) {
    setFrameRate(e.target.value);
  }
  useEffect(() => {
    if (value || orientation) {
      debugger;
      switch (value) {
        case '3':
          if (orientation === 'landscape') {
            setFirst(1280);
            setSecond(720);
          }
          if (orientation === 'portrait') {
            setFirst(720);
            setSecond(1280);
          }

          break;
        case '4':
          if (orientation === 'landscape') {
            setFirst(854);
            setSecond(480);
          }
          if (orientation === 'portrait') {
            setFirst(480);
            setSecond(854);
          }
          break;
        case '5':
          if (orientation === 'landscape') {
            setFirst(640);
            setSecond(360);
          }
          if (orientation === 'portrait') {
            setFirst(360);
            setSecond(640);
          }
          break;
        case '6':
          if (orientation === 'landscape') {
            setFirst(426);
            setSecond(240);
          }
          if (orientation === 'portrait') {
            setFirst(240);
            setSecond(426);
          }
          break;
        default:
          if (orientation === 'landscape') {
            setFirst(1280);
            setSecond(720);
          }
          if (orientation === 'portrait') {
            debugger;
            setFirst(720);
            setSecond(1280);
          }
      }
    }
  }, [value, orientation]);
  useEffect(() => {
    applyConstraints({ width: first, height: second, frameRate });
  }, [first, second, orientation, frameRate]);
  return (
    <div style={style.controls}>
      <div>
        <label for="video-size">video size:</label>
        <select id="video-size" value={value} onChange={handleChange}>
          <option defaultValue value="3">
            Large
          </option>
          <option value="4">Medium</option>
          <option value="5">Small</option>
          <option value="6">Extra Small</option>
        </select>
      </div>
      <div>
        <div>
        <label for="portrait">Portait:</label>
          <input
            id="portrait"
            type="radio"
            value="portrait"
            name="orientation"
            checked={orientation === 'portrait'}
            onChange={changeOriantation}
          />
        
          <br />
          <label for="landscape">Landscape:</label>
          <input
            id="landscape"
            type="radio"
            value="landscape"
            name="orientation"
            checked={orientation === 'landscape'}
            onChange={changeOriantation}
          />
         
          <br />
        </div>
        <div>
        <label for="framerate">frameRate:</label>
          <input value={frameRate} type="number" id="framerate" onChange={changeFrameRate} />
        
        </div>
      </div>
    </div>
  );
}

/* <option value="0">2160p:3840x2160</option>
        <option value="1">1440p:2560x1440</option>
        <option value="2">1080p:1920x1080</option> */
