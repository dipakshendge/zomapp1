import React,{Component} from "react";
import QuickDisplay from "./quickSearch";

const qurl="http://3.17.216.66:4000/quicksearch"


class QuickSearch extends Component {
    constructor(){
        super()
        this.state={
            mealType:""
        }
        
    }

    render(){
        return(
            <>
           
                <div id="quickSearch">
                    <span id="quickHeading">
                        Quick Search
                    </span>
                    <span id="quickSubHeading">
                        Find Restaurants By Meal Type
                    </span>
                    <QuickDisplay mealData={this.state.mealType}/>
                </div>
            </>
        )
    }
    //API Calling
    componentDidMount(){
        fetch(qurl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            // {console.log(data)}
            this.setState({
                mealType:data
            })
        })
        .catch((err)=>{console.log(err)})
    }
}
export default QuickSearch