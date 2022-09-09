import React from "react";
import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { NavLink as RRNavLink } from "react-router-dom";

export default function Navi() {
  return (
    <div className="mb-2 ">
      <Navbar className="color-nav border square rounded-pill "  >
        <Nav > <NavItem>
          <NavLink tag={RRNavLink} to="/">
            Create
          </NavLink>
        </NavItem>

          <NavItem>
            <NavLink
              to="/read"
              tag={RRNavLink}
            >
              Read
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              to="/update"
              tag={RRNavLink}>Update</NavLink>
          </NavItem>
        </Nav>

      </Navbar>
    </div>
  );
}
