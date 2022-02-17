import React from 'react';
import './SectionFive.scss';
import { MailOutlined } from '@ant-design/icons';

function SectionFive() {
  return (
    <div className="section-five">
      <div className="section-five-container">
        <div className="section-five-main">
          <div className="section-five-inner-wrapper section-five-inner-wrapper-1">
            <p className="section-five-text">Partnetship.</p>
            <div className="section-five-link-wr">
              <a className="section-five-link">looc.tzlee@gmail.com</a>
              <div className="mail">
                <MailOutlined />
              </div>
            </div>
          </div>
          <div className="section-five-inner-wrapper section-five-inner-wrapper-1">
            <p className="section-five-text">Recruiting.</p>
            <div className="section-five-link-wr">
              <a className="section-five-link">looc.tzlee@gmail.com</a>
              <div className="mail">
                <MailOutlined />
              </div>
            </div>
          </div>
          <div className="section-five-inner-wrapper section-five-inner-wrapper-2">
            <p className="section-five-text">Learn more.</p>
            <a className="section-five-link">Learn more about us &gt; </a>
          </div>
          <h4 className="section-five-title">
            Let's <br />
            Make the world <br />
            Together.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default SectionFive;
