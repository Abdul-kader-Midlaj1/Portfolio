import React from "react";

export const About = ({ScrollRef}) => {
  return (
    <section id="about" className="section " ref={ScrollRef}>
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-light opacity-4">
            About Me
          </h2>
          <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark">
            Know Me More{" "}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <div className="row gy-5">
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 className="text-7 fw-600 mb-3 ">
              I'm <span className="text-primary">Abdul Kader Midlaj,</span> Web
              Developer & SEO Specialist{" "}
            </h2>
            <p>
              <strong>Front-End UI Developer & SEO Specialist</strong>
            </p>
            <p className="">
            A results-driven Web Developer with 2 years of experience in front-end  using HTML, CSS, JavaScript, React, WordPress, and PHP. Skilled in creating seamless user experiences and passionate about SEO and digital marketing. Strong understanding of SEO best practices, keyword research, and optimization techniques. Eager to combine web development and SEO expertise to improve website performance and drive growth. Seeking a challenging role to contribute to a digital marketing team's success.
              <br />
              <strong> Specialties:</strong> SEO , Responsive Design , Wordpress  , PHP , MYSQL , Google Analytics, Microsoft Clarity, Google Search Console, Google My Business Clarity
              ,ReactJS, NodeJS , MongoDB , HTML5, CSS3, SCSS, TailwindCSS , Figma, JIRA, Git, Web Hosting, Cloudflare, Cpanel
            </p>
          </div>
          <div className="col-lg-5 col-xl-4">
            <div className="ps-lg-4">
              <ul className="list-style-2 ">
                <li>
                  <span className="fw-600 me-2">Name:</span>Abdul Kader Midlaj
                </li>
                <li>
                  <span className="fw-600 me-2">Email:</span>
                  <a href="mailto:midlajabdul2000@gmail.com">
                    midlajabdul2000@gmail.com
                  </a>
                </li>
                <li className="border-0">
                  <span className="fw-600 me-2">From:</span>Dubai,UAE
                </li>
              </ul>
              <a
                href="CV-Abdul kader Midlaj.pdf"
                download=""
                className="btn btn-primary rounded-pill"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
