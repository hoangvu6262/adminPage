import React, { Component } from "react";
// import movieicon from "../../assets/img/movieicon.png";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import navigation from "./_nav";

import { connect } from "react-redux";

class SideBar extends Component {
  render() {
    return (
      <CSidebar show={this.props.show}>
        <CSidebarBrand className="d-md-down-none" to="/">
          <CIcon
            className="c-sidebar-brand-full"
            name="logo-negative"
            height={35}
          />
          <CIcon
            className="c-sidebar-brand-minimized"
            name="sygnet"
            height={35}
          />
        </CSidebarBrand>
        <CSidebarNav>
          <CCreateElement
            items={navigation}
            components={{
              CSidebarNavDivider,
              CSidebarNavDropdown,
              CSidebarNavItem,
              CSidebarNavTitle,
            }}
          />
        </CSidebarNav>
        <CSidebarMinimizer className="c-d-md-down-none" />
      </CSidebar>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    show: state.sidebar.sidebarShow,
  };
};

export default connect(mapStateToProps)(SideBar);
