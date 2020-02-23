import React from 'react';
import './style.css';

export default function TrackProp({ title, value, type, description }) {
  if (type === 'object') {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ fontWeight: 'bold', minWidth: 150 }}>{title}:</div>
        <div style={{ display: 'flex', minWidth: 200 }}>
          <div>min:</div>
          <div>{value && value.min}</div>
        </div>
        <div style={{ display: 'flex', minWidth: 200 }}>
          <div>max:</div>
          <div>{value && value.max}</div>
        </div>
      </div>
    );
  }
  if (type === 'array') {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ fontWeight: 'bold', minWidth: 150 }}>{title}:</div>
        <div className="prop-value">{value && value.toString()}</div>
      </div>
    );
  }
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ fontWeight: 'bold', minWidth: 150 }}>{title}:</div>
      <div className="prop-value">{value && value.toString()}</div>
    </div>
  );
}
