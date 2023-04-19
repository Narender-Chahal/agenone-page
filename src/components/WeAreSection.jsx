import React from "react";
import { Container, Row, Col } from "react-bootstrap";
function WeAreSection() {
  return (
    <section className="achievment_bg py-lg-5 py-4">
      <Container>
        <h6 className="mb-0 fw-medium ff_inter fs_3xl pt-4 pb-3 clr_black">
          We are passionate about helping businesses grow and succeed in the
          digital age. We take pride in our work and strive to exceed your
          expectations every time.
        </h6>
        <div className="year_box pb-4 pt-2 mt-lg-5 mt-3 mb-3">
          <Row className="justify-content-center ">
            <Col
              xl={3}
              md={6}
              lg={4}
              className="text-center pt-4"
              data-aos="fade-down"
            >
              <h2 className="mb-0 ff_inter fw-bold fs_4xl text-white">10+</h2>
              <p className="mb-0 ff_inter fw-medium fs_xl text-white pt-2">
                Years of Experiences
              </p>
            </Col>
            <Col
              xl={3}
              md={6}
              lg={4}
              className="text-center pt-4"
              data-aos="fade-up"
            >
              <h2 className="mb-0 ff_inter fw-bold fs_4xl text-white">666+</h2>
              <p className="mb-0 ff_inter fw-medium fs_xl text-white pt-2">
                Project Completed{" "}
              </p>
            </Col>
            <Col
              xl={3}
              md={6}
              lg={4}
              className="text-center pt-4"
              data-aos="fade-down"
            >
              <h2 className="mb-0 ff_inter fw-bold fs_4xl text-white">555+</h2>
              <p className="mb-0 ff_inter fw-medium fs_xl text-white pt-2">
                Satisfied Client{" "}
              </p>
            </Col>
            <Col
              xl={3}
              md={6}
              lg={4}
              className="text-center pt-4"
              data-aos="fade-up"
            >
              <h2 className="mb-0 ff_inter fw-bold fs_4xl text-white">10+</h2>
              <p className="mb-0 ff_inter fw-medium fs_xl text-white pt-2">
                Awards Achieved
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
}

export default WeAreSection;
