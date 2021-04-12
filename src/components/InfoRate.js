import React from 'react'
import {Input} from "./Input";
import {useState} from "react";

export const InfoRate = () =>{
    const [st1, setState1] = useState()
    const [st2, setState2] = useState()

    return(
        <div>
            <div>
                <p>current currency {st1}</p>
                <Input setCurrency = {setState1}/>
            </div>
            <div>
                <p>rate to { st2 }</p>
                <Input setCurrency = {setState2}/>
            </div>
        </div>
)
    
}