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
import { Link } from "react-router-dom";
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
            <NavLink >
             <Link className="t_link" to='/colloques' >Colloque scientifique</Link>
              </NavLink>
          </NavItem>
          <NavItem>
            <NavLink >
            <Link className="t_link" to='/Workshop' >Workshop</Link>
            </NavLink>
            
          </NavItem>
          <NavItem>
            <NavLink>
            <Link className="t_link" to='/ThinkTanks' >Think Tank</Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink ><Link className="t_link" to='/Parcour' >Parcours succes</Link></NavLink>
          </NavItem>
          <NavItem>
            <NavLink > <Link className="t_link" to='/Art' >Raid-Art </Link></NavLink>
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
