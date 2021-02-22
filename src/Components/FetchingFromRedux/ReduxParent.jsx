import React, { useState } from "react";
import { useSelector } from "react-redux";
import {getAllGroups} from "../../State/Selector/groupSelector";
import { ReduxChild } from "./ReduxChild";

export const ReduxParent =()=>{
    const selector = useSelector(getAllGroups);
    const [groupData,setGroupData]=useState(selector);
    return(
        <div>
            {groupData&&groupData.map((item)=>{
                return <ReduxChild currentitem={item}/>
            })}
        </div>
    )
}