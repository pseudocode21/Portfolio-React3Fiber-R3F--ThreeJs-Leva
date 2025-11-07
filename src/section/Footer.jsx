import React from "react";

const Footer = () => {
  return (
    <section className="c-space pt-7 pb-3 flex justify-center items-center flex-wrap gap-5 ">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>Privacy Policy </p>
      </div>
      <div className="flex gap-3">
        <div className="social-icon">
          <a
            href="https://github.com/pseudocode21"
            target="_blank"
            className="w-1/2 h-1/2 "
          >
            <img src="/assets/github.svg" alt="github" />
          </a>
        </div>
        <div className="social-icon">
          <a
            href="https://www.linkedin.com/in/gaurav-singh-135386286/"
            target="_blank"
            className="w-1/2 h-1/2 "
          >
            <img src="/assets/linkedIn.svg" alt="linkedIn" />
          </a>
        </div>
        <div className="social-icon">
          <a href="#" className="w-1/2 h-1/2 ">
            {" "}
            <img src="/assets/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>
      <p className="text-white-500">© 2025 Gaurav. All rights reserved.</p>
    </section>
  );
};

export default Footer;
