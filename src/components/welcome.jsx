import React, { useState, useEffect } from "react";
import { Navigation } from "./landingpage/navigation";
import { Header } from "./landingpage/header";
import { Features } from "./landingpage/features";
import { About } from "./landingpage/about";
import { Services } from "./landingpage/services";
import { Gallery } from "./landingpage/gallery";
import { Testimonials } from "./landingpage/testimonials";
import { Team } from "./landingpage/Team";
import { Contact } from "./landingpage/Contact/contact";
import JsonData from "../data/data.json";
import SmoothScroll from "smooth-scroll";
import { Link } from 'react-router-dom';


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const Welcome = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <Features data={landingPageData.Features} />
      <About data={landingPageData.About} />
      <Services data={landingPageData.Services} />
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
      <Contact data={landingPageData.Contact} />
    </div>
  );
};

export default Welcome;
