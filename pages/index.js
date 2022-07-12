import React from "react";
import Navbar from "../components/Navbar";
import https from "https";
import Card from "../components/Card";
import CardAgent from "../components/CardAgent";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {
  const [data, setData] = useState({});
  //fetching the Data through useEffect
  const fetchData = async () => {
    try {
      const fetchJobs = await axios.get(
        `http://localhost:3001/v1/tina/agents/findCountAll`
      );
      console.log(fetchJobs);
      setData(fetchJobs.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="containor flex flex-col items-center h-full">
      <Navbar />
      <div className="middleSlider w-full p-4 bg-slate-50 my-4 md:flex justify-around items-center md:overflow-x-scroll sm:flex">
        <Card host={data.countAgent} application={data.countApplication} />
        <Card host={data.countAgent} application={data.countApplication}/>
        <Card host={data.countAgent} application={data.countApplication}/>
      </div>
      <div className="agentShowCase w-full p-4 my-5 bg-gray-50 flex justify-around items-center overflow-y-scroll">
        <CardAgent />
        <CardAgent />
        <CardAgent /> 
        <CardAgent /> 
        <CardAgent /> 
        <CardAgent />
      </div>
    </div>

  );
};

export default Home;
