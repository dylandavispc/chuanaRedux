import React, { useState } from "react";
import "./style.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import axios from "axios";
import API from "../../../utils/API.js";
import Navbar from "../../CatNav"
import Sidenav from "../../Sidenav"
import logo from "./chuana white font.png"
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
  MDBContainer
} from "mdbreact";
import MetisMenu from "react-metismenu";
import Footer from "../../Footer";
import { CatalogCards, CatalogList } from "../../CatalogCards";

class Catalog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: this.props.email,
      toggleStateA: false,
      breakWidth: 1300,
      windowWidth: 0,
      redirectTo: null,
      filter: null,
      products: [],
      filteredProducts: []
    };

    this.logout = this.logout.bind(this);
    this.filter = this.filter.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
    this.loadProducts();
    console.log(this.props.userID);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }
  filter = () => {
    console.log(this.props.catagory);

    console.log("filtering...");
    // console.log(products)y
    var type = [this.props.catagory];
    console.log(type)
    var records = this.state.products;
    var typeObj = {};
    type.forEach(function(element) {
      typeObj[element] = true;
    });
    var filteredArray = [];
    records.forEach(function(element) {
      if (typeObj[element.type]) filteredArray.push(element);
    });
    // console.log(filteredArray)
    if (type[0] === "all") {
      this.setState({ filteredProducts: records })
      console.log(this.state.filteredProducts)
    } else {
      this.setState({ filteredProducts: filteredArray });
    }
    // this.setState({ filteredProducts: filteredArray });
    // console.log(this.state.filteredProducts);
    console.log("filter complete!");
  };
  loadProducts = () => {
    API.getProducts()
      .then(res => this.setState({ products: res.data }))
      // .then(res => console.log(res.data))
      .then(
        setTimeout(() => {
          console.log(this.state.products);

          this.filter();
        }, 1000)
      )
      .then(console.log(this.state))
      .catch(err => console.log(err));
  };
  logout(event) {
    this.setState({
      redirectTo: "/"
    });
    // console.log('logging out')
    // axios.post('/user/logout').then(response => {
    //   console.log(response.data)
    //   console.log("logging out")
    //   if (response.status === 200) {
    //     this.props.updateUser({
    //       loggedIn: false,
    //       email: null
    //     })
    //   }
    // }).catch(error => {
    //     console.log('Logout error')
    // })
  }

  handleResize = () =>
    this.setState({
      windowWidth: window.innerWidth
    });
  handleToggleClickA = () => {
    this.setState({
      toggleStateA: !this.state.toggleStateA
    });
  };
  render() {
    const navStyle = {
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "210px" : "16px"
    };
    const mainStyle = {
      margin: "0 6%",
      paddingTop: "5.5rem",
      paddingLeft:
        this.state.windowWidth > this.state.breakWidth ? "240px" : "0"
    };
    const specialCaseNavbarStyles = {
      WebkitBoxOrient: "horizontal",
      flexDirection: "row"
    };
    if (this.state.redirectTo) {
      return <Redirect to={{ pathname: this.state.redirectTo }} />;
    } else {
      return (
        <Router>
          <div className="fixed-sn light-blue-skin">
            <img
              className="mockLogo"
              src={logo}
            />
            <Sidenav filter/>
            <Navbar />
            <main style={mainStyle}>
              <MDBContainer fluid style={{ height: 2000 }} className="mt-5 containerImp">
                <h2>Products:</h2>
                <div></div>
                <br />
                {!this.state.filteredProducts.length ? (
                  <h1 className="text-center">No Products to Display</h1>
                ) : (
                  <CatalogList>
                    {this.state.filteredProducts.map(product => {
                      return (
                        <CatalogCards
                          key={product.name}
                          name={product.name}
                          catagory={product.catagory}
                          disc={product.disc}
                          price={product.price}
                          email={this.props.email}
                        />
                        // <li>{product.name}</li>
                      );
                    })}
                  </CatalogList>
                )}
              </MDBContainer>
            </main>
            <div>
              <Footer />
            </div>
          </div>
        </Router>
      );
    }
  }
}

export default Catalog;
