import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo_img from "../assets/img/png/Shapes.png";
function MyNavbar() {
  const [first, setfirst] = useState(true);
  if (first) {
    document.body.style.overflow = "visible";
  } else {
    document.body.style.overflow = "hidden";
  }
  return (
    <section>
      

      <Container className="container">
        <nav className="d-flex align-items-center justify-content-between pt-3">
          <a className="d-flex align-items-center" href="#">
            <img src={logo_img} alt="logo_img" />
            <span className="ff_inter fw-bold fs_xl text-white ps-2">
              Agenone
            </span>
          </a>
          <ul
            className={
              first
                ? "hide_nav d-flex flex-column flex-lg-row align-items-center justify-content-center"
                : "show_nav d-flex flex-column flex-lg-row align-items-center justify-content-center"
            }
          >
            {" "}
            <button
              onClick={() => setfirst(true)}
              className="btn-close bg-white p-3 position-absolute d-lg-none top-0 end-0 m-4"
            ></button>
            <li>
              <a
                onClick={() => setfirst(true)}
                className="ff_inter fw-medium fs_md text-white line_hover position-relative"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="ps-lg-5 pt-4 pt-lg-0">
              <a
                onClick={() => setfirst(true)}
                className="ff_inter fw-medium fs_md text-white line_hover position-relative"
                href="#"
              >
                Services
              </a>
            </li>
            <li className="ps-lg-5 pt-4 pt-lg-0">
              <a
                onClick={() => setfirst(true)}
                className="ff_inter fw-medium fs_md text-white line_hover position-relative"
                href="#"
              >
                Project
              </a>
            </li>
            <li className="ps-lg-5 pt-4 pt-lg-0">
              <a
                onClick={() => setfirst(true)}
                className="ff_inter fw-medium fs_md text-white line_hover position-relative"
                href="#"
              >
                About Us{" "}
              </a>
            </li>{" "}
            <button
              onClick={() => setfirst(true)}
              className="ff_inter fw-medium fs_sm common_btn nav_btn_width d-lg-none mt-4 "
            >
              Contact Us
            </button>
          </ul>
          <button className="ff_inter fw-medium fs_sm common_btn nav_btn_width  d-none d-lg-flex align-items-center justify-content-center ">
            Contact Us
          </button>
          <a className="d-lg-none " onClick={() => setfirst(false)} href="#">
            <div className="nav_icon d-flex align-items-center justify-content-center flex-column ">
              <span className="icon"></span>
              <span className="icon mt-1"></span>
            </div>
          </a>
        </nav>
      </Container>
    </section>
  );
}

export default MyNavbar;
