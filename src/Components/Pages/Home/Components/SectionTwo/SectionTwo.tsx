import React from 'react';
import Slider from 'react-slick';
import img1 from '../../../../../Assets/Images/console-img-1.png';
import img2 from '../../../../../Assets/Images/console-img-2.png';
import img3 from '../../../../../Assets/Images/console-img-3.png';
import img4 from '../../../../../Assets/Images/console-img-4.png';
import img5 from '../../../../../Assets/Images/console-img-5.png';
import img6 from '../../../../../Assets/Images/console-img-6.png';
import './SectionTwo.scss';

function SectionTwo() {
  return (
    <div className="section-two">
      <div className="section-two-container">
        <div className="section-two-main">
          <div className="section-two-title">
            Creative,
            <br />
            Fun and- <br />
            Enjoyable <br />
            work <br />
            Impressive
          </div>
          <Slider
            className="section-two-slider"
            autoplay
            infinite
            pauseOnHover
            autoplaySpeed={2000}
            arrows={false}
            fade
            centerMode
          >
            <div className="section-two-img">
              <img src={img1} alt="nitendo switch 1" />
            </div>
            <div className="section-two-img">
              <img src={img2} alt="nitendo switch 2" />
            </div>
            <div className="section-two-img">
              <img src={img3} alt="nitendo switch 3" />
            </div>
            <div className="section-two-img">
              <img src={img4} alt="nitendo switch 4" />
            </div>
            <div className="section-two-img">
              <img src={img5} alt="nitendo switch 5" />
            </div>
            <div className="section-two-img">
              <img src={img6} alt="nitendo switch 6" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
