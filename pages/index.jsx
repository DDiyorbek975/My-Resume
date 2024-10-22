import React from "react"
import Navbar from "./Components/Navbar";
import MainOne from "./Components/MainOne";
import Head from "next/head";
import MainTwo from "./Components/MainTwo";
import MainThree from "./Components/MainThree";
import MainFour from "./Components/MainFour";
import MainFive from "./Components/MainFive";
import MainSix from "./Components/MainSix";





const HomePage = () => {
    return(
        <div>
            <Head>
        <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css" 
          rel="stylesheet"
        />
      </Head>
            <Navbar />
            <MainOne />
            <MainTwo />
            <MainThree />
            <MainFour />
            <MainFive />
            <MainSix />
        </div>
    )
}


export default HomePage;