import ContactForm from "@/src/components/ContactForm";
import Layouts from "@/src/layouts/Layouts";
import Link from "next/link";
import Image from "next/image";
import CeoImage from "../image/Ceo.jpg";
const TeamSingle = () => {
  return (
    <Layouts>
      {/* banner */}
      <div className="mil-banner-sm mil-deep-bg">
        <img
          src="img/deco/map.png"
          alt="background"
          className="mil-background-image"
        />
        <div className="mil-banner-content">
          <div className="container mil-relative">
            <div className="row justify-content-between">
              <div className="col-lg-6 mil-adaptive-center">
                <Link href="about" className="mil-link link-left mil-mb-30">
                  <i className="fas fa-arrow-left" />
                  <span>Go Back</span>
                </Link>
                <h2 className="mil-uppercase mil-mb-30">Khizer Hussain</h2>
                <p>Founder & CEO</p>
              </div>
            </div>
            <div className="mil-portrait-position">
              <div className="mil-portrait-frame">
                <img src={CeoImage.src} alt="Hayman Andrews" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
      {/* team member */}
      <section className="mil-team mil-p-120-120">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-8 col-lg-8 col-xl-8">
              <h3 className="mil-mb-30">Biography</h3>
              <p className="mil-mb-60">
                The journey of Flutions began in 2023, but its roots were
                planted much earlier in my passion for technology and
                problem-solving. After years of working as a Full Stack
                Developer, honing my skills in building dynamic web
                applications, and driving business value through technology, I
                realized it was time to take the leap into entrepreneurship.
                This journey wasn’t just about founding a company; it was about
                creating a platform where innovation meets real-world challenges
                head-on.<br></br>
                <br></br>
                Throughout my career, I have embraced every opportunity to
                learn, grow, and contribute. I’ve had the privilege of working
                with Revalgo, delivering innovative solutions, and collaborating
                on game-changing projects. Additionally, while working with
                Prodapt, I had the opportunity to handle major projects for
                their clients, AT&T and Lumen, further honing my expertise in
                solving complex problems at scale. These experiences across
                diverse industries have allowed me to transform ideas into
                powerful digital solutions. My technical proficiency spans
                technologies like React, Angular, database management, and
                automation tools, all of which equip me to lead Flutions with a
                foundation of innovation and excellence.<br></br>
                <br></br>
                At Flutions, we are not just focused on delivering IT services;
                we are driven by the desire to empower businesses with solutions
                that fuel growth and efficiency. The founding of Flutions
                represents the culmination of my vision to create a company that
                thrives on energy, innovation, and a relentless commitment to
                client success. With a strong, passionate team by my side, I’m
                excited to push boundaries and shape a future where technology
                serves as a catalyst for progress.<br></br>
                This journey is not just mine—it's a collaborative effort with
                businesses that trust us to help them navigate the ever-evolving
                digital landscape. Together, we’re making a difference, one
                innovation at a time.<br></br>
              </p>
              {/* <ul className="mil-timeline">
                <li>
                  <h5 className="mil-mb-5">Capital Agency</h5>
                  <p className="mil-text-sm">2014-1017</p>
                </li>
                <li>
                  <h5 className="mil-mb-5">Under Inc</h5>
                  <p className="mil-text-sm">2017-1019</p>
                </li>
                <li>
                  <h5 className="mil-mb-5">Flutions Group</h5>
                  <p className="mil-text-sm">2019-Today</p>
                </li>
              </ul> */}
              {/* <p className="mil-mb-60">
              
              </p> */}
              {/* <div className="mil-divider mil-mb-60" /> */}
              {/* <div className="row">
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Wearable Dev</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div
                        className="mil-skill-prog"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <div className="mil-text-sm">65%</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Design Analytics</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div
                        className="mil-skill-prog"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <div className="mil-text-sm">65%</div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h6 className="mil-mb-30">Content Strategy</h6>
                  <div className="mil-skill-frame mil-mb-60">
                    <div className="mil-skill-track">
                      <div
                        className="mil-skill-prog"
                        style={{ width: "65%" }}
                      />
                    </div>
                    <div className="mil-text-sm">65%</div>
                  </div>
                </div>
              </div> */}
              {/* <div className="mil-divider mil-mb-60" /> */}
              {/* <h3 className="mil-mb-30">Skills</h3>
              <p className="mil-mb-60">
                Typi non habent claritatem insitam; est usus legentis in iis qui
                facit eorum claritatem. Investigationes demonstraverunt lectores
                legere me lius quod ii legunt saepius. Claritas est etiam
                processus dynamicus, qui sequitur mutationem consuetudium
                lectorum. Mirum est notare quam littera gothica, quam nunc
                putamus parum claram, anteposuerit litterarum formas humanitatis
                per seacula quarta decima et quinta decima.
              </p> */}
              {/* <div className="mil-divider mil-mb-60" /> */}
              <h3 className="mil-mb-60">Social</h3>
              <ul className="mil-social-links mil-mb-30">
                <li>
                  <a href="#.">Facebook</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/khizer-hussain-0aa5b615b/">Instagram</a>
                </li>
                <li>
                  <a href="#.">LinkedIn</a>
                </li>
                <li>
                  <a href="#.">Twitter</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-lg-3 col-lg-3">
              <div className="mil-icon-box mil-mt-60-adapt">
                <div className="mil-icon-frame mil-icon-frame-md mil-mb-30">
                  <img src="img/icons/md/7.svg" alt="icon" />
                </div>
                <h4 className="mil-mb-30" style={{textAlign: "justify", fontSize: "16px"}}>
                  As the Founder of{" "}
                  <span className="mil-accent">Flutions,</span> I am committed
                  to empowering businesses through innovative technology
                  solutions. Our passionate team is
                  dedicated to transforming challenges into opportunities,
                  driving growth with energy and creativity. Together, we will
                  redefine success and shape a brighter future for our
                  clients.{" "}
                </h4>
                <div className="mil-divider mil-divider-left mil-mb-30" />
                <p>Khizer Hussain</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* team member end */}
      {/* contact */}
      <ContactForm />
    </Layouts>
  );
};
export default TeamSingle;
