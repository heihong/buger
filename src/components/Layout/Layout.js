import React, { Component } from "react";
import Auxi from "../../hoc/Auxi";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
  state = {
    showSlideDrawer: false,
  };
  sideDrawerCloseHandler = () => {
    this.setState({ showSlideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return { showSlideDrawer: !prevState.showSlideDrawer };
    });
  };
  render() {
    return (
      <Auxi>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}></Toolbar>
        <SideDrawer
          open={this.state.showSlideDrawer}
          closed={this.sideDrawerCloseHandler}
          opened={this.sideDrawerOpenHandler}
        ></SideDrawer>
        <main className={classes.Content}>{this.props.children}</main>
      </Auxi>
    );
  }
}

export default Layout;
