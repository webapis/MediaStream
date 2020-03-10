import React, { useState } from 'react';
import './css/style.css';

export function NavItem({ children }) {
  return <div className="nav-item">{children}</div>;
}

export default function SideNav({ id, openNav,selectedNav }) {
  const [isOpen, setOpen] = useState(false);
  function toggle() {
    setOpen(prev => !prev);
  }

  return (
    <div
      id={id}
      className="side-nav"
      style={{ height: selectedNav===id ? '100%' : 40 }}
      onClick={toggle}
    >
      <div className="bar-tool" onClick={() => openNav(id)}>
        Bar
      </div>
      <div className="nav-item-cont">
        <NavItem>Item One</NavItem>
        <NavItem>Item Two</NavItem>
        <NavItem>Item Three</NavItem>
        <NavItem>Item Three</NavItem>
        <NavItem>Item Three</NavItem>
        <NavItem>Item Three</NavItem>
        <NavItem>Item Three</NavItem>
      </div>
    </div>
  );
}
