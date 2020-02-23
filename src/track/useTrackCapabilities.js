import { useState } from 'react';
export default function useTrackCapabilities({ track }) {
  const [capabilities, setCapabilities] = useState(null);
  const [settings, setSettings] = useState(null);
  const [constraints, setConstraints] = useState(null);
  function getCapabilities() {
    setCapabilities(track.getCapabilities());
   debugger;
  }
  function getSettings() {
    setSettings(track.getSettings());
  
  }
  function getConstraints() {
    setConstraints(track.getConstraints());
  }
  return {
    getConstraints,
    getCapabilities,
    getSettings,
    capabilities,
    constraints,
    settings
  };
}
