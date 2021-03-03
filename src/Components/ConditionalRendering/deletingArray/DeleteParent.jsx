import React, { useState } from "react";
import { DeleteChild } from "./DeleteChild";

export const DeleteParent =()=>{

    const person = [
        { name: "mazhar", age: 20 },
        { name: "saim", age: 27 },
        { name: "saqib", age: 18 },
        { name: "aadil", age: 45 },
        { name: "rizwan", age: 48 },
      ];
      const {showArray,setShowArray}=useState(person);
    return(
        <div>
            {showArray.map((item)=>{
                return(  
                  <DeleteChild itemCurrent={item}/>
                    )
            })
            };
        </div>
    )
}