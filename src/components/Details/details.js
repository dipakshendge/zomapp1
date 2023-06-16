import React, { Component } from "react";
import axios from "axios";
import "./details.css";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const url="http://3.17.216.66:4000"


class Details extends Component{
    constructor(){
        super()
        this.state={
            details:""
        }
    }

    render(){
        // let details= this.state.details;
        let {details}=this.state
        return(
            <>
                <div className="main">
                    <div className="tileImage">
                        <div className="imageClass">
                            <img src={details.restaurant_thumb} alt={details.restaurant_name}/>
                        </div>
                    </div>
                    <div className="tileContent">
                         <div className="content">
                            <h1>{details.restaurant_name }</h1>
                            <span id="cfeedback">123 Customer Rating Average</span>
                            <h3> Price <del/>{details.cost}<del/></h3>
                            <h3>Offer 10% discount Price Rs. {details.cost-details.cost/10}</h3>
                            <div className="Icon">
                                <div className="icons">
                                    <img src="https://i.ibb.co/wJvrhYg/veg.png" alt="Veg Sign" />
                                </div>
                                <div className="icons">
                                    <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt="sentized"/>
                                </div>
                            </div>
                            <Tabs>
                                <TabList>
                                    <Tab>ABOUT</Tab>
                                    <Tab>CONTACT</Tab>
                                </TabList>

                                <TabPanel>
                                    <h2>{details.restaurant_name}</h2>
                                    <p>{details.restaurant_name} Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
                                </TabPanel>
                                <TabPanel>
                                    <h3>{details.address}</h3>
                                    <h3>Phone. {details.contact_number}</h3>
                                </TabPanel>
                            </Tabs>
                         </div>
                    </div>
                </div>
            </>
        )
    }

    //api with async await
    async componentDidMount(){
        let restId=this.props.location.search.split('=')[1];
        let response=await axios.get (`${url}/details/${restId}`)
        this.setState({details:response.data[0]})
    }
} 

export default Details