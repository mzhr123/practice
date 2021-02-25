import React from "react";

export const ReduxChild =({currentitem})=>{
    return(
        <div style={{display:"inline-Block",border:"2px solid black",borderRadius:"10px",margin:"10px",width:"20%"}}>
            <h2>{currentitem.name}</h2>
            <img  src={currentitem.image} style={{width:"30%",height:"30%",border:"2px solid black",borderRadius:"10px"}} />
            <h3>{currentitem.desc}</h3>
        </div>
    );
};