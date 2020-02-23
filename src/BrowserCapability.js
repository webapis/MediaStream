import React, { useState, useEffect } from 'react';
import Prop from './Prop';
export default function BrowserCapability({ supportedConstraints }) {
  const [propNames, setPropNames] = useState([]);

  useEffect(() => {
    if (supportedConstraints) {
      setPropNames(Object.keys(supportedConstraints));
    }
  }, [supportedConstraints]);

  return (
    <div>
      <h4>SupportedConstraints</h4>
      <div>
        {propNames &&
          propNames.map(p => {
            return <Prop title={p} value={supportedConstraints[p]} />;
          })}
      </div>
    </div>
  );
}
