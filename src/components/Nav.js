import React from "react";
import {
  Nav,
  NavItem,
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  NavLink
} from "reactstrap";
import "./Nav.css";
export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink href="#">
              <img src="image\logo1.png" alt="logo" />
            </NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="#">Colloque scientifique</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Workshop</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Think Tank</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Parcours:succes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Raid-Art</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Galerie</NavLink>
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Admin
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Deconnexion</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </Nav>
      </div>
    );
  }
}
