import React from "react";
import "./home.css";
import Search from "./search";
import QuickSearch from "./quickAPI";
const Home =() =>{
    return(
        <>
          <Search />
          <QuickSearch />
        </>
    )
};


export default Home;