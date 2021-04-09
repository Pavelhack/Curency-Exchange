import React, {useState, useEffect} from 'react';
import { Select } from 'antd';
import InfoRate from './InfoRate';

const SelectForm = () =>{ 

    const { Option } = Select;

    const [currencies, setCurrencies] = useState(0);

    const [from, setFromCurrencies] = useState();

    const [usd, setUSD] = useState();

    const [eur, setEUR] = useState();

    let urlCurrencies = "https://free.currconv.com/api/v7/currencies?apiKey=cc1c42623e7c44a5dccf"
    
    let defaultCurrencies = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=${from}_USD,${from}_EUR`
    
    let BYNCurrencies = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=BYN_USD,BYN_EUR`
    
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
                    setUSD(resultFrom.results["BYN_USD"].val);
                    setEUR(resultFrom.results["BYN_EUR"].val);

                    setFromCurrencies("BYN");
                })();

            }
            
            if(from !== "BYN" && from !== undefined){
                (async () =>{
                    let res = await fetch(defaultCurrencies);
                    let resultFrom = await res.json();
                    setUSD(resultFrom.results[`${from}_USD`].val);
                    setEUR(resultFrom.results[`${from}_EUR`].val);
                })()
            }
        }
    )
    

    function onChange(value) {
    setFromCurrencies(`${value}`)
    }

return(
    <div>
        <div className = "info">
            <h1>info for {from}</h1>
            <div className = "USD">{from} > USD = {usd}</div>
            <div className = "EUR">{from} > EUR = {eur}</div>
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
