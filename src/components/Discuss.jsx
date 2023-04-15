import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import vector_arrow from "../assets/img/png/Vector.png";
import shape_left from "../assets/img/svg/shape_left.svg";
import shape_right from "../assets/img/svg/shape_right.svg";
function Discuss() {
  return (
    <section className="position-relative bg_black_box overflow-hidden">
      <div className="box_white position-absolute adjust_box1 img_heigh d-none d-xl-flex">
        <img src={shape_left} alt="shape_left" />
      </div>
      <div className="box_white position-absolute adjust_box  img_height d-none d-xl-flex">
        <img src={shape_right} alt="shape_right" />
      </div>
      <Container className=" py-4 ">
        <Row className="justify-content-center  justify-content-lg-between text-center text-lg-start px-3 px-sm-0 my-3">
          <Col lg={9}xl={8} className="d-flex justify-content-center  ">
            <h2 className="mb-0 ff_inter fw-semibold fs_3xl d-flex justify-content-center max_width_600 text-white">
              Let’s discuss and bring your vision to life.
            </h2>
          </Col>
          <Col lg={3} className="mt-4 mt-lg-0">
            <button className="ff_inter fw-medium fs_md contact_btn_width contactus_btn contactus_button">
Let’s Talk              <span>
                <img className="ps-3" src={vector_arrow} alt="vector_arrow" />
              </span>
            </button>{" "}
          </Col>
        </Row>        <div className="pt-lg-4 pt-5 mt-xl-0 d-none d-xl-block "><div className="hr_line"></div></div>

      </Container>
    </section>
  );
}

export default Discuss;
