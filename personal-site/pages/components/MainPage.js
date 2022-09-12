// import React, { Component } from 'react';
// import MyPicture from './MyPicture';
// import Typewriter from 'typewriter-effect';
// import LinkedinLogo from './LinkedinLogo';
// import GithubLogo from './GithubLogo';
// import ResumeLogo from './ResumeLogo';
// import { Slide, Fade, Roll } from 'react-awesome-reveal';
// export default class MainPage extends Component {
//   render() {
//     return (
//       <div id="aboutMe">
//         <div id="main-content">
//           <Fade triggerOnce duration={2000}>
//             <h1 className="pageTitle">
//               Cole Berman:
//               <span id="text">
//                 <Typewriter
//                   cursor={' '}
//                   onInit={(typewriter) => {
//                     typewriter
//                       .changeDelay(50)
//                       .typeString('Is he smart?')
//                       .pauseFor(300)
//                       .deleteAll()
//                       .typeString('Yes.')
//                       .pauseFor(500)
//                       .deleteAll()
//                       .typeString('A hard worker?')
//                       .pauseFor(300)
//                       .deleteAll()
//                       .typeString('Yes.')
//                       .pauseFor(500)
//                       .deleteAll()
//                       .typeString('Good looking?')
//                       .pauseFor(300)
//                       .deleteAll()
//                       .typeString('Oh, absolutely.')
//                       .pauseFor(500)
//                       .deleteAll()
//                       .changeDelay(70)
//                       .typeString('Software Engineer')
//                       .pauseFor(1000)
//                       .pauseFor(1500)
//                       .start();
//                   }}
//                 />
//               </span>
//             </h1>
//           </Fade>

//           <div className="my-picture">
//             <Slide triggerOnce>
//               <MyPicture />
//             </Slide>

//             <div id="linkedin-link">
//               <Roll triggerOnce delay={1400}>
//                 <LinkedinLogo />
//               </Roll>
//             </div>
//             <div id="github-link">
//               <Roll triggerOnce delay={1200}>
//                 <GithubLogo />
//               </Roll>
//             </div>
//             <div id="resume-link">
//               <Roll triggerOnce delay={1000}>
//                 <ResumeLogo />
//               </Roll>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
import React, { Component } from 'react';
import MyPicture from './MyPicture';
import Typewriter from 'typewriter-effect';
import LinkedinLogo from './LinkedinLogo';
import GithubLogo from './GithubLogo';
import ResumeLogo from './ResumeLogo';
import { Slide, Fade, Roll } from 'react-awesome-reveal';
export default class MainPage extends Component {
  render() {
    return (
      <div id="aboutMe">
        <div id="main-content">
          <Fade triggerOnce duration={2000}>
            <h1 className="pageTitle">
              Cole Berman:
              <span id="text">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .changeDelay(50)
                      .typeString('Is he smart?')
                      .pauseFor(300)
                      .deleteAll()
                      .typeString('Yes.')
                      .pauseFor(500)
                      .deleteAll()
                      .typeString('A hard worker?')
                      .pauseFor(300)
                      .deleteAll()
                      .typeString('Yes.')
                      .pauseFor(500)
                      .deleteAll()
                      .typeString('Good looking?')
                      .pauseFor(300)
                      .deleteAll()
                      .typeString('Oh, absolutely.')
                      .pauseFor(500)
                      .deleteAll()
                      .changeDelay(70)
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
              {/* <div id="email-text">
                <Slide direction="up" delay={1000}>
                  <a>11coleandrew4@gmail.com</a>
                </Slide>
              </div> */}

              <MyPicture />
            </Slide>

            <div id="linkedin-link">
              <Roll triggerOnce delay={1400}>
                <LinkedinLogo />
              </Roll>
            </div>
            <div id="github-link">
              <Roll triggerOnce delay={1200}>
                <GithubLogo />
              </Roll>
            </div>
            <div id="resume-link">
              <Roll triggerOnce delay={1000}>
                <ResumeLogo />
              </Roll>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
