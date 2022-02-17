import gsap, { Power3, Linear, Power0 } from 'gsap';

const reverseAnimation = (index: number) => {
  switch (index) {
    // reverse section 2
    case 2:
      gsap.to('.section-two-title', {
        opacity: 0,
        y: -700,
        duration: 0.8,
        ease: 'power4.out',
      });
      break;

    // reverse section 3
    case 3:
      gsap.to('.section-three-item-1', {
        y: 700,
        opacity: 0,
      });
      gsap.to('.section-three-item-2', {
        y: -700,
        opacity: 0,
      });
      gsap.to('.section-three-item-3', {
        y: 700,
        opacity: 0,
      });
      gsap.to('.section-three-item-4', {
        y: -700,
        opacity: 0,
      });
      break;

    // reverse section 4
    case 4:
      gsap.to('#fourthPage-title', {
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        y: -100,
      });
      gsap.to('#fourthPage-container', {
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        x: '-100%',
      });
      break;

    // reverse section 5
    case 5:
      const tl4 = gsap.timeline();
      tl4
        .to('.section-five-inner-wrapper-1 .section-five-text', {
          x: 200,
          autoAlpha: 0,
          duration: 1,
        })
        .to(
          '.section-five-inner-wrapper-2 .section-five-text',
          {
            x: 200,
            autoAlpha: 0,
            duration: 0.6,
          },
          '-=0.6'
        )
        .to(
          '.section-five-inner-wrapper-1 .section-five-link',
          {
            y: -50,
            autoAlpha: 0,
            duration: 0.6,
          },
          '-=0.4'
        )
        .to(
          '.section-five-inner-wrapper-2 .section-five-link',
          {
            x: 200,
            autoAlpha: 0,
            duration: 0.4,
          },
          '-=0.4'
        )
        .to('.section-five-title', {
          y: -300,
          autoAlpha: 0,
          duration: 0.6,
        });
      break;
    default:
      break;
  }
};

const OnLeave = (origin: any, destination: any, direction: any) => {
  switch (destination.index) {
    // section 1
    case 0:
      const tl = gsap.timeline();
      tl.from(
        '.section-one-title',
        {
          autoAlpha: 0,
          x: -400,
          duration: 1.4,
          ease: 'power2.out',
        },
        0.3
      )
        .from(
          '.section-one-main > .section-one-link',
          {
            autoAlpha: 0,
            x: -780,
            duration: 0.8,
            ease: 'power2.out',
          },
          '-=1.2'
        )
        .from(
          '.section-one-header',
          {
            autoAlpha: 0,
            y: -980,
            duration: 1.2,
            ease: 'power2.out',
          },
          '-=1.2'
        );
      reverseAnimation(2);
      break;

    //section 2
    case 1:
      gsap.fromTo(
        '.section-two-title',
        {
          autoAlpha: 0,
          y: -700,
        },
        { autoAlpha: 1, y: 0, duration: 0.8, delay: 0.2 }
      );
      reverseAnimation(3);
      break;

    // section 3
    case 2:
      const tl2 = gsap.timeline();
      tl2
        .fromTo(
          '.section-three-item-1',
          {
            y: 700,
            opacity: 0,
            ease: 'power3.out',
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          0.1
        )
        .fromTo(
          '.section-three-item-2',
          {
            y: -700,
            opacity: 0,
            ease: 'power3.out',
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          '-=0.3'
        )
        .fromTo(
          '.section-three-item-3',
          {
            y: 700,
            opacity: 0,
            ease: 'power3.out',
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          '-=0.3'
        )
        .fromTo(
          '.section-three-item-4',
          {
            y: -700,
            opacity: 0,
            ease: 'power3.out',
          },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
          },
          '-=0.3'
        );
      reverseAnimation(4);
      reverseAnimation(2);
      break;

    // section 4
    case 3:
      const tl3 = gsap.timeline();
      tl3
        .fromTo(
          '#fourthPage-title',
          {
            y: -500,

            opacity: 0,
            ease: Power3.easeOut,
          },
          {
            duration: 0.8,
            y: 0,
            opacity: 1,
          },
          0.2
        )
        .fromTo(
          '#fourthPage-container',
          {
            x: -500,

            opacity: 0,
            ease: Power3.easeOut,
          },
          {
            duration: 0.8,
            x: 0,
            opacity: 1,
          }
        );
      reverseAnimation(3);
      reverseAnimation(5);
      break;

    // section 5
    case 4:
      const tl4 = gsap.timeline();
      tl4
        .fromTo(
          '.section-five-inner-wrapper-1 .section-five-text',
          {
            x: 200,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 1,
          },
          0.2
        )
        .fromTo(
          '.section-five-inner-wrapper-2 .section-five-text',
          {
            x: 200,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.6,
          },
          '-=0.6'
        )
        .fromTo(
          '.section-five-inner-wrapper-1 .section-five-link',
          {
            y: -50,
            autoAlpha: 0,
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.6,
          },
          '-=0.4'
        )
        .fromTo(
          '.section-five-inner-wrapper-2 .section-five-link',
          {
            x: 200,
            autoAlpha: 0,
          },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.4,
          },
          '-=0.4'
        )
        .fromTo(
          '.section-five-title',
          {
            y: -300,
            autoAlpha: 0,
          },
          { y: 0, autoAlpha: 1, duration: 0.6 },
          0.2
        );
      reverseAnimation(4);
      break;

    default:
      break;
  }
};

export default OnLeave;
