import React from "react";

export const Resume = () => {
  return (
    <section id="resume" className="section ">
      <div className="container px-lg-5">
        <div className="position-relative d-flex text-center mb-5">
          <h2 className="text-24  text-uppercase fw-600 w-100 mb-0 text-light opacity-4">
            Summary
          </h2>
          <p className="text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 text-dark">
            {" "}
            Resume{" "}
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto"></span>
          </p>
        </div>
        <div className="row gx-5">
        <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4 ">My Experience</h2>
            <div className="bg-white  rounded p-4 mb-4 bg-white border">
              <p className="badge bg-primary text-2 fw-400">
              10/2024 - present
              </p>
              <h3 className="text-5 ">SEO Specialist</h3>
              <p className="text-danger">Hiba Al Ghadeer LLC</p>
              <p className="mb-0 ">
              Leading SEO strategy to increase organic visibility, traffic, and conversions across key pages and products.
Performing in-depth keyword research, competitive analysis, and content gap audits to guide on-page and content optimization efforts.
Optimizing site structure, internal linking, and metadata to improve crawlability and search engine indexing
              </p>
            </div>
            <div className="bg-white  rounded p-4 mb-4 bg-white border">
              <p className="badge bg-primary text-2 fw-400">
              04/2024 - 10/2024
              </p>
              <h3 className="text-5 ">UI Developer</h3>
              <p className="text-danger">Quara AI Pvt. Ltd</p>
              <p className="mb-0 ">
              Responsible for designing and developing user interfaces for web applications. Utilizing skills in HTML5, CSS3, JavaScript, ReactJs, SASS/SCSS, Redux Toolkit, MUI ReactJs, NextJs, TypeScript, and Bootstrap. Creating visually appealing and responsive UIs to enhance user experience. Collaborating with cross-functional teams to gather requirements and design solutions. Converting Adobe XD, PSD, and Figma UX files to HTML code with pixel-perfect precision. Ensuring code quality and adherence to core web vitals for high-quality.
              </p>
            </div>
            <div className="bg-white  rounded p-4 mb-4 bg-white border">
              <p className="badge bg-primary text-2 fw-400">03/2023 - 03/2024</p>
              <h3 className="text-5 ">UI Developer</h3>
              <p className="text-danger">Quara Digital Private Limited</p>
              <p className="mb-0 ">
                I was developing user interface for web based products/sites
                using HTML, CSS, SCSS/SASS/LESS, ReactJs, JS, MUI ReactJs, Remix, Typescript,NextJs, Fully Responsive UI and HTML.
                Creating visually appealing and responsive UIs to enhance user experience. Collaborating with cross-functional teams to gather requirements and design solutions. Converting Adobe XD, PSD, and Figma UX files to HTML code with pixel-perfect precision. Ensuring code quality and adherence to core web vitals for high-quality.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4 ">My Education</h2>
            <div className="bg-white  rounded p-4 mb-4 bg-white border">
              <p className="badge bg-primary text-2 fw-400">2018-2022</p>
              <h3 className="text-5 ">Bachelors of Engineering</h3>
              <h3 className="text-5 ">Electronics and Communication</h3>
              <p className="text-danger mb-0">P A College of Engineering</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
