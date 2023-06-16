import React,{Component} from "react";
import "./search.css";


const lurl="http://3.17.216.66:4000/location"
const rurl="http://3.17.216.66:4000/restaurant?stateId="
class Search extends Component{
    constructor(){
        super();
        this.state={
            location:"",
            restData:""
        }
        // console.log("in constructor")
    }
    renderCity=(data)=>{
        if(data){
            return data.map((item)=>{
                return (
                    <option value={item.state_id} key={item._id}>{item.state}</option>
                )
            })
        }
    }    
    handelCity=(event)=>{
        // console.log(event.target.value)
            const stateId=event.target.value
            // console.log(stateId)
            fetch(`${rurl} ${stateId}`, {method:'GET'})
            .then((res)=>res.json())
            .then((data)=>{this.setState({restData:data})
                // console.log(data);
            })
    }
    renderrest=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.restaurant_id} key={item._id}>{item.restaurant_name}|{item.address}</option>
                )
            })
        }
    }

    render(){
        //  console.log(this.state.restData)
        return(
            <div id="search">
                <div id="logo">
                    <span>D!</span>
                </div>
                <div id="searchHeading"> Find Best Place Near You</div>
                <div id="dropDown">
                    <select name="location" id="location" onChange={this.handelCity}>
                        <option value="">---Select Location---</option>
                        {this.renderCity(this.state.location)}
                    </select>
                    <select name="restaurant" id="restaurant">
                        <option value="">---Select Restaurant---</option>
                        {this.renderrest(this.state.restData)}
                    </select>
                </div>   
            </div>
        )
    }
    componentDidMount(){
            fetch(lurl, {method:'GET'})
            //return promiss
            .then((res)=>res.json())
            //return data
            .then((data)=>{
                this.setState({
                    location:data
                })
            })
    }
}

export default Search;