import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
const UiUxDesignSteps = dynamic(
  () => import("@/src/components/sliders/UiUxDesignSteps"),
  {
    ssr: false,
  }
);
const UiUxDesignReviews = dynamic(
  () => import("@/src/components/sliders/UiUxDesignReviews"),
  {
    ssr: false,
  }
);
const LatestProjectsSlider = dynamic( () => import("../components/sliders/LatestProjects"), { ssr: false } );


const UiUxDesign = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Solution"} pageTitle={"UI/UX design"} />

      {/* call to action */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "25%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="img/icons/md/13.svg" alt="icon" />
                  </div>
                </div>
                <h5>
                Our UI/UX designers are experts at creating intuitive and visually stunning interfaces that captivate users. Elevate your digital presence with our design expertise.
                </h5>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="mil-adaptive-right">
                <a href="#." className="mil-button mil-border mil-mb-30">
                  <span>Hire UI/UX Designers</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* process */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "25%" }} />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            High Experience
          </span>
          <h2 className="mil-mb-120">
            UI/UX <span className="mil-accent">Design Services</span> That Set
            Us Apart
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/1.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">User Research</h4>
                  <p className="mil-box-text mil-mb-30">
                  Gain valuable insights into user behavior and preferences through our comprehensive user research methods. We ensure that our designs are tailored to meet the needs of your target audience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/15.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Prototyping</h4>
                  <p className="mil-box-text mil-mb-30">
                  Visualize and iterate on your ideas quickly with our prototyping services. Our prototypes provide a tangible representation of your product, allowing for effective feedback and refinement.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">UX Design</h4>
                  <p className="mil-box-text mil-mb-30">
                  Delight users with intuitive and engaging experiences crafted by our UX design experts. We focus on enhancing usability and satisfaction to drive user adoption and retention.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/13.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">UI Design</h4>
                  <p className="mil-box-text mil-mb-30">
                  Bring your brand to life with visually stunning and user-friendly interfaces designed by our UI specialists. We pay attention to every detail to create cohesive and memorable designs.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/16.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">UI/UX Audit and Consulting</h4>
                  <p className="mil-box-text mil-mb-30">
                  Ensure the effectiveness of your existing designs with our UI/UX audit and consulting services. We identify areas for improvement and provide actionable recommendations to enhance usability and performance.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">Usability Testing</h4>
                  <p className="mil-box-text mil-mb-30">
                  Validate the usability and effectiveness of your designs through rigorous usability testing. Our testing methodologies uncover usability issues and ensure that your product meets the needs of your users.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* process end */}
      {/* call to action */}
      <section className="mil-call-to-action mil-p-120-90">
        <div
          className="mil-deco mil-deco-accent"
          style={{ bottom: 0, right: "35%", transform: "rotate(180deg)" }}
        />
        <img
          src="img/photo/CallToAction-1.png"
          className="mil-background-image"
          style={{ objectPosition: "center" }}
          alt="image"
        />
        <div className="mil-overlay" />
        <div className="container mil-relative">
          <div className="row">
            <div className="col-lg-6 mil-mb-30">
              <h3 className="mil-light mil-mb-15">
                Let’s Discuss <span className="mil-accent">Your</span> Digital{" "}
                <span className="mil-accent">Opportunity.</span>
              </h3>
              <p className="mil-light-soft">
                Unlock your digital transformation opportunities now!
              </p>
            </div>
            <div className="col-lg-6 mil-mb-30">
              <div className="mil-adaptive-right">
                <a href="#." className="mil-button mil-border mil-light">
                  <span>Get Started</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      {/* tech stack */}
      <section className="mil-p-120-90">
        <div className="mil-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Our Tools
          </span>
          <h2 className="mil-mb-90">
            Our Design <span className="mil-accent">Technology Stack</span>
          </h2>
          <div className="row mil-grid-lines">
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Figma</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Photoshop</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Sketch</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Adobe XD</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Zeppelin</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Illustrator</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Kotlin</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>Swift</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>PHP</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>MariaDB</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>AWS</h6>
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-3">
              <div className="mil-item-card">
                <h6>React</h6>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* tech stack end */}
      {/* ??? */}
      <section className="mil-gradient-bg mil-p-120-60">
        <div className="container">
          <div className="mil-mb-90">
            <span className="mil-suptitle mil-suptitle-2 mil-mb-30 mil-light">
              Our Enterprise
            </span>
            <h2 className="mil-light">
              What Our <span className="mil-accent">UI/UX Design</span> <br />
              Company Does Best
            </h2>
          </div>
          <div className="row mil-mb-30-adapt">
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-light mil-circle mil-mb-30">
                  <span>01</span>
                </div>
                <h4 className="mil-light mil-mb-15">
                  SaaS Development Consulting
                </h4>
                <p className="mil-light-soft">
                We provide expert guidance and strategic insights to kickstart your SaaS development journey. Our consulting services ensure that your project is set up for success from the very beginning.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-light mil-lines mil-mb-30">
                  <span>02</span>
                </div>
                <h4 className="mil-light mil-mb-15">
                  SaaS Design and Prototyping
                </h4>
                <p className="mil-light-soft">
                Transform your ideas into tangible designs with our SaaS design and prototyping services. We focus on creating intuitive and visually appealing interfaces that enhance user experience.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-light mil-mb-30">
                  <span>03</span>
                </div>
                <h4 className="mil-light mil-mb-15">
                  End-to-End SaaS Development
                </h4>
                <p className="mil-light-soft">
                From concept to deployment, we handle every aspect of SaaS development. Our comprehensive approach ensures seamless integration, robust functionality, and scalability for your application.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-light mil-mb-30">
                  <span>04</span>
                </div>
                <h4 className="mil-light mil-mb-15">Migration to SaaS</h4>
                <p className="mil-light-soft">
                Upgrade your existing systems to SaaS effortlessly with our migration services. We ensure a smooth transition, minimizing disruptions and maximizing the benefits of the SaaS model for your business.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-light mil-circle mil-mb-30">
                  <span>05</span>
                </div>
                <h4 className="mil-light mil-mb-15">
                  Third Party Integrations
                </h4>
                <p className="mil-light-soft">
                Extend the capabilities of your SaaS application with seamless third-party integrations. We help you integrate with leading platforms and services to enhance functionality and drive efficiency.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-mb-60">
                <div className="mil-number-icon mil-light mil-lines mil-mb-30">
                  <span>06</span>
                </div>
                <h4 className="mil-light mil-mb-15">
                  SaaS Support and Maintenance
                </h4>
                <p className="mil-light-soft">
                Ensure the continued success of your SaaS application with our comprehensive support and maintenance services. From troubleshooting to updates and optimizations, we're here to keep your application running smoothly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* steps */}
      <UiUxDesignSteps />
      {/* steps end */}
      {/* reviews */}
      {/* <UiUxDesignReviews /> */}
      {/* reviews end */}
      {/* portfolio */}
      {/* <LatestProjectsSlider /> */}
      {/* portfolio end */}
      {/* contact */}
      <ContactForm />
      {/* contact end */}
    </Layouts>
  );
};
export default UiUxDesign;
