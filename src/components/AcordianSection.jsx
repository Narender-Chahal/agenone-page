import React from "react";
import { Container } from "react-bootstrap";
import { Accordion } from "react-bootstrap";
import acordian_img from "../assets/img/png/acordian_img.png";
function AcordianSection() {
  return (
    <section className="py-xl-5 my-5 ">
      <Container>
        <h2
          className="mb-0 ff_inter fw-medium fw-bold fs_4xl text-center clr_black"
          data-aos="fade-left"
        >
          The Services We Offer{" "}
          <span className="color_green_linear">For You</span>
        </h2>
        <Accordion defaultActiveKey="0" className="mt-5">
          <Accordion.Item
            eventKey="0"
            className="my-4 max_900 mx-auto"
            data-aos="fade-right"
          >
            <Accordion.Header>
              <h6 className="mb-0 ff_inter fw-semibold fs_xxl"> 01</h6>{" "}
              <h6 className="mb-0 ff_inter fw-semibold fs_xxl pl_40 pl_20_xsm">
                UI/UX Design
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-0 pb-3 ff_inter fw-normal fs_md  clr_brown max_width_700">
                {" "}
                Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.
                Ultricies nisl enim lacus id aliquam montes euismod urna sem.
              </p>
              <img className="w-100" src={acordian_img} alt="acordian_img" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="1"
            className=" max_900 mx-auto"
            data-aos="fade-right"
          >
            <Accordion.Header>
              <h6 className="mb-0 ff_inter fw-semibold fs_xxl"> 02</h6>{" "}
              <h6 className="mb-0 ff_inter fw-semibold fs_xxl pl_40 pl_20_xsm">
                Digital Marketing{" "}
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-0 pb-3 ff_inter fw-normal fs_md  clr_brown max_width_700">
                {" "}
                Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.
                Ultricies nisl enim lacus id aliquam montes euismod urna sem.
              </p>
              <img className="w-100" src={acordian_img} alt="acordian_img" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="2"
            className="my-4 max_900 mx-auto"
            data-aos="fade-right"
          >
            <Accordion.Header>
              <h6 className="mb-0 ff_inter fw-semibold fs_xxl"> 03</h6>{" "}
              <h6 className="mb-0 ff_inter fw-semibold fs_xxl pl_40 pl_20_xsm">
                Social Media Management{" "}
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-0 pb-3 ff_inter fw-normal fs_md  clr_brown max_width_700">
                {" "}
                Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.
                Ultricies nisl enim lacus id aliquam montes euismod urna sem.
              </p>
              <img className="w-100" src={acordian_img} alt="acordian_img" />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item
            eventKey="3"
            className="my-4 max_900 mx-auto"
            data-aos="fade-right"
          >
            <Accordion.Header>
              <h6 className="mb-0 ff_inter fw-semibold fs_xxl"> 04</h6>{" "}
              <h6 className="mb-0 ff_inter fw-semibold fs_xxl pl_40 pl_20_xsm">
                Development{" "}
              </h6>
            </Accordion.Header>
            <Accordion.Body>
              <p className="mb-0 pb-3 ff_inter fw-normal fs_md  clr_brown max_width_700">
                {" "}
                Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu.
                Ultricies nisl enim lacus id aliquam montes euismod urna sem.
              </p>
              <img className="w-100" src={acordian_img} alt="acordian_img" />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </section>
  );
}

export default AcordianSection;
