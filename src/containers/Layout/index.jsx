import React from "react";

import Header from "../../components/header";
import SideBar from "../../components/sidebar";
import Content from "../../components/Content";

export default function Layout() {
  return (
    <div className="c-app c-default-layout">
      <SideBar />
      <div className="c-wrapper">
        <Header />
        <div className="c-body">
          <Content />
        </div>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
