import React, { Component } from 'react';

export default class Navbar1 extends Component {
  constructor() {
    super();
  }

  render() {
    const { clickHandler } = this.props;
    return (
      <div id="navbar-container">
        <div id="navbarAll">
          <div id="navbarBody">
            <div id="navbarUl">
              <ul>
                <li className="list active" id="home">
                  <a href="#">
                    <span className="icon" onClick={clickHandler}>
                      <ion-icon name="home-outline"></ion-icon>
                    </span>

                    <span className="text">Home</span>
                  </a>
                </li>
                <li className="list" id="projects">
                  <a href="#">
                    <span className="icon" onClick={clickHandler}>
                      <ion-icon name="file-tray-stacked-outline"></ion-icon>
                    </span>

                    <span className="text">Projects</span>
                  </a>
                </li>
                <div className="indicator"></div>
              </ul>
            </div>
          </div>

          <script
            type="module"
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
          ></script>
          <script
            noModule
            src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
          ></script>
        </div>
        <div></div>
      </div>
    );
  }
}
