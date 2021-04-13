import React, {useEffect} from 'react';
import { Input } from 'antd';
import {InputValue} from "./Input";
import {useState} from "react";
import {Demo} from "./InputSubmit"




export const InfoRate = () =>{
    const [st1, setState1] = useState(null);

    const [st2, setState2] = useState(null);

    const [result, setResult] = useState();

    const GetRate  = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=${st1}_${st2}`

    useEffect(
        () => {
            if(st1 !== null && st2 !== null){
                (async () =>{
                    let res = await fetch(GetRate);
                    let getResult = await res.json();
                    setResult(getResult.results[`${st1}_${st2}`].val);
                })();
            }
        }
    )

    return(
        <div>
            <div>
                <p>Current Currency From {st1}</p>
                <InputValue setCurrency = {setState1}/>
            </div>
            <div>
                <p>Current Currency To { st2 }</p>
                <InputValue setCurrency = {setState2}/>
            </div>
            <div>
                <p>It`s Your Value</p>
                <Demo/>
            </div>
        </div>
    )
    
}
