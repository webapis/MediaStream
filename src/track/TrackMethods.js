import React from 'react';
import Row, { Method, Col, Methods } from '../layout';
export default function TrackMethods({
  kind,
  getCapabilities,
  getConstraints,
  getSettings
}) {
  return (
    <div>
      <Row>
        <Col>
          <Methods methodTitle={`${kind} methods`}>
            <Method>
              <button onClick={getCapabilities}>getCapabilities</button>
            </Method>
            <Method>
              <button onClick={getConstraints}>getConstraints</button>
            </Method>
            <Method>
              <button onClick={getSettings}>getSettings</button>
            </Method>
          </Methods>
        </Col>
      </Row>
    </div>
  );
}
