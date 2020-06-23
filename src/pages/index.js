import React from "react"
import Navigation from '../components/Navigation.js';
import InfoSection from '../components/InfoSection';
import PortfolioSection from '../components/PortfolioSection';
import Contact from '../components/Contact';
import "../styles/styles.scss";

const IndexPage = () => (
  <div>
    <Navigation />
    <PortfolioSection />
    <InfoSection />
    <Contact />
  </div>
)

export default IndexPage
