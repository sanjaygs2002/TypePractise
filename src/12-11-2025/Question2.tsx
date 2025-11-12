import { useState } from "react";
import type { User } from "./types";

function Question2(){
const [state, setState]= useState<User>({id:1,name:"Kodis"});

return (
    <>
    <p>{state.name}</p>
    <h1>{state.id}</h1>
    </>
)
}

export default Question2;

