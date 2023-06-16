import React,{Component} from "react";
import ListnigDisplay from './listingDisplay'
import axios from "axios"
import "./listing.css"
const url="http://3.17.216.66:4000/restaurant?mealtype_id=";
class Listnig extends Component{
    constructor(props){
        super(props)
        this.state={
            reastaurantList:""
        }
    }
    render(){
        return(
            <>
               <div className="row">
                    <div id="mainListing">
                        <div id="filter">
                        </div>
                        <ListnigDisplay listData={this.state.reastaurantList}/>
                    </div>
               </div>
            </>
        )
    }
    //api calling 
    componentDidMount(){
        let mealId=this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId);
        axios.get(`${url}${mealId}`)
        .then((res)=>{this.setState({reastaurantList:res.data})})
    }
}

export default Listnig;