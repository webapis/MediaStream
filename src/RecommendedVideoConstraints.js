import React, { useState, useEffect } from 'react';

export default function RecommenedVideoConstraints({ applyConstraints }) {
  const [value, setValue] = useState(null);

  function handleChange(e) {
    setValue(e.target.value);
  }

  useEffect(() => {
    switch (value) {
      case '3':
        applyConstraints({ width: 1280, height: 720 });
        break;
      case '4':
        applyConstraints({ width: 854, height: 480 });
        break;
      case '5':
        applyConstraints({ width: 640, height: 360 });
        break;
      case '6':
        applyConstraints({ width: 426, height: 240 });
        break;
      default:
        applyConstraints({ width: 1280, height: 720 });
    }
  }, [applyConstraints, value]);

  return (
    <div>
      <select value={value} onChange={handleChange}>
        <option defaultValue value="3">
          720p:1280x720
        </option>
        <option value="4">480p:854x480</option>
        <option value="5">360p:640x360</option>
        <option value="6">240p:426x240</option>
      </select>
    </div>
  );
}

/* <option value="0">2160p:3840x2160</option>
        <option value="1">1440p:2560x1440</option>
        <option value="2">1080p:1920x1080</option> */
