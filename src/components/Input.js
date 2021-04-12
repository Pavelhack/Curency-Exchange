import React, {useState, useEffect} from 'react';
import {Select} from 'antd';

export const Input = ({ setCurrency }) => {

    const [currencies, setCurrencies] = useState(0);

    let urlCurrencies = "https://free.currconv.com/api/v7/currencies?apiKey=cc1c42623e7c44a5dccf"

    const ArrCurrency = [];

    const {Option} = Select;

    for (let i = 0; i < currencies.length - 1; i++) {
        ArrCurrency.push(<Option key={currencies[i]}>{currencies[i]}</Option>);
    }

    useEffect(
        () => {
            if (currencies == 0) {
                (async () => {
                    let response = await fetch(urlCurrencies);
                    let result = await response.json();
                    for (let i in result.results) {
                        ArrCurrency.push(i)
                    }
                    setCurrencies(ArrCurrency);
                })();
            }
        }
    )

    function onChange(value) {
        setCurrency(value);
    }

    return (
        <Select
            showSearch
            style={{width: 200}}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={onChange}
        >
            {ArrCurrency}
        </Select>
    )
}