import React from "react";
import { DeleteParent } from "../ConditionalRendering/deletingArray/DeleteParent";
import { ReduxParent } from "../FetchingFromRedux/ReduxParent";

export const Landing =()=>{
    return(
        <div>
           {/* <ReduxParent/>  */}
           <DeleteParent/>
        </div>
    )
}