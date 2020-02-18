import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import {
  MDBInput,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBIcon,
  MDBSideNavItem,
  MDBSideNavCat,
  MDBSideNavNav,
  MDBSideNav,
  MDBContainer,
} from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Navbar extends Component {
state = {
  isOpen: false
};

toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

logout(event) {
  event.preventDefault()
  console.log('logging out')
  axios.post('/user/logout').then(response => {
    console.log(response.data)
    if (response.status === 200) {
      this.props.updateUser({
        loggedIn: false,
        username: null
      })
    }
  }).catch(error => {
      console.log('Logout error')
  })
}

render() {
  const navStyle = {
    paddingLeft:
      this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
  };
  const specialCaseNavbarStyles = {
    WebkitBoxOrient: "horizontal",
    flexDirection: "row"
  };
  return (
<MDBNavbar
              id="navCat"
              style={navStyle}
              color="light-green darken-3"
              double
              expand="md"
              fixed="top"
              dark
              scrolling
            >
              <MDBNavbarNav left>
                <MDBNavItem>
                  <div
                    onClick={this.handleToggleClickA}
                    key="sideNavToggleA"
                    style={{
                      lineHeight: "32px",
                      marginRight: "1em",
                      verticalAlign: "middle"
                    }}
                  >
                    <MDBIcon icon="bars" color="white" size="2x" />
                  </div>
                </MDBNavItem>
                <MDBNavItem
                  className="d-none d-md-inline white-text"
                  style={{ paddingTop: 5 }}
                >
                  Chuana Catalog
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right style={specialCaseNavbarStyles}>
                <MDBNavItem active>
                  <MDBNavLink to="#!">
                    <MDBIcon icon="envelope" className="d-inline-inline" />{" "}
                    <div className="d-none d-md-inline">Contact</div>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="#!">
                    <MDBIcon
                      fas
                      icon="shopping-cart"
                      className="d-inline-inline"
                    />{" "}
                    <div className="d-none d-md-inline">Cart</div>
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className="d-none d-md-inline">Account</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right>
                      <MDBDropdownItem onClick={this.filter}>
                        Account Page
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#!">
                        Account Settings
                      </MDBDropdownItem>
                      <MDBDropdownItem href="#/login" onClick={this.logout}>
                        <Link to="/"  onClick={() => setTimeout(function() {window.location.reload()}, 500)}>logout</Link>
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBNavbar>
    );
  }
}

export default Navbar;