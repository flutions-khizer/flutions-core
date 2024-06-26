import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
import Link from "next/link";
const MobileAppDevelopmentNavTabs = dynamic(
  () => import("@/src/components/sliders/MobileAppDevelopmentNavTabs"),
  {
    ssr: false,
  }
);
const LatestProjectsSlider = dynamic(() => import("../components/sliders/LatestProjects"), { ssr: false });

const MobileAppDevelopment = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Service"} pageTitle={"Mobile app development"} />
      {/* ??? */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Our Data Analytics Expertise
            </span>
            <h2 className="mil-mb-30">
              Custom <span className="mil-accent">App Solutions</span> For any
              Mobile Platform
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/22.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Android Platform</h5>
                <p className="mil-mb-30">
                  Harnessing the power of Java and Kotlin, we create bespoke Android applications tailored to your needs.
                </p>
                <ul className="mil-dot-list">
                  <li className="mil-text-sm mil-bold mil-dark">Java</li>
                  <li className="mil-text-sm mil-bold mil-dark">Kotlin</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/22.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">iOS Platform</h5>
                <p className="mil-mb-30">
                  Crafting seamless experiences with Swift and Objective-C, we bring your iOS app ideas to life with precision and finesse.
                </p>
                <ul className="mil-dot-list">
                  <li className="mil-text-sm mil-bold mil-dark">Swift</li>
                  <li className="mil-text-sm mil-bold mil-dark">Objective-C</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/22.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Cross Platform</h5>
                <p className="mil-mb-30">
                  Utilizing React Native, Flutter, and Xamarin, we build versatile apps that work flawlessly across multiple platforms.
                </p>
                <ul className="mil-dot-list">
                  <li className="mil-text-sm mil-bold mil-dark">
                    React Native
                  </li>
                  <li className="mil-text-sm mil-bold mil-dark">Flutter</li>
                  <li className="mil-text-sm mil-bold mil-dark">Xamarin</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}

      {/* <LatestProjectsSlider /> */}

      {/* left nav tabs */}
      <MobileAppDevelopmentNavTabs />
      {/* left nav tabs end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* ??? */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <div className="mil-mb-90">
            <h2 className="mil-mb-30">
              Delivering <span className="mil-accent">Industry Specific</span>{" "}
              Mobile <br />
              App Solutions
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/23.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">eCcommerce</h5>
                <p>
                Elevate your online retail presence with our tailored eCommerce mobile app solutions. Seamlessly integrate shopping experiences and enhance customer engagement for increased sales and brand loyalty.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/24.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Entertainment</h5>
                <p>
                Transform entertainment experiences with captivating and interactive mobile apps. Whether it's gaming, media streaming, or social networking, we bring innovative solutions that entertain and engage users.
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Enterprise</h5>
                <p>
                Empower your enterprise with robust and scalable mobile solutions designed to streamline operations and boost productivity. From employee management to customer relationship management, our enterprise mobile apps are tailored to meet your specific business needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* ??? */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-end mil-mb-60-adapt">
            <div className="col-md-6 col-xl-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Tech, Business and Talents
              </span>
              <h2 className="mil-mb-30">
                Next <span className="mil-accent">Gen Tech</span> For Mobile App
                Development
              </h2>
            </div>
            <div className="col-md-6 col-xl-6">
              <div className="mil-adaptive-right">
                <Link
                  href="contact"
                  className="mil-button mil-border mil-mb-30"
                >
                  <span>Learn More</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/1.svg" alt="icon" />
                </div>
                <h6>Cloud</h6>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/11.svg" alt="icon" />
                </div>
                <h6>AI / ML</h6>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
                <h6>AR / VR</h6>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
                <h6>IoT</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
    </Layouts>
  );
};
export default MobileAppDevelopment;
