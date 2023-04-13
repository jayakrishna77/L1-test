import React from "react";
import { Outlet, Link } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return (
      <>
        <nav>
          <ul>
            <li>
              <Link to="/">Screen1</Link>
            </li>
            <li>
              <Link to="/screen2">Screen2</Link>
            </li>
          </ul>
        </nav>

        <Outlet />
      </>
    );
  }
}

export default Layout;
