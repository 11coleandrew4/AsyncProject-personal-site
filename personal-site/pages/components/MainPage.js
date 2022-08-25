import React, { Component } from 'react';
import MyPicture from './MyPicture';
import Typewriter from 'typewriter-effect';
import LinkedinLogo from './LinkedinLogo';
export default class MainPage extends Component {
  render() {
    return (
      <div id="aboutMe">
        <div id="main-content">
          <h1 className="pageTitle">
            Cole Berman:
            <span id="text">
              <Typewriter
                cursor={' '}
                onInit={(typewriter) => {
                  typewriter
                    .typeString('Home Cook')
                    .deleteAll()
                    .typeString('Guitar Player')
                    .deleteAll()
                    .typeString('Software Engineer')
                    .pauseFor(1000)
                    .pauseFor(1500)
                    .start();
                }}
              />
            </span>
          </h1>
          <div className="my-picture">
            <MyPicture />
            <div id="linkedin-link">
              <LinkedinLogo />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
