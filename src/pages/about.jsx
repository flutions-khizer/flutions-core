import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
const About = () => {
  return (
    <Layouts>
      <PageBanner pageName={"About us"} pageTitle={"Enterprise"} />
      {/* call to action */}
      <section className="mil-p-120-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12 col-xl-6">
              <h4 className="mil-mb-60">
                At
                <span className="mil-accent"> Flutions, </span>
                we're dedicated to leveraging technology to empower businesses and drive innovation.
              </h4>
            </div>
            <div className="col-lg-12 col-xl-6">
              <div className="mil-adaptive-right">
                <a
                  href="contact"
                  className="mil-button mil-border mil-mr-15 mil-mb-30"
                >
                  <span>Talk To an Expert</span>
                </a>
                <a href="#." className="mil-button-with-label mil-mb-60">
                  <div className="mil-button mil-border mil-icon-button">
                    <span>
                      <i className="fas fa-play" />
                    </span>
                  </div>
                  <span className="mil-dark">Watch Video</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* call to action end */}
      {/* about */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "35%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/faces/About-1.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                Firm Overview
              </span>
              <h2 className="mil-mb-50">
                We Specialize in <br />
                <span className="mil-accent">Transforming Your Idea</span> or
                Business in The Current
                <br /> Digital Era.
              </h2>
              <p className="mil-mb-50">
                At Flutions, we're dedicated to leveraging technology to empower businesses and drive innovation. Our expertise ensures exceptional IT services and consultancy tailored to your needs.
              </p>
              <div className="row align-items-end">
                <div className="col-xl-7">
                  <ul className="mil-check-icon-list mil-mb-60">
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Quality-driven Solutions
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Timely Deliveries Guaranteed
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Expert Team at Your Service,
                      </span>
                    </li>
                    <li>
                      <img src="img/icons/sm/12.svg" alt="icon" />
                      <span className="mil-dark">
                        Innovative Solutions Always
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="col-xl-5">
                  <Link href="team-single" className="mil-post-sm mil-mb-60">
                    <div className="mil-cover-frame">
                      <img src="img/faces/Team-1.png" alt="cover" />
                    </div>
                    <div className="mil-description">
                      <h4 className="mil-font-3 mil-accent">Khizer Hussain</h4>
                      <p className="mil-text-sm">CEO &amp; Co-Founder</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* counters */}
      <section className="mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, left: "25%" }} />
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="mil-h1">
                8<span className="mil-accent">+</span>
              </div>
              <h6 className="mil-mb-60">Years Experience</h6>
              <h2 className="mil-mb-60">
                We Run All Kinds of IT Services That Vow Your Success
              </h2>
            </div>
            <div className="col-lg-6">
              <h3 className="mil-mb-60">
                Accelerate <span className="mil-accent">Innovation</span> with
                world class tech teams We’ll match you to an entire{" "}
                <span className="mil-accent">Remote Technology</span>
              </h3>
              <div className="row">
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">16+</span>&nbsp; Software
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">3+</span>&nbsp; Years Client
                    Engagement
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">360+</span>&nbsp; App
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
                <div className="col-lg-6">
                  <h6 className="mil-mb-30">
                    <span className="mil-accent">520+</span>&nbsp; Web
                    Development
                  </h6>
                  <div className="mil-divider mil-divider-left mil-mb-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* counters end */}
      {/* <div className="container">
        <div className="mil-divider" />
      </div> */}
      {/* partners */}
      {/* <div className="mil-partners mil-p-120-90">
        <div className="container">
          <div className="mil-partners-frame">
            <a href="#.">
              <img src="img/partners/1.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/2.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/3.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/4.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/5.png" alt="partner" />
            </a>
            <a href="#.">
              <img src="img/partners/6.png" alt="partner" />
            </a>
          </div>
        </div>
      </div> */}
      {/* partners end */}
      {/* about */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "15%" }} />
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-5 mil-mb-60">
              <div className="mil-circle-illustration">
                <div className="mil-circle-bg" />
                <div className="mil-image-frame">
                  <img src="img/faces/Mission-1.png" alt="img" />
                </div>
              </div>
            </div>
            <div className="col-lg-6 mil-mb-60">
              <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
                IT Enterprise
              </span>
              <h2 className="mil-mb-50">Our Mission</h2>
              <p className="mil-mb-50">
                At Flutions, our mission is to revolutionize the IT landscape. We're committed to delivering cutting-edge solutions that surpass expectations and drive meaningful impact for our clients. With a focus on innovation and excellence, we strive to lead the way in the ever-evolving digital world.
              </p>
              <ul className="mil-simple-list">
                <li>Accelerate innovation.</li>
                <li>With world class tech teams.</li>
                <li>Our all service offerings to enhance.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* about end */}
      {/* features */}
      <section className="mil-p-120-120">
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            Discover Our Company
          </span>
          <h2 className="mil-mb-120">Why Work With Us</h2>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/6.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Top Expertise</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Benefit from our top-notch expertise and industry knowledge. We bring extensive experience to the table, ensuring superior solutions for your business needs.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Quality Management</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Our commitment to quality management guarantees excellence in every aspect of our service delivery. Rest assured, your projects are in capable hands with our meticulous attention to detail.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/2.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Utmost Flexibility</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Enjoy utmost flexibility in our approach to meeting your requirements. We adapt to your needs, offering tailored solutions that align perfectly with your business objectives.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/4.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Agility</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Stay ahead in a fast-paced world with our agile approach. We respond swiftly to changes and challenges, ensuring timely and efficient project delivery.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
          <div className="mil-line-icon-box">
            <div className="row align-items-center">
              <div className="col-xl-2">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/5.svg" alt="icon" />
                </div>
              </div>
              <div className="col-xl-4">
                <h4 className="mil-mb-30">Innovation</h4>
              </div>
              <div className="col-xl-6">
                <p className="mil-box-text mil-mb-30">
                  Experience innovation at its finest with Flutions. We constantly explore new ideas and technologies to drive progress and innovation in your projects.
                </p>
              </div>
            </div>
          </div>
          <div className="mil-divider" />
        </div>
      </section>
      {/* features end */}
      {/* features */}
      <section className="mil-deep-bg mil-p-120-60">
        <div className="mil-deco" style={{ top: 0, right: "25%" }} />
        <div className="container">
          <span className="mil-suptitle mil-suptitle-2 mil-mb-30">
            For Enterprise
          </span>
          <h2 className="mil-mb-120">
            We Live by <span className="mil-accent">Powerful</span> Values
          </h2>
          <div className="row">
            <div className="col-md-6 col-xl-4">
              <div className="mil-icon-box-2 mil-mb-60">
                <div className="mil-icon-frame mil-icon-frame-md mil-icon-bg mil-mb-30">
                  <img src="img/icons/md/10.svg" alt="icon" />
                </div>
                <div className="mil-box-text">
                  <h4 className="mil-mb-30">We Are</h4>
                  <p className="mil-box-text">
                    At Flutions, we are driven by a passion for excellence and a commitment to exceeding expectations. Our team embodies professionalism and dedication in every project we undertake.
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
                  <h4 className="mil-mb-30">We Deep Dive</h4>
                  <p className="mil-box-text">
                    We dive deep into understanding your needs and challenges, ensuring that our solutions are precisely tailored to meet your objectives. With thorough analysis and attention to detail, we deliver results that make a difference.
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
                  <h4 className="mil-mb-30">We Take</h4>
                  <p className="mil-box-text">
                    We take ownership of your project as if it were our own, taking responsibility for its success from start to finish. You can trust us to go above and beyond to deliver exceptional outcomes.
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
                  <h4 className="mil-mb-30">We Value</h4>
                  <p className="mil-box-text">
                    We value integrity, transparency, and trust in all our interactions. Building strong relationships with our clients is fundamental to everything we do, and we strive to earn your trust every step of the way.
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
                  <h4 className="mil-mb-30">We Believe</h4>
                  <p className="mil-box-text">
                    We believe in the power of collaboration and teamwork. By working together seamlessly, we leverage our collective strengths to achieve remarkable results that drive your business forward.
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
                  <h4 className="mil-mb-30">We Say “We”</h4>
                  <p className="mil-box-text">
                    At Flutions, we are a unified team working towards a common goal. When you partner with us, you become part of our extended team, and together, we embark on a journey towards success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* features end */}
      {/* contact */}
      {/* contact */}
      <ContactForm />
    </Layouts>
  );
};
export default About;
