import React, { useState } from "react";
import { sliderProps } from "@/src/common/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
const MobileAppDevelopmentNavTabs = () => {
  const [activeTab, setActiveTab] = useState("tab-l-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="mil-p-120-60">
      <div className="mil-deco" style={{ top: 0, right: "15%" }} />
      <div className="container">
        <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
          All Devices
        </span>
        <h2 className="mil-mb-90">
          <span className="mil-accent">End-to-End</span> Mobile Development
          Services
        </h2>
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5">
            <ul className="mil-tabs-left-nav mil-mb-60">
              <li>
                <a href="#tab-l-1" className={`mil-h4 ${activeTab === "tab-l-1" ? "mil-active" : ""}`} onClick={() => handleTabClick("tab-l-1")}>
                  Discovery &amp; R&amp;D
                </a>
              </li>
              <li>
                <a href="#tab-l-2" className={`mil-h4 ${activeTab === "tab-l-2" ? "mil-active" : ""}`} onClick={() => handleTabClick("tab-l-2")}>
                  UX/UI Design
                </a>
              </li>
              <li>
                <a href="#tab-l-3" className={`mil-h4 ${activeTab === "tab-l-3" ? "mil-active" : ""}`} onClick={() => handleTabClick("tab-l-3")}>
                  Development
                </a>
              </li>
              <li>
                <a href="#tab-l-4" className={`mil-h4 ${activeTab === "tab-l-4" ? "mil-active" : ""}`} onClick={() => handleTabClick("tab-l-4")}>
                  QA
                </a>
              </li>
              <li>
                <a href="#tab-l-5" className={`mil-h4 ${activeTab === "tab-l-5" ? "mil-active" : ""}`} onClick={() => handleTabClick("tab-l-5")}>
                  Launch
                </a>
              </li>
              <li>
                <a href="#tab-l-6" className={`mil-h4 ${activeTab === "tab-l-6" ? "mil-active" : ""}`} onClick={() => handleTabClick("tab-l-6")}>
                  Maintenance &amp; Support
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-6">
            <Swiper
              {...sliderProps.milTabsSlider}
              className="swiper-container mil-tabs-slider mil-mb-60"
            >
              <SwiperSlide className="swiper-slide" data-hash="tab-l-1">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>Our comprehensive Discovery & R&D phase involves understanding your project requirements, conducting market research, and identifying opportunities for innovation. We lay the groundwork for a successful mobile app development journey.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-2">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>Our UX/UI design process focuses on creating intuitive, user-friendly interfaces that enhance the overall user experience. We prioritize usability and aesthetics to ensure your mobile app stands out in the market.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-3">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>With our expert development team, we bring your mobile app vision to life. Using cutting-edge technologies and best practices, we build robust, scalable, and feature-rich applications that meet your business goals.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-4">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>Quality assurance is a key pillar of our mobile development process. We conduct rigorous testing across various devices and platforms to ensure your app performs flawlessly, delivering a seamless user experience.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-5">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>We assist you in deploying your mobile app to the app stores, managing the submission process, and ensuring compliance with all necessary guidelines. Our goal is to help you successfully launch your app to your target audience.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide className="swiper-slide" data-hash="tab-l-6">
                <div
                  data-swiper-parallax={-100}
                  data-swiper-parallax-opacity={0}
                >
                  <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                    <img src="img/icons/md/22.svg" alt="icon" />
                  </div>
                  <div className="mil-mb-30">
                    <p>Our commitment to your project doesn't end at launch. We provide ongoing maintenance and support services to keep your app running smoothly. From bug fixes to updates and enhancements, we're here to ensure your app's long-term success.
                    </p>
                  </div>
                  <Link href="about" className="mil-link">
                    <span>See More</span>
                    <i className="fas fa-arrow-right" />
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};
export default MobileAppDevelopmentNavTabs;
