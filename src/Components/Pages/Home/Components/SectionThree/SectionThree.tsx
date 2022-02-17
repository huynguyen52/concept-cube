import React from 'react';
import { useTranslation } from 'react-i18next';
import img1 from '../../../../../Assets/Images/on-game-dev-img.png';
import img4 from '../../../../../Assets/Images/on-game-mar-img.png';
import img3 from '../../../../../Assets/Images/on-si-img.png';
import img2 from '../../../../../Assets/Images/on-ui-design-img.png';
import './SectionThree.scss';

const data = [
  {
    id: 1,
    title: (
      <h4 className="section-three-item-title">
        Game <br />
        Development
      </h4>
    ),
    img: img1,
    subTitle: 'Game Development',
    desc: 'VFX, 소셜광고 디자인, 아트웍, 게임 개발 등 이미지와 디자인제작에 필요한 모든 것 그리고 고객이 필요로 하는 기술과 결과물을제공합니다. 또한 모션그래픽 및 자막, 종적 타이포그래피,애니메이션 등 촬영 이미지와 CG를 합성하여 완성도 있는 결과물을도출합니다.',
  },
  {
    id: 2,
    title: (
      <h4 className="section-three-item-title">
        UI <br />
        design
      </h4>
    ),
    img: img2,
    subTitle: 'UI design',
    desc: 'UI/UX, 브랜드/편집/그래픽/산업디자인 및 뉴미디어,컴퍼니/브랜드/소셜/마케팅 디자인 유지보수 등 넓은 바운더리와다양한 경험으로 많은 기업들과 브랜드 디자인을 진행하고 있습니다.고객과 기업의 니즈를 맞추고 조율하여 최상의 결과물을 도출할 수있게 합니다.',
  },
  {
    id: 3,
    title: <h4 className="section-three-item-title">SI</h4>,
    img: img3,
    subTitle: 'SI',
    desc: '개발 영역은 각 단계를 차근히 밟으며 안정적으로 증명을 거쳐 그다양성과 안정성을 인정받고 있습니다. 트렌디하면서 안정성있는개발을 위해 언제나 고민하고 노력하는 개발팀은 기업과의 협업업무부터 자체 플랫폼 개발 등 다양한 업무 를 진행합니다.',
  },
  {
    id: 4,
    title: (
      <h4 className="section-three-item-title">
        Game <br />
        Marketing
      </h4>
    ),
    img: img4,
    subTitle: 'Game Marketing',
    desc: '다양한 사람들이 각자 원하는 문화라는 키워드로 소통하고 나누며참여하는 것이 얼마나 큰 힘이 되는지, 사람을 이어주는 문화사업이얼마나 많은 행복을 주는지 알고 있습니다. Concept cube는 뮤직,세미나 등 다양한 문화 행사를 만들고 함께 나누려 노력합니다.',
  },
];

function SectionThree() {
  const { t } = useTranslation();
  return (
    <div className="section-three">
      <div className="section-three-container">
        <div className="section-three-main">
          {data.map((item, idx) => (
            <div
              className={`section-three-item section-three-item-${item.id}`}
              key={item.id}
            >
              {item.title}
              <div className="section-three-item-image">
                <img src={item.img} alt={item.subTitle} />
              </div>
              <div className="section-three-item-content">
                <h5 className="section-three-item-sub-title">
                  {item.subTitle}
                </h5>
                <p className="section-three-item-desc">
                  {t(`intrduceData.${idx}.content`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
