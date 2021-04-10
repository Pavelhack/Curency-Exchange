import React, {useState, useEffect, useRef} from 'react';
import { Select } from 'antd';
import InfoRate from './InfoRate';

const SelectForm = () =>{ 

    const { Option } = Select;

    const [currencies, setCurrencies] = useState(0);

    const [from, setFromCurrencies] = useState();

    const [usd, setUSD] = useState();

    const [eur, setEUR] = useState();

    let previousState = useRef();

    let urlCurrencies = "https://free.currconv.com/api/v7/currencies?apiKey=cc1c42623e7c44a5dccf"
    
    let defaultCurrencies = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=USD_${from},EUR_${from}`
    
    let BYNCurrencies = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=USD_BYN,EUR_BYN`
    
    const arrCurrency = [];

    for (let i = 0; i < currencies.length-1; i++) {
      arrCurrency.push(<Option key={currencies[i]}>{currencies[i]}</Option>);
    }

    useEffect( 
        () => {
            if(currencies == 0){
                (async () =>{
                    let response = await fetch(urlCurrencies);
                    let result = await response.json();
                    for(let i in result.results){arrCurrency.push(i)} 
                    setCurrencies(arrCurrency);

                    let res = await fetch(BYNCurrencies);
                    let resultFrom = await res.json();
                    setUSD(resultFrom.results["USD_BYN"].val);
                    setEUR(resultFrom.results["EUR_BYN"].val);

                    setFromCurrencies("BYN");
                })();
            }
            
            if(from !== previousState.current){
                (async () =>{
                    let res = await fetch(defaultCurrencies);
                    let resultFrom = await res.json();
                    setUSD(resultFrom.results[`USD_${from}`].val);
                    setEUR(resultFrom.results[`EUR_${from}`].val);
                })()
            }
        }
    )
    
    function onChange(value) {
        previousState.current = from;
    setFromCurrencies(`${value}`)
    }

return(
    <div>
        <div className = "info">
            <h1>info for {from}</h1>
            <div className = "USD">USD > {from} = {usd}</div>
            <div className = "EUR">EUR > {from} = {eur}</div>
        </div>
        <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
        >
        {arrCurrency}
        </Select>
    </div>
  
);
}

export default SelectForm;
