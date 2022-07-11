import React from 'react'
import Navbar from "../components/Navbar";
import https from "https"
import Card from "../components/Card";
import axios from "axios";
import {useState, useEffect} from "react";

//fetching the Data through useEffect
const fetchData = async () =>
{
  try {
    const fetchJobs = await axios.get(`https://15.207.116.43:25088/tina/api/agents/hosts/types`, {
      headers: {
        Authorization : "Bearer 27e6cf669f680a397b6f5033fb1e40e19e3700cc",
      },
      httpsAgent: new https.Agent({ rejectUnauthorized: false }),

    });
    console.log(fetchJobs);
    
  } catch (error) {
    
    console.log(error);
  }
}


const Home = () => {
  useEffect(()=>
  {
    fetchData();

  }, [])
  const [data, setData] = useState([]);
  return (
    <div className="containor flex flex-col items-center h-screen">
      <Navbar /> 
      <div className="middleSlider w-full p-4 bg-slate-50 my-4 md:flex justify-around items-center md:overflow-x-scroll sm:flex">
        <Card />        
        <Card />        
        <Card />        
      </div>
     

    </div>
  )
}

export default Home