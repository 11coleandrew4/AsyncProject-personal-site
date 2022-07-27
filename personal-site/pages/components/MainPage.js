import React, { Component } from 'react';
import MyPicture from './MyPicture';
export default class MainPage extends Component {
  render() {
    return (
      <div id="aboutMe">
        <div className="picture" id="my-picture">
          <MyPicture />
        </div>
        <h1 className="pageTitle">Cole Berman</h1>
        <p className="infoText">
          Weenie ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    );
  }
}