import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import slack1 from "../assets/img/png/slack1.png";
import slack2 from "../assets/img/png/slack2.png";
import slack3 from "../assets/img/png/slack3.png";
import slack4 from "../assets/img/png/slack4.png";
import slack5 from "../assets/img/png/slack5.png";
import slack6 from "../assets/img/png/slack6.png";
function SlackSection() {
  return (
    <section className="bg_black py-lg-5 pb-5 overflow-hidden">
      <Container className="pb-lg-4">
        {" "}
        <Row className="align-items-center ">
          <Col
            lg={2}
            md={3}
            sm={4}
            xs={6}
            className="pt-5 pt-lg-4 mt-2 mt-lg-0 justify-content-center d-flex"
            data-aos="flip-down"
            data-aos-duration="4000"
          >
            <img className="w_100_xsm" src={slack1} alt="slack1" />
          </Col>
          <Col
            lg={2}
            md={3}
            sm={4}
            xs={6}
            className="pt-5 pt-lg-4 mt-2 mt-lg-0 justify-content-center d-flex"
            data-aos="flip-up"
          >
            <img className="w_100_xsm" src={slack2} alt="slack2" />
          </Col>
          <Col
            lg={2}
            md={3}
            sm={4}
            xs={6}
            className="pt-5 pt-lg-4 mt-2 mt-lg-0 justify-content-center d-flex"
            data-aos="flip-down"
            data-aos-duration="10000"
          >
            <img className="w_100_xsm" src={slack3} alt="slack3" />
          </Col>
          <Col
            lg={2}
            md={3}
            sm={4}
            xs={6}
            className="pt-5 pt-lg-4 mt-2 mt-lg-0 justify-content-center d-flex"
            data-aos="flip-down"
            data-aos-duration="10000"
          >
            <img className="w_100_xsm" src={slack4} alt="slack4" />
          </Col>
          <Col
            lg={2}
            md={3}
            sm={4}
            xs={6}
            className="pt-5 pt-lg-4 mt-2 mt-lg-0 justify-content-center d-flex"
            data-aos="flip-down"
            data-aos-duration="10000"
          >
            <img className="w_100_xsm" src={slack5} alt="slack5" />
          </Col>
          <Col
            lg={2}
            md={3}
            sm={4}
            xs={6}
            className="pt-5 pt-lg-4 mt-2 mt-lg-0 justify-content-center d-flex"
            data-aos="flip-down"
            data-aos-duration="10000"
          >
            <img className="w_100_xsm" src={slack6} alt="slack6" />
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SlackSection;
