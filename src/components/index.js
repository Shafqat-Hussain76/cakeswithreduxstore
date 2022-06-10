import React,{ useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked} from "../redux/cakeslicer";

export const Dispaly = ()=>{
    const dispatch = useDispatch();

    const list = useSelector((e)=>e.cakemul);
    console.log(list);
  

    return(
        <>
        <h1> {list.noOfCakes} </h1>
        <button onClick={()=>dispatch(ordered())}>Add</button>
        <button onClick={()=>dispatch(restocked(5))}>restocked</button>
    
        </>
    )
}