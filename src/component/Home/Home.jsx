import React from "react";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";
import Success from "../Success/Success";

const Home = () => {
  const dataPromise = fetch("/doctors.json").then((res) => res.json());
  return (
    <>
      <Banner></Banner>
      <Doctors dataPromise={dataPromise}></Doctors>
      <Success></Success>
    </>
  );
};

export default Home;
