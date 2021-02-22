import {createStore,combineReducer} from "redux";
import { GroupReducer } from "../Reducer/GroupReducer";

export const ConfigureStore=()=>{
    const Store=createStore(
        combineReducer({
            GroupReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__ ()
        );
        return Store;
    };