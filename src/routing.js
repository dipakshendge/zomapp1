import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import Home from "./components/Home/home";
import Listing from "./components/Listnig/listing"
import Details from "./components/Details/details"

const Routing=()=>{
    return(
        
        <BrowserRouter>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path ="/listnig/:mealId" component={Listing}/>
            <Route path ="/details" component={Details}/>
            <Footer />
        </BrowserRouter>
    );
};

export default Routing;