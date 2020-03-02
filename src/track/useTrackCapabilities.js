import { useState, useEffect } from 'react';
export default function useTrackCapabilities({ track }) {
  const [capabilities, setCapabilities] = useState(null);
  const [settings, setSettings] = useState(null);
  const [constraints, setConstraints] = useState(null);

  function getCapabilities() {
    setCapabilities(track.getCapabilities());
  }
  function getSettings() {
    setSettings(track.getSettings());
  }
  function getConstraints() {
    setConstraints(track.getConstraints());
  }

  function applyConstraints(constr) {
  
    track.applyConstraints(constr).then(() => {
      getSettings();
     
    });
  }

  return {
    getConstraints,
    getCapabilities,
    applyConstraints,
    getSettings,
    capabilities,
    constraints,
    settings
  };
}
