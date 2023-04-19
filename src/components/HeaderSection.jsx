import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Slider from "react-slick";
import vector_arrow from "../assets/img/png/Vector.png";
import special_icon1 from "../assets/img/png/Special Icon.png";
import special_icon2 from "../assets/img/png/Special Icon2.png";
import special_icon3 from "../assets/img/png/Special Icon3.png";
import special_icon4 from "../assets/img/png/Special Icon4.png";
import { useRef } from "react";
function HeaderSection() {
  const first = useRef();
  console.log(first);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 8000,
        settings: "unslick",
      },

      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };
  return (
    <section className="py-5 mt-xl-5 text-center overflow-hidden">
      <Container>
        <div className="text-center">
          {" "}
          <button className="btn_brown ff_inter fw-medium fs_xsm text-white ">
            NUMBER ONE CREATIVE DIGITAL AGENCY{" "}
          </button>
        </div>
        <h1 className="mb-0 text-center fw-bold fs_4xl ff_inter text-white">
          <span className="d-block color_green_linear pt-lg-3 pt-2   ">
            Smart Choices
          </span>{" "}
          For Your Business Growth{" "}
        </h1>
        <p className="mb-0 ff_inter fw-medium fs_lg text_dark text-center pt-lg-4 pt-3">
          <span className="d-block">
            We're a team of experienced designers, developers,
          </span>{" "}
          and marketers, passionate about delivering exceptional digital
          solutions.
        </p>{" "}
        <button className="ff_inter fw-medium fs_md   contact_btn_width contactus_btn mt-lg-5 mt-4  mb-lg-3  contactus_button">
          Contact Us{" "}
          <span>
            <img className="ps-3" src={vector_arrow} alt="vector_arrow" />
          </span>
        </button>
        <div
          className="bg_img pb-5 mt-5 ps-xl-4 px-3 px-xl-0"
          data-aos="flip-down"
          data-aos-duration="10000"
        >
          <h3 className="ff_inter mb-0 fw-semibold fs_xxl text-white pt-4 ">
            <span className="d_lg_block "> Benefit of</span> improving your
            business
          </h3>
          <Slider {...settings} className="justify-content-center row">
            <Col
              lg={3}
              md={6}
              className=" pt-5"
              data-aos="flip-left"
              data-aos-duration="10000"
            >
              <img
                className="width_xsm"
                src={special_icon1}
                alt="special_icon1"
              />
              <h4 className="mb-0 ff_inter fw-medium fs_xl text-white pt-2">
                Expanding the Market
              </h4>
            </Col>
            <Col lg={3} md={6} className="  pt-5" data-aos="flip-left">
              <img
                className="width_xsm"
                src={special_icon2}
                alt="special_icon2"
              />
              <h4 className="mb-0 ff_inter fw-medium fs_xl text-white pt-2">
                Cost-Effective
              </h4>
            </Col>
            <Col lg={3} md={6} className="  pt-5" data-aos="flip-up">
              <img
                className="width_xsm"
                src={special_icon3}
                alt="special_icon3"
              />
              <h4 className="mb-0 ff_inter fw-medium fs_xl text-white pt-2">
                More Professional{" "}
              </h4>
            </Col>
            <Col lg={3} md={6} className=" pt-5" data-aos="flip-right">
              <img
                className="width_xsm"
                src={special_icon4}
                alt="special_icon4"
              />
              <h4 className="mb-0 ff_inter fw-medium fs_xl text-white pt-2">
                Attract Client{" "}
              </h4>
            </Col>
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default HeaderSection;
