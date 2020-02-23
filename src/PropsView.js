import React, { useEffect, useState } from 'react';
import Prop from './Prop';
import Row, { Col, Props } from './layout';

export default function PropsView({
  title,
  settings,
  capabilities,
  constraints
}) {
  const [propNames, setPropNames] = useState([]);

  useEffect(() => {
    if (capabilities) {
      debugger;
      setPropNames(Object.keys(capabilities));
    }
  }, [capabilities]);

  return (
    <div>
      <Row>
        <Col>CAPABILITIES</Col>
        <Col>SETTINGS</Col>
      </Row>
      {propNames.length > 0 &&
        propNames.map((p, i) => {
          const type = typeof capabilities[p];
          debugger;
          return (
            <Row>
              <Col>
                <Prop key={i} title={p} value={capabilities[p]} type={type} />
              </Col>

              <Col>
                <Prop key={i} title={p} value={settings[p]} />
              </Col>
            </Row>
          );
        })}
    </div>
  );
}
