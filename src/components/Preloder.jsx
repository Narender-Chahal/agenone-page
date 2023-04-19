import React from "react";
import logo_img from "../assets/img/png/Shapes.png"
function Preloder() {
  setTimeout(() => {
    document.querySelector(".preloder").style.display = "none";
    document.body.classList.remove("overflow-hidden");
  }, 2000);
  return (
    <div>
      <div className="preloder">
        <a className="d-flex align-items-center" href="#">
          <img src={logo_img} alt="logo_img" /> 
          <span className="ff_inter fw-bold fs_xl text-white ps-2">
            Agenone
          </span>
        </a>
      </div>
    </div>
  );
}

export default Preloder;
