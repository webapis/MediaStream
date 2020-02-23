import React, { useState } from 'react';
const style = {
  tabs: { backgroundColor: 'yellow', display: 'flex' },
  tab: {
    backgroundColor: 'orange',
    flex: 1,
    margin: 2,
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
};
export default function useTabs() {
  const [index, setIndex] = useState(0);

  function selectTab(id) {
    // if(!disabled)
    setIndex(id);
  }
  return { selectTab, index };
}

export function Tab({
  selectTab,
  title,
  index,
  selectedTab,
  disabled = false,
  starting
}) {
  return (
    <div
      style={{
        ...style.tab,
        backgroundColor: index === selectedTab ? '#BA68C8' : '#F3E5F5',
        color: disabled ? '#dddddd' : 'black'
      }}
      onClick={() => selectTab(index)}
    >
      {starting ? <div>loading...</div> : title}
    </div>
  );
}

export function Tabs({ children }) {
  return <div style={style.tabs}>{children}</div>;
}
