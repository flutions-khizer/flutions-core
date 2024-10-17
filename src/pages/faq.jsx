import ContactForm from "@/src/components/ContactForm";
import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
const Faq = () => {
  return (
    <Layouts>
      <PageBanner pageName={"FAQs"} pageTitle={"FAQs"} />
      {/* faq */}
      <section className="mil-faqs mil-p-0-120">
        <div
          className="mil-deco"
          style={{ bottom: 0, left: "10%", transform: "rotate(180deg)" }}
        />
        <div className="container">
          <div className="mil-tabs">
            <input
              type="radio"
              name="tabs"
              id="tab1"
              defaultChecked="checked"
            />
            <label htmlFor="tab1">Information</label>
            <div className="mil-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <h3 className="mil-up-font mil-mb-30">
                    <span className="mil-accent">Flutions Connects</span> The
                    Entire Organization From End To End.
                  </h3>
                  <p className="mil-mb-60">
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem. Investigationes demonstraverunt
                    lectores legere me lius quod ii legunt saepius.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>1. What services does Flutions offer?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                      At Flutions, we offer a wide range of services including website development, mobile app development, UI/UX design, and business growth solutions through our expert sales agents. We are committed to delivering high-quality, user-centric digital experiences that help businesses grow and thrive.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>2. What industries does Flutions specialize in?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                      We work across various industries including e-commerce, healthcare, education, retail, and more. Our team has the expertise to adapt to the unique requirements of different sectors, ensuring tailored solutions that meet industry-specific challenges.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>3. How does Flutions ensure the quality of its web and app development projects?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                      We follow a thorough development process that includes research, design, coding, testing, and ongoing optimization. Our team ensures that all products are responsive, secure, and user-friendly, backed by the latest technologies and best practices in web and app development.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>4. What technologies do your developers work with?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                      Our team of developers is skilled in modern technologies such as React, Node.js, MongoDB, Express, Python, Oracle SQL, and more. We choose the best tech stack for your project to ensure scalability, performance, and long-term success.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>5. How can I get a quote for my project?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                      Getting a quote from Flutions is simple! Contact us through our website or email, providing details about your project requirements. Our team will review your needs and provide a customized quote based on the scope and complexity of the project.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="radio" name="tabs" id="tab2" />
            <label htmlFor="tab2">Pricing Plans</label>
            <div className="mil-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <h3 className="mil-up-font mil-mb-30">
                    <span className="mil-accent">Lorem ipsum</span> dolor sit
                    amet, consectetur adipisicing elit.
                  </h3>
                  <p className="mil-mb-60">
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem. Investigationes demonstraverunt
                    lectores legere me lius quod ii legunt saepius.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>How much does Flutions cost?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>What are the benefits of using Flutions?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>Information about Flutions</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>Lorem Ipsum, you need to be sure there</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="radio" name="tabs" id="tab3" />
            <label htmlFor="tab3">Data and Privacy</label>
            <div className="mil-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <h3 className="mil-up-font mil-mb-30">
                    <span className="mil-accent">Lorem Ipsum</span> available,
                    but the majority have suffered
                  </h3>
                  <p className="mil-mb-60">
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>What are the benefits of using Flutions?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>Who owns the information created by staff?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>How much does Flutions cost?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>Information about Flutions</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <input type="radio" name="tabs" id="tab4" />
            <label htmlFor="tab4">Security</label>
            <div className="mil-tab">
              <div className="row justify-content-between">
                <div className="col-lg-4">
                  <h3 className="mil-up-font mil-mb-30">
                    <span className="mil-accent">Aliquam aut natus</span>{" "}
                    perspiciatis corporis sunt alias cumques.
                  </h3>
                  <p className="mil-mb-60">
                    Typi non habent claritatem insitam; est usus legentis in iis
                    qui facit eorum claritatem.
                  </p>
                </div>
                <div className="col-lg-7">
                  <div className="mil-accordion">
                    <h6>Information about Flutions</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>What are the benefits of using Flutions?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>How much does Flutions cost?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>Who owns the information created by staff?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                  <div className="mil-accordion">
                    <h6>How do I delete my account?</h6>
                  </div>
                  <div className="mil-panel">
                    <div className="mil-window">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable. If you are going to
                        use a passage of Lorem Ipsum, you need to be sure there
                        isn't anything embarrassing hidden in the middle of
                        text. All the Lorem Ipsum generators on the Internet
                        tend to repeat predefined chunks as necessary, making
                        this the first true generator on the Internet. It uses a
                        dictionary of over 200 Latin words, combined with a
                        handful of model sentence structures.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* faq end */}
      {/* contact */}
      {/* contact */}
      <ContactForm />
    </Layouts>
  );
};
export default Faq;
