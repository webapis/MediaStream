import React, { useState } from 'react';
import './css/style.css';
import SideNav from './SideNav';
export default function SideBar() {
  const [selectedNav, setSelectedNav] = useState(0);

  function openNav(id) {
    setSelectedNav(id);
  }
  return (
    <div className="side-bar">
      <SideNav selectedNav={selectedNav} id={0} openNav={openNav} />
      <SideNav selectedNav={selectedNav} id={1} openNav={openNav} />
      <SideNav selectedNav={selectedNav} id={2} openNav={openNav} />
    </div>
  );
}
