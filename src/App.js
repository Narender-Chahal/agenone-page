import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import MyNavbar from "./components/MyNavbar";
import HeaderSection from "./components/HeaderSection";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AcordianSection from "./components/AcordianSection";
import WeAreSection from "./components/WeAreSection";
import OurProjectSection from "./components/OurProjectSection";
import SlackSection from "./components/SlackSection";
import FooterSection from "./components/FooterSection";
import CardScroll from "./components/CardScroll";
import Discuss from "./components/Discuss";
import Learn from "./Learn";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloder from "./components/Preloder";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      delay: 800,
    });
  }, []);
  // const [textValue, setTextValue] = useState([
  //   {
  //     text: "heloo",
  //     btn: [
  //       {
  //         btnText: "plant",
  //       },
  //       {
  //         btnText: "ground",
  //       },
  //       {
  //         btnText: "grass",
  //       },
  //     ],
  //   },
  //   {
  //     text: "heloo",
  //   },
  //   {
  //     text: "heloo",
  //   },
  //   {
  //     text: "heloo",
  //   },
  //   {
  //     text: "heloo",
  //   },
  //   {
  //     text: "heloo",
  //   },
  // ]);
  return (
    <>
      {/* <Learn textValue={textValue} /> */}
      <div className="overflow_x_hidden">
        <div className="head_bg_img  bg-black min_100vh_xxl d-flex flex-column">
          <div className="flex-grow-1">
            <MyNavbar />
            <HeaderSection />
          </div>
        </div>
        <AcordianSection />
        <WeAreSection />
        <OurProjectSection />
        <SlackSection />
        <CardScroll />
        <div className="bg_foter">
          <Discuss />
          <FooterSection />
          <Preloder />
        </div>
      </div>
    </>
  );
}

export default App;
