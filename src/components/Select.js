import React, {useState, useEffect} from 'react';
import { Select } from 'antd';
import InfoRate from './InfoRate';

const SelectForm = () =>{ 
    const { Option } = Select;

    const [currencies, setCurrencies] = useState(0)

    const [from, setFromCurrencies] = useState()

    let urlCurrencies = "https://free.currconv.com/api/v7/currencies?apiKey=cc1c42623e7c44a5dccf"
    
    let defaultCurrencies = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=${from}_USD,${from}_EUR`
    
    let usd, eur;

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
                    setFromCurrencies("BYN")
                })();
            }if(from !== "BYN"){
                (async () =>{
                    let res = await fetch(defaultCurrencies);
                    let resultFrom = await res.json();
                    
                    for(let i in resultFrom.results){
                        console.log(resultFrom.results[i])

                        console.log(resultFrom.results[i].val)
                    }

                    // 
                    usd = resultFrom.results[`${from}_USD`].val
                    eur = resultFrom.results[`${from}_EUR`].val
                    console.log(usd, eur)
                })()
            }
        }
    )
    

    function onChange(value) {
    console.log(`selected ${value}`);
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
