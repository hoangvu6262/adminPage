import React, { Component } from "react";
import "./style.scss";

export default class Footer extends Component {
  render() {
    return (
      <footer className="admin-movie-footer">
        <p>
          Copyright © All rights reserved | This template is made with{" "}
          <i className="icon-heart" aria-hidden="true" /> by Cao Nguyen Hoang
          Vu.
        </p>
      </footer>
    );
  }
}
