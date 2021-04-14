import React, {useEffect} from 'react';
import {useState} from "react";
import {Demo} from "./InputSubmit"




export const InfoRate = () =>{

    const [objectData, setObjectData] = useState({});

    const [result, setResult] = useState();

    const st1 = objectData.price?.currency;

    const st2 = objectData.price?.currency2;

    const number = objectData.price?.number;

    const GetRate  = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=${st1}_${st2}`;

    const Output = (result * number)

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
                <p>It`s Your Value {Output}</p>
                <Demo setObject = {setObjectData}/>
            </div>
        </div>
    )
    
}
