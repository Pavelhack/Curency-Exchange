import './App.css';
import React, {useState} from "react"
import {SelectForm} from "./components/Select";
import {InfoRate} from "./components/InfoRate";
import {Header} from "./components/Header";
import {Route, Switch} from "react-router-dom"


export const App = () => {

    const [currencyDefault, setCurrencyDefault] = useState("BYN");
    const [currencyFrom, setCurrencyFrom] = useState("USD");
    const [currencyTo, setCurrencyTo] = useState("BYN");

    return (
        <div className="App">
            <Header/>
            <div className="content">

                <Switch>

                    <Route exact path="/">
                        <SelectForm currencyDefault={currencyDefault} setCurrencyDefault = {setCurrencyDefault}/>
                    </Route>

                    <Route path="/InfoRate">
                        <InfoRate currencyFrom = {currencyFrom} setCurrencyFrom={setCurrencyFrom} currencyTo = {currencyTo} setCurrencyTo={setCurrencyTo}/>
                    </Route>

                </Switch>
            </div>
        </div>
    );
}