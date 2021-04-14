import React, {useState, useEffect, useRef} from 'react';
import {InputValue} from './Input'

export const SelectForm = ({currencyDefault , setCurrencyDefault}) =>{

    const [usd, setUSD] = useState(null);

    const [eur, setEUR] = useState(null);

    let previousState = useRef(null);

    let defaultCurrencies = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=USD_${currencyDefault},EUR_${currencyDefault}`

    useEffect(
        () => {
            if(previousState.current !== currencyDefault){
                (async () =>{
                    let res = await fetch(defaultCurrencies);
                    let resultFrom = await res.json();
                        setUSD(resultFrom.results[`USD_${currencyDefault}`].val);
                        setEUR(resultFrom.results[`EUR_${currencyDefault}`].val);
                    previousState.current = currencyDefault;
                })();
            }
        }
    )



return(
    <div>
        <div className = "info">
            <h1>current currency {currencyDefault}</h1>
            <div className = "USD">USD > {currencyDefault} = {usd}</div>
            <div className = "EUR">EUR > {currencyDefault} = {eur}</div>
        </div>
        <InputValue setCurrency = {setCurrencyDefault}/>
    </div>
);
}
