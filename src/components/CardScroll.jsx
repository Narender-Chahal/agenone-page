import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import avtar1 from "../assets/img/png/avatar1.png";
import avtar2 from "../assets/img/png/avtar2.png";
import avtar3 from "../assets/img/png/Avtar3.png";
import avtar4 from "../assets/img/png/avtart4.png";
function CardScroll() {
  return (
    <section className="overflow-hidden">
      <Container>
        <div className="d-flex flex-column flex-lg-row overflow_y_scroll_lg scroll_hiden justify-content-center ">
          <div className="overflow_y_scroll scroll_hiden">
            <div className="d-flex h_1000 flex-column">
              <div
                className="card_box p-4 mt_40"
                data-aos="flip-left"
                data-aos-duration="10000"
              >
                <p className="mb-0 ff_inter fw-normal fs_lg lorem_clr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="d-flex align-items-center pt-4">
                  <img src={avtar1} alt="avtar1" />
                  <div className="ps-2 ms-1">
                    <h4 className="mb-0 ff_inter fw-semibold fs_lg  clr_black1">
                      Clara Insomnia{" "}
                    </h4>
                    <p className="mb-0 fw-normal fs_sm earth_clr pt-1">
                      Occupation{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card_box p-4 mt_40"
                data-aos="flip-left"
                data-aos-duration="10000"
              >
                <p className="mb-0 ff_inter fw-normal fs_lg lorem_clr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="d-flex align-items-center pt-4">
                  <img src={avtar2} alt="avtar2" />
                  <div className="ps-2 ms-1">
                    <h4 className="mb-0 ff_inter fw-semibold fs_lg  clr_black1">
                      John Doe{" "}
                    </h4>
                    <p className="mb-0 fw-normal fs_sm earth_clr pt-1">
                      Earth Founder
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card_box p-4 mt_40"
                data-aos="flip-left"
                data-aos-duration="10000"
              >
                <p className="mb-0 ff_inter fw-normal fs_lg lorem_clr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="d-flex align-items-center pt-4">
                  <img src={avtar3} alt="avtar3" />
                  <div className="ps-2 ms-1">
                    <h4 className="mb-0 ff_inter fw-semibold fs_lg  clr_black1">
                      Alan Runner{" "}
                    </h4>
                    <p className="mb-0 fw-normal fs_sm earth_clr pt-1">
                      Sun Founder{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="card_box p-4 mt_40"
                data-aos="flip-left"
                data-aos-duration="10000"
              >
                <p className="mb-0 ff_inter fw-normal fs_lg lorem_clr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="d-flex align-items-center pt-4">
                  <img src={avtar4} alt="avtar4" />
                  <div className="ps-2 ms-1">
                    <h4 className="mb-0 ff_inter fw-semibold fs_lg  clr_black1">
                      Lil Nas{" "}
                    </h4>
                    <p className="mb-0 fw-normal fs_sm earth_clr pt-1">
                      Moon Founder{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card_box p-4 mt_40 d-lg-none">
                <p className="mb-0 ff_inter fw-normal fs_lg lorem_clr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="d-flex align-items-center pt-4">
                  <img src={avtar1} alt="avtar1" />
                  <div className="ps-2 ms-1">
                    <h4 className="mb-0 ff_inter fw-semibold fs_lg  clr_black1">
                      Clara Insomnia{" "}
                    </h4>
                    <p className="mb-0 fw-normal fs_sm earth_clr pt-1">
                      Occupation{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card_box p-4 mt_40 d-lg-none">
                <p className="mb-0 ff_inter fw-normal fs_lg lorem_clr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="d-flex align-items-center pt-4">
                  <img src={avtar2} alt="avtar2" />
                  <div className="ps-2 ms-1">
                    <h4 className="mb-0 ff_inter fw-semibold fs_lg  clr_black1">
                      John Doe{" "}
                    </h4>
                    <p className="mb-0 fw-normal fs_sm earth_clr pt-1">
                      Earth Founder
                    </p>
                  </div>
                </div>
              </div>
              <div className="card_box p-4 mt_40 d-lg-none">
                <p className="mb-0 ff_inter fw-normal fs_lg lorem_clr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="d-flex align-items-center pt-4">
                  <img src={avtar3} alt="avtar3" />
                  <div className="ps-2 ms-1">
                    <h4 className="mb-0 ff_inter fw-semibold fs_lg  clr_black1">
                      Alan Runner{" "}
                    </h4>
                    <p className="mb-0 fw-normal fs_sm earth_clr pt-1">
                      Sun Founder{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card_box p-4 mt_40 d-lg-none">
                <p className="mb-0 ff_inter fw-normal fs_lg lorem_clr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="d-flex align-items-center pt-4">
                  <img src={avtar4} alt="avtar4" />
                  <div className="ps-2 ms-1">
                    <h4 className="mb-0 ff_inter fw-semibold fs_lg  clr_black1">
                      Lil Nas{" "}
                    </h4>
                    <p className="mb-0 fw-normal fs_sm earth_clr pt-1">
                      Moon Founder{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow_y_scroll scroll_hiden d-none d-lg-flex">
            <div className="ps-lg-5 h_1000 d-flex flex-column">
              {" "}
              <div className="card_box p-4 mt_40" data-aos="flip-right">
                <p className="mb-0 ff_inter fw-normal fs_lg lorem_clr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="d-flex align-items-center pt-4">
                  <img src={avtar1} alt="avtar1" />
                  <div className="ps-2 ms-1">
                    <h4 className="mb-0 ff_inter fw-semibold fs_lg  clr_black1">
                      Clara Insomnia{" "}
                    </h4>
                    <p className="mb-0 fw-normal fs_sm earth_clr pt-1">
                      Occupation{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card_box p-4 mt_40" data-aos="flip-right">
                <p className="mb-0 ff_inter fw-normal fs_lg lorem_clr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="d-flex align-items-center pt-4">
                  <img src={avtar2} alt="avtar2" />
                  <div className="ps-2 ms-1">
                    <h4 className="mb-0 ff_inter fw-semibold fs_lg  clr_black1">
                      John Doe{" "}
                    </h4>
                    <p className="mb-0 fw-normal fs_sm earth_clr pt-1">
                      Earth Founder
                    </p>
                  </div>
                </div>
              </div>
              <div className="card_box p-4 mt_40" data-aos="flip-right">
                <p className="mb-0 ff_inter fw-normal fs_lg lorem_clr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="d-flex align-items-center pt-4">
                  <img src={avtar3} alt="avtar3" />
                  <div className="ps-2 ms-1">
                    <h4 className="mb-0 ff_inter fw-semibold fs_lg  clr_black1">
                      Alan Runner{" "}
                    </h4>
                    <p className="mb-0 fw-normal fs_sm earth_clr pt-1">
                      Sun Founder{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="card_box p-4 mt_40" data-aos="flip-right">
                <p className="mb-0 ff_inter fw-normal fs_lg lorem_clr">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. aliquam.
                </p>
                <div className="d-flex align-items-center pt-4">
                  <img src={avtar4} alt="avtar4" />
                  <div className="ps-2 ms-1">
                    <h4 className="mb-0 ff_inter fw-semibold fs_lg  clr_black1">
                      Lil Nas{" "}
                    </h4>
                    <p className="mb-0 fw-normal fs_sm earth_clr pt-1">
                      Moon Founder{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default CardScroll;
