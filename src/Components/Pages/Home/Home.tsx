import ReactFullpage from '@fullpage/react-fullpage';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/all';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import OnLeave from './Components/animations/onLeave';
import SectionFive from './Components/SectionFive/SectionFive';
import SectionFour from './Components/SectionFour/SectionFour';
import SectionOne from './Components/SectionOne/SectionOne';
import SectionThree from './Components/SectionThree/SectionThree';
import SectionTwo from './Components/SectionTwo/SectionTwo';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollToPlugin);

function Home() {
  const fullpageOptions = {
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage'],
  };

  return (
    <div className="page-home">
      <ReactFullpage
        licenseKey={'263DXXXX-B839XXXX-AE67XXXX-F398XXXX'}
        {...fullpageOptions}
        navigation
        scrollingSpeed={700}
        onLeave={OnLeave}
        normalScrollElements={'.itemList'}
        render={() => {
          return (
            <>
              <div className="section">
                <SectionOne />
              </div>

              <div className="section">
                <SectionTwo />
              </div>

              <div className="section">
                <SectionThree />
              </div>

              <div className="section">
                <SectionFour />
              </div>

              <div className="section">
                <SectionFive />
              </div>
            </>
          );
        }}
      />
    </div>
  );
}

export default Home;
