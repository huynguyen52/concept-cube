import React from 'react';
import { useTranslation } from 'react-i18next';
import Slider from 'react-slick';
import { historyData } from './data/history.data';
import './SectionFour.scss';

const settings = {
  dots: false,
  arrows: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
  ],
};

function SectionFour() {
  const { t } = useTranslation();
  return (
    <section className="section-four">
      <div className="history">
        <div className="container">
          <div className="boxHistory">
            <div className="title" id="fourthPage-title">
              History
            </div>
            <div className="boxContent" id="fourthPage-container">
              <Slider {...settings}>
                {historyData.map((item, idx) => (
                  <div key={idx} className="boxContent_item">
                    <div className="year">{item.year}</div>
                    <div className="itemList">
                      {item.listItem.map((list, idxs) => (
                        <div className="box" key={idxs}>
                          {/* <h2>{list.nameProduct}</h2> */}
                          <h2>
                            {t(
                              `historyData.${idx}.listItem.${idxs}.nameProduct`
                            )}
                          </h2>
                          <p>{list.nameJob}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
