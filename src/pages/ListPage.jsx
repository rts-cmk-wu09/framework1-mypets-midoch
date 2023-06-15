import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAxios from "../useAxios";
import Header from "../components/HomePageHeader";
import HeroSection from "../components/HomePageHeroSection";
import Footer from "../components/HomePageFooter";
import "../styles/ListPage.css";

const ListPage = (props) => {
  const [data, error, loading] = useAxios();

  return (
    <>
      <Header />
      <HeroSection />
      <Footer />
    </>
  );
};

export default ListPage;
