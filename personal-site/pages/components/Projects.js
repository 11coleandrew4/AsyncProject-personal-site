import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import GottaGoPicture from './GottaGoPicture';
import DogAppPicture from './DogAppPicture';
import GetMoneyPicture from './GetMoneyPicture';
import GottaGoDemo from './GottaGoDemo';
import GottaGoLogo from './GottaGoLogo';

export default class Projects extends Component {
  render() {
    return (
      <div id="projects">
        <Head>
          <title>Cole Berman</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div>
          <div id="test">
            <div>
              <GottaGoDemo />
            </div>

            <div id="gotta-go-logo-container">
              <GottaGoLogo />

              <div id="gotta-go-text">
                <br />
                <br />
                <p>
                  GottaGo is a fully functional mobile application that shows
                  and directs users to the closest public restrooms. Users also
                  have the option of filtering by wheelchair accessible
                  restrooms as well as restrooms with baby changing tables. This
                  app leverages data from a third-party API as well as the
                  react-native-maps and react-native-open-maps libraries.
                  <br />
                  <span id="gottago-link">
                    <Link href="https://github.com/11coleandrew4/GottaGo">
                      Check it out on GitHub!
                    </Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="picture" id="gotta-go-picture">
          <GottaGoPicture />
        </div>
        <div className="picture" id="dog-app-picture">
          <DogAppPicture />
        </div>
        <div className="picture" id="get-money-app-picture">
          <GetMoneyPicture />
        </div> */}
      </div>
    );
  }
}
