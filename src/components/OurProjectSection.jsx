import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import card_img1 from "../assets/img/png/card_img1.png";
import card_img2 from "../assets/img/png/card_img2.png";
import special_icons from "../assets/img/png/special_icon.png";
function OurProjectSection(props) {
  const [first, setfirst] = useState(1);
  return (
    <section className="project_bg py-xl-5 pt-4">
      <Container className="py-lg-5 ">
        <h2 className="mb-0 ff_inter fw-bold fs_4xl text-white text-center ">
          Our Project Have Been <span className="color_green_linear">Done</span>
        </h2>
        <p className="mb-0 ff_inter fw-medium fs_lg text_dark text-center pt-lg-4 pt-3">
          Take a look at some of our recent projects and see how we've helped
          other businesses elevate{" "}
          <span className="d-block">
            their brand and drive business growth.
          </span>
        </p>
        <div className="d-flex justify-content-center pt-5 ">
          <div className=" btn_box py-2 px-2 d-lg-flex d-none">
            <button
              onClick={() => setfirst(1)}
              className={
                first === 1
                  ? "ff_inter fw-medium fs_sm border-0 bg-transparent common_btn2 px-4 py-3 "
                  : "ff_inter fw-medium fs_sm border-0 bg-transparent common_btn1   px-4 py-3 "
              }
            >
              UI/UX Design
            </button>
            <button
              onClick={() => setfirst(2)}
              className={
                first === 2
                  ? "ff_inter fw-medium fs_sm border-0 bg-transparent common_btn2 px-4 py-3 "
                  : "ff_inter fw-medium fs_sm border-0 bg-transparent common_btn1   px-4 py-3 "
              }
            >
              Digital Marketing
            </button>
            <button
              onClick={() => setfirst(3)}
              className={
                first === 3
                  ? "ff_inter fw-medium fs_sm border-0 bg-transparent common_btn2 px-4 py-3 "
                  : "ff_inter fw-medium fs_sm border-0 bg-transparent common_btn1   px-4 py-3 "
              }
            >
              Sosmed Management{" "}
            </button>
            <button
              onClick={() => setfirst(4)}
              className={
                first === 4
                  ? "ff_inter fw-medium fs_sm border-0 bg-transparent common_btn2 px-4 py-3 "
                  : "ff_inter fw-medium fs_sm border-0 bg-transparent common_btn1   px-4 py-3 "
              }
            >
              Development{" "}
            </button>
          </div>
        </div>
        <div className="d-flex justify-content-center  d-lg-none ">
          <div className=" btn_box py-2 px-2  ">
            <button
              onClick={() => setfirst(1)}
              className={
                first === 1
                  ? "ff_inter fw-medium fs_xsm border-0 bg-transparent common_btn2 px-3 py-2 py-sm-3 px-sm-4  "
                  : "ff_inter fw-medium fs_xsm border-0 bg-transparent common_btn1 px-3 py-2 py-sm-3 px-sm-4  "
              }
            >
              UI/UX
            </button>
            <button
              onClick={() => setfirst(2)}
              className={
                first === 2
                  ? "ff_inter fw-medium fs_xsm border-0 bg-transparent common_btn2 px-3 py-2 py-sm-3 px-sm-4"
                  : "ff_inter fw-medium fs_xsm border-0 bg-transparent common_btn1 px-3 py-2 py-sm-3 px-sm-4 "
              }
            >
              Digital
            </button>
            <button
              onClick={() => setfirst(3)}
              className={
                first === 3
                  ? "ff_inter fw-medium fs_xsm border-0 bg-transparent common_btn2 px-3 py-2 py-sm-3 px-sm-4 "
                  : "ff_inter fw-medium fs_xsm border-0 bg-transparent common_btn1 px-3 py-2 py-sm-3 px-sm-4"
              }
            >
              SMM{" "}
            </button>
            <button
              onClick={() => setfirst(4)}
              className={
                first === 4
                  ? "ff_inter fw-medium fs_xsm border-0 bg-transparent common_btn2 px-3 py-2 py-sm-3 px-sm-4 "
                  : "ff_inter fw-medium fs_xsm border-0 bg-transparent common_btn1 px-3 py-2 py-sm-3 px-sm-4 "
              }
            >
              Dev{" "}
            </button>
          </div>
        </div>
        <Row className={first === 1 ? "d-flex pt-lg-5 pt-4" : "d-none"}>
          <Col
            lg={6}
            sm={6}
            className="mt-3"
            data-aos="flip-down"
            data-aos-duration="10000"
          >
            <div className="img_box d-flex align-items-center  justify-content-center p-3">
              <div>
                <div className="position-relative">
                  {" "}
                  <img className="w-xl_100 w-100" src={card_img1} alt="card_img1" />
                  <div className="overlay_box d-flex align-items-center justify-content-center">
                    <div>
                      <img
                        className="img_width_height"
                        src={special_icons}
                        alt="special_icons"
                      />
                    </div>
                  </div>
                </div>
                <h4 className="mb-0 ff_inter fw-bold fs_xxl text-white pt-4">
                  Title
                </h4>
                <p className="mb-0 ff_inter fw-normal fs_lg max_width_600 text_dark pt-2">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            sm={6}
            className="mt-3"
            data-aos="flip-left"
            data-aos-duration="10000"
          >
            <div className="img_box d-flex align-items-center  justify-content-center p-3">
              <div>
                <div className="position-relative">
                  {" "}
                  <img className="w-xl_100 w-100" src={card_img2} alt="card_img2  " />
                  <div className="overlay_box d-flex align-items-center justify-content-center">
                    <div>
                      <img
                        className="img_width_height"
                        src={special_icons}
                        alt="special_icons"
                      />
                    </div>
                  </div>
                </div>
                <h4 className="mb-0 ff_inter fw-bold fs_xxl text-white pt-4">
                  Title
                </h4>
                <p className="mb-0 ff_inter fw-normal fs_lg max_width_600 text_dark pt-2">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={first === 2 ? "d-flex pt-lg-5 pt-4" : "d-none"}>
          <Col
            lg={6}
            sm={6}
            className="mt-3"
            data-aos="flip-down"
            data-aos-duration="10000"
          >
            <div className="img_box d-flex align-items-center  justify-content-center p-3">
              <div>
                <div className="position-relative">
                  {" "}
                  <img className="w-xl_100 w-100" src={card_img2} alt="card_img2  " />
                  <div className="overlay_box d-flex align-items-center justify-content-center">
                    <div>
                      <img
                        className="img_width_height"
                        src={special_icons}
                        alt="special_icons"
                      />
                    </div>
                  </div>
                </div>
                <h4 className="mb-0 ff_inter fw-bold fs_xxl text-white pt-4">
                  Title
                </h4>
                <p className="mb-0 ff_inter fw-normal fs_lg max_width_600 text_dark pt-2">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </div>
          </Col>
          <Col
            lg={6}
            sm={6}
            className="mt-3"
            data-aos="flip-down"
            data-aos-duration="10000"
          >
            <div className="img_box d-flex align-items-center  justify-content-center p-3">
              <div>
                <div className="position-relative">
                  {" "}
                  <img className="w-xl_100 w-100" src={card_img1} alt="card_img1" />
                  <div className="overlay_box d-flex align-items-center justify-content-center">
                    <div>
                      <img
                        className="img_width_height"
                        src={special_icons}
                        alt="special_icons"
                      />
                    </div>
                  </div>
                </div>
                <h4 className="mb-0 ff_inter fw-bold fs_xxl text-white pt-4">
                  Title
                </h4>
                <p className="mb-0 ff_inter fw-normal fs_lg max_width_600 text_dark pt-2">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={first === 3 ? "d-flex pt-lg-5 pt-4" : "d-none"}>
          <Col lg={6} sm={6} className="mt-3">
            <div className="img_box d-flex align-items-center  justify-content-center p-3">
              <div>
                <div className="position-relative">
                  {" "}
                  <img className="w-xl_100 w-100" src={card_img1} alt="card_img1" />
                  <div className="overlay_box d-flex align-items-center justify-content-center">
                    <div>
                      <img
                        className="img_width_height"
                        src={special_icons}
                        alt="special_icons"
                      />
                    </div>
                  </div>
                </div>
                <h4 className="mb-0 ff_inter fw-bold fs_xxl text-white pt-4">
                  Title
                </h4>
                <p className="mb-0 ff_inter fw-normal fs_lg max_width_600 text_dark pt-2">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={6} sm={6} className="mt-3">
            <div className="img_box d-flex align-items-center  justify-content-center p-3">
              <div>
                <div className="position-relative">
                  {" "}
                  <img className="w-xl_100 w-100" src={card_img2} alt="card_img2  " />
                  <div className="overlay_box d-flex align-items-center justify-content-center">
                    <div>
                      <img
                        className="img_width_height"
                        src={special_icons}
                        alt="special_icons"
                      />
                    </div>
                  </div>
                </div>
                <h4 className="mb-0 ff_inter fw-bold fs_xxl text-white pt-4">
                  Title
                </h4>
                <p className="mb-0 ff_inter fw-normal fs_lg max_width_600 text_dark pt-2">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </div>
          </Col>
        </Row>
        <Row className={first === 4 ? "d-flex pt-lg-5 pt-4" : "d-none"}>
          <Col lg={6} sm={6} className="mt-3">
            <div className="img_box d-flex align-items-center  justify-content-center p-3">
              <div>
                <div className="position-relative">
                  {" "}
                  <img className="w-xl_100 w-100" src={card_img2} alt="card_img2  " />
                  <div className="overlay_box d-flex align-items-center justify-content-center">
                    <div>
                      <img
                        className="img_width_height"
                        src={special_icons}
                        alt="special_icons"
                      />
                    </div>
                  </div>
                </div>
                <h4 className="mb-0 ff_inter fw-bold fs_xxl text-white pt-4">
                  Title
                </h4>
                <p className="mb-0 ff_inter fw-normal fs_lg max_width_600 text_dark pt-2">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </div>
          </Col>{" "}
          <Col lg={6} sm={6} className="mt-3">
            <div className="img_box d-flex align-items-center  justify-content-center p-3">
              <div>
                <div className="position-relative">
                  {" "}
                  <img className="w-xl_100 w-100" src={card_img1} alt="card_img1" />
                  <div className="overlay_box d-flex align-items-center justify-content-center">
                    <div>
                      <img
                        className="img_width_height"
                        src={special_icons}
                        alt="special_icons"
                      />
                    </div>
                  </div>
                </div>
                <h4 className="mb-0 ff_inter fw-bold fs_xxl text-white pt-4">
                  Title
                </h4>
                <p className="mb-0 ff_inter fw-normal fs_lg max_width_600 text_dark pt-2">
                  We are designed to help your business thrive in the online
                  world.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default OurProjectSection;
