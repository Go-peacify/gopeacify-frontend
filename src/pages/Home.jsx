import React from "react";
import Hero from "../components/Hero";
import Whyus from "../components/Whyus";
import { Banner } from "../components/Banner";
import Issue from "../components/Issue";
import Intern from "../components/Internship";
import { Investors } from "../components/Investors";
import AboutUs from "../components/AboutUs";
import { Stats } from "../components/Stats";
import Contact from "../components/Footer/Contact";
import Testinomial from "../components/Testinomial";
import Testinomialimg from "../components/Testinomialimg";
import Appointment from "../components/Appointment";
// import Health from "../components/Health";
const Home = () => {
  return (
    <>
      <Hero />
      <Whyus />
      <Issue />
      {/* <Health /> */}
      <Intern />
      <Appointment />
      <Testinomialimg />
      <Stats />
      <Testinomial />
      <Investors />
      {/* <AboutUs /> */}
      <Contact />
    </>
  );
};

export default Home;
