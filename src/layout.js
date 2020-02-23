import React from 'react';

const style = {
  row: { display: 'flex', padding: 1 },
  col: {
    backgroundColor: '',
    border: 'solid white 1px',
    flex: 1,
    display:'flex'

    
  },
  btnContainer: {},
  desc: { borderLeft: 'solid white 1px', padding: 2 },
  props: {},
  methods: {}
};

export default function Row({ children }) {
  return <div style={style.row}>{children}</div>;
}

export function Col({ children }) {
  return <div style={{...style.col}}>{children}</div>;
}

export function BtnContainer({ children }) {
  return <div style={style.BtnContainer}>{children}</div>;
}

export function Description({ children }) {
  return <div style={style.desc}>{children}</div>;
}

export function Props({ children, title }) {
  return (
    <div style={style.props}>
      <h4>{title}:</h4>
      {children}
    </div>
  );
}

export function Methods({ children, methodTitle }) {
  return (
    <div style={style.methods}>
      <h4>{methodTitle}:</h4>
      {children}
    </div>
  );
}

export function Method({ children, description }) {
  return (
    <Row>
      <Col>
        <div style={{ display: 'flex' }}>{children}</div>
      </Col>
    
    </Row>
  );
}
