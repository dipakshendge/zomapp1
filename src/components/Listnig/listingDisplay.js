import React from "react";
import {Link} from "react-router-dom"

const ListnigDisplay =(props)=>{
    
    const renderData=({listData})=>{
        const renderMeal=(data)=>{
            if(data){
             return(
                 data.map((dt)=>{
                     return(
                         <>
                             <span className="label label-success" key={dt.mealtype_id}>{dt.mealtype_name}</span> &nbsp;
                        </>
                     )
                 })
             )
            }
         }
        const renderCuisine=(data)=>{
            if(data){
                return(data.map((item)=>{
                    return(
                        <>
                            <span className="label label-primary" key={item.cuisine_id}>{item.cuisine_name}</span> &nbsp;
                        </>
                    )
                })
                )
            }
        }
        if(listData){
            if(listData.length>0){
            return(
                listData.map((item)=>{
                    return(
                        <div className="item" key={item._id}>
                            <div className="row">
                                <div className="col-md-5">
                                    <img src={item.restaurant_thumb} alt={item.restaurant_name} className="Image" />
                                </div>
                                <div className="col-md-7">
                                    <div className="hotel_name">
                                        <Link to={`/details?restId=${item.restaurant_id}`}>{item.restaurant_name}</Link>
                                        <div className="city_name">{item.address}</div>
                                        <div className="city_name">{item.rating_text}</div>
                                        <div className="city_name">Rs. {item.cost}</div>
                                        <div className="labelDiv">
                                            {renderMeal(item.mealTypes)}
                                        </div>
                                        <div className="labelDiv">
                                            {renderCuisine(item.cuisines)}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
        else{
            return(
                <div>
                    <h2>No Data Per Filter</h2>
                </div>
            )
        }
        
    }
    else {
        return(
            <div>
                <h2>Loading...</h2>
                <img src="/images/loader.gif" alt="loader"  />
            </div>
        )
    }
       
}
    return(
    <>
       <div id="content">
        {renderData(props)}
       </div>
    </>
    )
}

export default ListnigDisplay