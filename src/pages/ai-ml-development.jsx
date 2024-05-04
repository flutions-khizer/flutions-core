import PageBanner from "@/src/components/PageBanner";
import ContactForm from "@/src/components/ContactForm";
import Layouts from "@/src/layouts/Layouts";
import dynamic from "next/dynamic";
const Service4Courses = dynamic(
  () => import("@/src/components/sliders/Service4Courses"),
  {
    ssr: false,
  }
);
const AiMlDevelopment = () => {
  return (
    <Layouts footer={2}>
      <PageBanner pageName={"Service"} pageTitle={"AI & ML development"} />
      {/* about */}
      <section className="mil-p-120-90">
        <div
          className="mil-deco"
          style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4">
              <div
                className="mil-circle-illustration mil-with-dots-2 mil-mb-60"
                data-swiper-parallax-scale=".8"
              >
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/faces/AiMlService-1.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-xl-7">
              <h2 className="mil-mb-30">
                Unlock the potential of{" "}
                <span className="mil-accent">
                  Artificial Intelligence and Machine Learning
                </span>{" "}
                to propel your business into the future
              </h2>
              <div className="mil-hori-box mil-mb-30">
                <div className="mil-mr-30">
                  <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg">
                    <img src="img/icons/md/1.svg" alt="icon" />
                  </div>
                </div>
                <p>
                  Our{" "}
                  <span className="mil-accent">AI/ML development services</span>{" "}
                  harness the power of cutting-edge technologies to transform
                  your ideas into intelligent solutions. Whether you're looking
                  to enhance customer experiences, optimize operations, or drive
                  innovation, our team of experts is here to guide you every
                  step of the way.
                </p>
              </div>
              <a href="contact" className="mil-button mil-border mil-mb-30">
                <span>Get in Touch</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      <div className="container">
        <div className="mil-divider" />
      </div>
      {/* ??? */}
      <section className="mil-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Discover Our Company
              </span>
              <h2 className="mil-mb-30">
                Explore <span className="mil-accent">AI & ML</span>{" "}
                Solutions
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>I</h3>
                </div>
                <h5 className="mil-mb-30">Custom AI Solutions</h5>
                <p>
                  Tailored AI models and algorithms designed to meet your
                  specific business objectives and address your unique
                  challenges.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>II</h3>
                </div>
                <h5 className="mil-mb-30">Machine Learning Development</h5>
                <p>
                  From data preprocessing and feature engineering to model
                  training and deployment, we provide end-to-end machine
                  learning development services.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>III</h3>
                </div>
                <h5 className="mil-mb-30">Deep Learning Expertise</h5>
                <p>
                  Harness the capabilities of deep neural networks for advanced
                  pattern recognition, natural language processing, computer
                  vision, and more.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>IV</h3>
                </div>
                <h5 className="mil-mb-30">Predictive Analytics</h5>
                <p>
                  Leverage historical data to forecast future trends, anticipate
                  customer behavior, optimize resource allocation, and make
                  data-driven decisions.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>V</h3>
                </div>
                <h5 className="mil-mb-30">AI-powered Automation</h5>
                <p>
                  Streamline processes, increase efficiency, and reduce costs by
                  automating repetitive tasks and workflows using AI-driven
                  solutions.
                </p>
              </div>
            </div>
            <div className="col-xl-4">
              <div className="mil-hover-card mil-box-center mil-mb-30">
                <div
                  className="mil-deco mil-deco-accent"
                  style={{ top: "-10%", right: "-10%" }}
                />
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <h3>VI</h3>
                </div>
                <h5 className="mil-mb-30">Integration and Deployment</h5>
                <p>
                  Seamlessly integrate AI/ML capabilities into your existing
                  systems and infrastructure, ensuring smooth deployment and
                  minimal disruption.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* ??? */}
      <section className="mil-deep-bg mil-p-120-90">
        <div className="container">
          <div className="row">
            <div className="col-xl-7">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Explore More Solutions
              </span>
              <h2 className="mil-mb-90">
                Boost Your <span className="mil-accent">Advantage</span>
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>I</h3>
              </div>
              <h5 className="mil-mb-30">Expertise</h5>
              <p>
                Our team consists of experienced data scientists, machine
                learning engineers, and AI specialists with a proven track
                record of delivering successful AI/ML projects across various
                industries.
              </p>
            </div>
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>II</h3>
              </div>
              <h5 className="mil-mb-30">
                Collaborative Approach
              </h5>
              <p>
                We work closely with you to understand your business goals,
                challenges, and requirements, ensuring that our solutions are
                aligned with your strategic objectives.
              </p>
            </div>
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>III</h3>
              </div>
              <h5 className="mil-mb-30">Innovation</h5>
              <p>
                We stay ahead of the curve by continuously exploring emerging
                technologies and best practices in AI/ML development, allowing
                us to deliver innovative solutions that give you a competitive
                edge.
              </p>
            </div>
            <div className="col-xl-3 mil-mb-30">
              <div
                className="mil-deco mil-deco-accent"
                style={{ top: "-10%", right: "-10%" }}
              />
              <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                <h3>IV</h3>
              </div>
              <h5 className="mil-mb-30">Reliability</h5>
              <p>
                You can count on us to deliver high-quality, reliable solutions
                on time and within budget, backed by our commitment to
                excellence and customer satisfaction.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* ??? end */}
      {/* ??? */}
      {/* <section className="mil-gradient-bg mil-p-120-90">
        <div
          className="mil-deco mil-deco-accent"
          style={{ bottom: 0, right: "20%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-4">
              <span className="mil-suptitle mil-suptitle-2 mil-light mil-mb-30">
                Explore More Solutions
              </span>
              <h2 className="mil-light mil-mb-90">
                Do You Know what Your{" "}
                <span className="mil-accent">Cybersecurity</span> Risk Score Is?
              </h2>
            </div>
            <div className="col-xl-7 mil-mb-30">
              <p className="mil-light-soft mil-mb-30">
                By answering these simple questions about your cybersecurity
                technology, processes, and people, you'll receive a
                cybersecurity risk score against our baseline that can help you
                identify common security gaps in your environment that you may
                not be aware of.
              </p>
              <a href="#." className="mil-button mil-border mil-light">
                <span>Start Now</span>
              </a>
            </div>
          </div>
        </div>
      </section> */}
      {/* ??? end */}
      {/* courses */}
      {/* <Service4Courses /> */}
      {/* courses end */}
      {/* contact */}
      <ContactForm />
      {/* contact end */}
    </Layouts>
  );
};
export default AiMlDevelopment;
