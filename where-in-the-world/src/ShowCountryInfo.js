import React from "react";
import Home from "./Home";
import { BrowserRouter, Switch, Route, Link, useNavigate } from 'react-router-dom'

function ShowCountryInfo() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default ShowCountryInfo