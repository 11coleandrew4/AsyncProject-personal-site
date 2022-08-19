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
                    // .pauseFor(300)
                    .deleteAll()
                    // .typeString('Amature Comedian')
                    // // .pauseFor(300)
                    // .deleteAll()
                    .typeString('Guitar Player')
                    // .pauseFor(300)
                    .deleteAll()
                    .typeString('Software Engineer')
                    .pauseFor(1000)
                    //.typeString(' (..... and your next great hire?)')
                    .pauseFor(1500)
                    // .deleteChars(34)
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
