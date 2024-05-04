import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
import Link from "next/link";
const WebDevelopmentNavTabs = dynamic(
  () => import("@/src/components/sliders/WebDevelopmentNavTabs"),
  {
    ssr: false,
  }
);
const LatestProjectsSlider = dynamic(() => import("../components/sliders/LatestProjects"), { ssr: false });

const webDevelopment = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Service"} pageTitle={"Website development"} />
      {/* ??? */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
              Our Data Analytics Expertise
            </span>
            <h2 className="mil-mb-30">
              Custom <span className="mil-accent">Website Solutions</span> for Every Platform
            </h2>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/15.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Responsive Web Design</h5>
                <p className="mil-mb-30">
                  Utilizing HTML, CSS, and JavaScript, we craft responsive and visually appealing websites that adapt seamlessly to various screen sizes and devices.
                </p>
                <ul className="mil-dot-list">
                  <li className="mil-text-sm mil-bold mil-dark">HTML</li>
                  <li className="mil-text-sm mil-bold mil-dark">CSS</li>
                  <li className="mil-text-sm mil-bold mil-dark">JavaScript</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/15.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Custom Web Applications</h5>
                <p className="mil-mb-30">
                  Harnessing the power of frameworks like React.js, Angular, and Vue.js, we build custom web applications tailored to your unique business needs, delivering unmatched performance and functionality.
                </p>
                <ul className="mil-dot-list">
                  <li className="mil-text-sm mil-bold mil-dark">React.js</li>
                  <li className="mil-text-sm mil-bold mil-dark">Angular</li>
                  <li className="mil-text-sm mil-bold mil-dark">Vue.js</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/15.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">Content Management Systems (CMS)</h5>
                <p className="mil-mb-30">
                  Leveraging popular CMS platforms like WordPress, Joomla, and Drupal, we develop dynamic and easy-to-manage websites that empower you to control your online presence effortlessly.
                </p>
                <ul className="mil-dot-list">
                  <li className="mil-text-sm mil-bold mil-dark">WordPress</li>
                  <li className="mil-text-sm mil-bold mil-dark">Joomla</li>
                  <li className="mil-text-sm mil-bold mil-dark">Drupal</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mil-box-center mil-mb-60">
                <div className="mil-icon-frame mil-icon-bg mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/15.svg" alt="icon" />
                </div>
                <h5 className="mil-mb-20">E-commerce Solutions</h5>
                <p className="mil-mb-30">
                  From WooCommerce to Shopify, we specialize in creating robust and scalable e-commerce websites that drive sales and enhance customer experiences.
                </p>
                <ul className="mil-dot-list">
                  <li className="mil-text-sm mil-bold mil-dark">WooCommerce</li>
                  <li className="mil-text-sm mil-bold mil-dark">Shopify</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}

      {/* <LatestProjectsSlider /> */}

      {/* left nav tabs */}
      <WebDevelopmentNavTabs />
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
              Website <br />
              Solutions
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
                Elevate your online retail presence with our tailored eCommerce website solutions. Seamlessly integrate shopping experiences and enhance customer engagement for increased sales and brand loyalty.
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
                Transform entertainment experiences with captivating and interactive websites. Whether it's gaming, media streaming, or social networking, we bring innovative solutions that entertain and engage users.
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
                Empower your enterprise with robust and scalable website solutions designed to streamline operations and boost productivity. From employee management to customer relationship management, our enterprise websites are tailored to meet your specific business needs.
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
                Next <span className="mil-accent">Gen Tech</span> For Website
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
export default webDevelopment;
