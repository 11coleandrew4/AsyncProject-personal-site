import React, { Component } from 'react';
import MyPicture from './MyPicture';
import Typewriter from 'typewriter-effect';
import LinkedinLogo from './LinkedinLogo';
import GithubLogo from './GithubLogo';
import { Slide, Fade, Roll } from 'react-awesome-reveal';
export default class MainPage extends Component {
  render() {
    return (
      <div id="aboutMe">
        <div id="main-content">
          <Fade triggerOnce duration={8000}>
            <h1 className="pageTitle">
              Cole Berman:
              <span id="text">
                <Typewriter
                  cursor={' '}
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(50)
                      .typeString('Problem Solver')
                      .pauseFor(200)
                      .deleteAll()
                      .typeString('Quick Learner')
                      .pauseFor(200)
                      .deleteAll()
                      .typeString('Software Engineer')
                      .pauseFor(1000)
                      .pauseFor(1500)
                      .start();
                  }}
                />
              </span>
            </h1>
          </Fade>

          <div className="my-picture">
            <Slide triggerOnce>
              <MyPicture />
            </Slide>

            <div id="linkedin-link">
              <Roll triggerOnce delay={1000}>
                <LinkedinLogo />
              </Roll>
            </div>
            <div id="github-link">
              <Roll triggerOnce delay={1200}>
                <GithubLogo />
              </Roll>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
