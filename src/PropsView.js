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
          const type = Object.prototype.toString.call(capabilities[p]);
          let dataType = null;
          if (type === '[object Array]') {
            dataType = 'array';
          }
          if (type === '[object Object]') {
            dataType = 'object';
          }

          if (type === '[object String]') {
            dataType = 'string';
          }
       
          return (
            <Row>
              <Col>
                <Prop
                  key={i}
                  title={p}
                  value={capabilities[p]}
                  type={dataType}
                />
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
