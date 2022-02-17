import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';
import logo from '../../../../../Assets/Images/logo-icon.png';
import './SectionOne.scss';

gsap.registerPlugin(ScrollTrigger);
function SectionOne() {
  return (
    <div className="section-one">
      <div className="section-one-container">
        <div className="section-one-main">
          <div className="section-one-header">
            <div className="section-one-logo">
              <img src={logo} alt="concept cube logo" />
            </div>
            <a href="" className="section-one-link">
              About The Project
            </a>
          </div>
          <h1 className="section-one-title">
            everything <br /> is in the <br /> conceptcube
          </h1>
          <a href="" className="section-one-link">
            ConceptCube Company Introduction
          </a>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
