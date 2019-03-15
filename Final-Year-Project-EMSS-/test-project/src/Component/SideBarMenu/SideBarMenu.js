import React from 'react';
import './SideBarMenu.css'
const SideBarMenu = props => {
let drawerClasses = 'side-drawer';
if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
    <h3 className="display-4 ml-5 mt-5">EMS</h3>
      <ul className="mb-4">
        <li>
          <a href="/">Ask a Doctor</a>
        </li>
        <li>
          <a href="/">Blog</a>
        </li>
        <li>
          <a href="/">First Aid</a>
        </li>
        <li>
          <a href="/">Upload Lab Report</a>
        </li>
        <li>
          <a href="/">View Lab Report</a>
        </li>
        <li>
          <a href="/">Delete Lab Report</a>
        </li>
        <li>
          <a href="/">Change Settings</a>
        </li>
        <li>
          <a href="/">About Us</a>
        </li>
      </ul>
    </nav>
  );
};
export default SideBarMenu;
