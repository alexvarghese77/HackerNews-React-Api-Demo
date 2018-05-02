import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Hacker News</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="">Top</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">New</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Best</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Ask</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Show</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Jobs</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}