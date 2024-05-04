import React, { useState } from 'react';
import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

const UiUxDesignSteps = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  return (
    <section className="mil-deep-bg mil-p-120-0">
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          Our Enterprise
        </span>
        <h2 className="mil-mb-120">
          How We <span className="mil-accent">Deliver Our UI/UX</span> Design
          Services
        </h2>
        <Swiper
          {...sliderProps.milTabsSlider}
          className="swiper-container mil-tabs-slider"
        >
          <SwiperSlide className="swiper-slide" data-hash="tab1">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <h3>Discovery</h3>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                    Through meticulous discovery processes, we delve deep into understanding your goals, target audience, and project requirements. By uncovering key insights, we lay the groundwork for a successful design strategy that aligns with your business objectives.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                    In our discovery phase, we conduct extensive research and analysis to gain a comprehensive understanding of your project's scope and objectives. By collaborating closely with your team, we identify key challenges and opportunities, allowing us to develop a clear roadmap for success.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-15 mil-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
                <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/faces/UiSteps-1.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab2">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <h3>Validate</h3>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                    We validate our design decisions through user testing and feedback loops. This iterative process ensures that our designs meet the needs and expectations of your users, leading to a more intuitive and effective user experience.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                    Our validation process involves rigorous testing and analysis to ensure that our designs are not only visually appealing but also highly functional and user-friendly. By gathering feedback from real users, we can identify areas for improvement and make informed decisions to optimize the user experience.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-15 mil-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
                <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/faces/UiSteps-2.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab3">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <h3>Design</h3>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                    Our design phase focuses on crafting visually appealing and user-friendly interfaces that enhance usability and engagement. We leverage best practices and creative solutions to create designs that not only look great but also drive results for your business.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                    During the design phase, we explore various concepts and iterate on designs to find the perfect balance between aesthetics and functionality. Our goal is to create an immersive and seamless user experience that captivates your audience and reinforces your brand identity.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-15 mil-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
                <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/faces/UiSteps-3.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" data-hash="tab4">
            <div
              className="row justify-content-between align-items-center"
              data-swiper-parallax-y={-100}
              data-swiper-parallax-opacity={0}
            >
              <div className="col-lg-7">
                <div className="mil-hori-box mil-mb-60">
                  <h3>Improve</h3>
                </div>
                <div className="row mil-mb-60">
                  <div className="col-lg-6">
                    <p>
                    Continuous improvement is at the core of our approach. We analyze user data and metrics to identify areas for enhancement, allowing us to refine and optimize the user experience over time. By staying agile and responsive, we ensure that your UI/UX design evolves to meet the changing needs of your audience.
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <p>
                    Through ongoing analysis and iteration, we strive to stay ahead of the curve and deliver cutting-edge solutions that exceed your expectations. By continuously refining and improving our designs, we ensure that your digital presence remains competitive and relevant in today's ever-evolving landscape.
                    </p>
                  </div>
                </div>
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-15 mil-mr-30"
                >
                  <span>Hire UI / UX Designers</span>
                </Link>
                <a href="#." className="mil-link mil-mb-60">
                  <span>See More</span>
                  <i className="fas fa-arrow-right" />
                </a>
              </div>
              <div className="col-lg-4">
                <div
                  className="mil-circle-illustration mil-with-dots mil-mb-60"
                  data-swiper-parallax-scale=".8"
                >
                  <div className="mil-circle-bg" />
                  <div className="mil-image-frame">
                    <img src="img/faces/UiSteps-4.png" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="mil-tab-buttons mil-mt-60-adapt">
          <a className={activeTab === 'tab1' ? 'mil-active' : ''} href="#tab1" onClick={() => handleTabClick('tab1')}>
            <span>Discovery</span>
          </a>
          <a className={activeTab === 'tab2' ? 'mil-active' : ''} href="#tab2" onClick={() => handleTabClick('tab2')}>
            <span>Validate</span>
          </a>
          <a className={activeTab === 'tab3' ? 'mil-active' : ''} href="#tab3" onClick={() => handleTabClick('tab3')}>
            <span>Design</span>
          </a>
          <a className={activeTab === 'tab4' ? 'mil-active' : ''} href="#tab4" onClick={() => handleTabClick('tab4')}>
            <span>Improve</span>
          </a>
        </div>
      </div>
    </section>
  );
};
export default UiUxDesignSteps;
