import { BrowserRouter, BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import React from 'react';
import Home from "../pages/home/home";
import GameDetail from "../pages/gameDetail/gameDetail";
import Genre from "../pages/genre/genre";

function Routes() {
    return (
        <BrowserRouter>
        <Router>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/genre" component={Genre}/>
                <Route path="/game-detail/:id" component={GameDetail}/>
            </Switch>
        </Router>
        </BrowserRouter>
    );
}

export default Routes;