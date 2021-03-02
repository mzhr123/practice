import React from "react";
import { DeleteChild } from "./DeleteChild";

export const DeleteParent =()=>{

    const defaultPerson = [
        { name: "mazhar", age: 20 },
        { name: "saim", age: 27 },
        { name: "saqib", age: 18 },
      ];
    return(
        <div>
            <DeleteChild/>
        </div>
    )
}