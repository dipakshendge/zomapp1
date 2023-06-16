import React from "react";
import {Link} from 'react-router-dom'
import "./quickSearch.css";


const QuickDisplay =(props)=>{
    const listMeal=(data)=>{
        if(data){
            // console.log(data)
            return data.map((item)=>{
                return(
                    <>
                       <Link to={`listnig/${item.mealtype_id}`}>
                                <div id="tileComponant" key={item._id}>
                                    <div className="tileComponant1">
                                        <img src={item.meal_image} alt={item.mealtype} />
                                    </div>
                                    <div className="tileComponant2">
                                        <div className="tileComponantHeading">
                                            <p>{item.mealtype}</p>
                                        </div>
                                        <div className="tileComponantSubHeading">
                                            {item.content}
                                        </div>
                                    </div>
                                </div>
                       </Link>
                    </>
                )
            })
        }
    }
    return(
        <>
          <div id="tileContainer">
                {listMeal(props.mealData)}
          </div>
        </>
    )
}

export default QuickDisplay;