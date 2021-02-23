import React from "react";

export const ReduxChild =({currentitem})=>{
    return(
        <div>
            <h1>{currentitem.name}</h1>
            <h1>{currentitem.rollno}</h1>
            {/* <img src={currentitem.image} style={{width:"200",height:"200",border:"2px solid black"}} /> */}
        </div>
    );
};