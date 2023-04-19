import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import foter_logo from "../assets/img/png/Shapes.png";
import Circle_img from "../assets/img/png/Circle.png";
import Circle_img1 from "../assets/img/png/Circle2.png";
import back_to_top from "../assets/img/svg/back-to-top.svg";
function FooterSection() {
  const [first, setfirst] = useState(false);
  const movetop = () => {
    document.documentElement.scrollTop = 0;
  };
  window.addEventListener("scroll", () => {
    if (document.documentElement.scrollTop > 150) {
      setfirst(true);
    } else {
      setfirst(false);
    }
  });
  return (
    <section className="bg_black position-relative pt-5 overflow-hidden">
      <button
        className={
          first
            ? "position-fixed end-0 bottom-0 border-0 rounded-5 m-4 up_animation z_index1"
            : "position-fixed end-0 bottom-0 d-none z_index1"
        }
        onClick={movetop}
      >
        <img width={40} src={back_to_top} alt="back_to_top" />
      </button>
      <img
        className="position-absolute top_10 z_1 "
        src={Circle_img}
        alt="Circle_img"
      />
      <img
        className=" position-absolute bottom-0 end-0 z_1"
        src={Circle_img1}
        alt="Circle_img1"
      />
      <div className="mb-5 d-xl-none">
        <div className="hr_line"></div>
      </div>
      <Container className="pt-lg-5">
        <Row className="justify-content-between pb-5">
          <Col lg={4} className="z_index1">
            <a className="d-flex align-items-center" href="#">
              <img className="z_index1" src={foter_logo} alt="foter_logo" />
              <span className="z_index1 ff_inter fw-bold fs_xl text-white ps-2">
                Agenone
              </span>
            </a>
            <p className="mb-0 ff_inter fw-normal fs_md text_dark pt-3 pb-md-4 mb-3">
              We're a team of experienced designers, developers, and marketers,
              passionate about delivering exceptional digital solutions.
            </p>
            <a
              className="ff_inter fw-medium fs_md text_dark footer_link_hover"
              href="#"
            >
              hello@agenone.com
            </a>
          </Col>
          <Col lg={6}>
            <Row>
              <Col md={4} xs={6} className="pt-5 pt-lg-0">
                <h2 className="mb-0 ff_inter fw-bold fs_md text-white">Menu</h2>
                <ul>
                  <li className="pt-4">
                    <a
                      className="ff_inter fw-normal fs_md text_dark  footer_link_hover"
                      href="#"
                    >
                      Home
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="ff_inter fw-normal fs_md text_dark  footer_link_hover"
                      href="#"
                    >
                      Services{" "}
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="ff_inter fw-normal fs_md text_dark  footer_link_hover"
                      href="#"
                    >
                      About Us{" "}
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="ff_inter fw-normal fs_md text_dark  footer_link_hover"
                      href="#"
                    >
                      Project
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="ff_inter fw-normal fs_md text_dark  footer_link_hover"
                      href="#"
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={4} xs={6} className="pt-5 pt-lg-0">
                <h2 className="mb-0 ff_inter fw-bold fs_md text-white">
                  Support
                </h2>
                <ul>
                  <li className="pt-4">
                    <a
                      className="ff_inter fw-normal fs_md text_dark  footer_link_hover"
                      href="#"
                    >
                      FAQ{" "}
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="ff_inter fw-normal fs_md text_dark footer_link_hover"
                      href="#"
                    >
                      Privacy Policy{" "}
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="ff_inter fw-normal fs_md text_dark footer_link_hover"
                      href="#"
                    >
                      Terms of Service{" "}
                    </a>
                  </li>
                </ul>
              </Col>
              <Col md={4} xs={6} className="z_index1 pt-4 pt-md-5 pt-lg-0">
                <h2 className="mb-0 ff_inter fw-bold fs_md text-white">
                  Social Media
                </h2>
                <ul className="z_index1">
                  <li className="pt-4">
                    <a
                      className="ff_inter fw-normal fs_md text_dark  footer_link_hover"
                      href="#"
                    >
                      Linked In
                    </a>
                  </li>
                  <li className="pt-3">
                    <a
                      className="ff_inter fw-normal fs_md text_dark  footer_link_hover"
                      href="#"
                    >
                      Twitter{" "}
                    </a>
                  </li>
                  <li className="pt-3 z_index1">
                    <a
                      className="ff_inter fw-normal fs_md text_dark  footer_link_hover"
                      href="#"
                    >
                      Instagram{" "}
                    </a>
                  </li>
                  <li className="pt-3 z_index1">
                    <a
                      className="ff_inter fw-normal fs_md text_dark  footer_link_hover"
                      href="#"
                    >
                      Dribbble{" "}
                    </a>
                  </li>
                  <li className="pt-3 z_index1">
                    <a
                      className="ff_inter fw-normal fs_md text_dark  footer_link_hover"
                      href="#"
                    >
                      Behance{" "}
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
        <div className="">
          {" "}
          <div className="hr_line "></div>
        </div>{" "}
        <div className=" py-3">
          <p className="ff_inter fw-normal fs_md text_dark mb-0 text-center py-4 ">
            Copyright © 2023 by Agenone. All rights reserved.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default FooterSection;
