import Header from "./header";
import Login from "../login";
import Home from "../home";
import React, {Component } from "react";
import {Switch, Route, Redirect} from 'react-router-dom'

class Main extends Component{
    constructor(props){
        super(props);

    }
    render(){
        const login= ()=>{
            return (
                <Login/>
            )
        }

        const home= () =>{
            return (
                <Home/>
            )
        }
        return(
            <div>
            <Header/>
            <Switch>
                <Route path="/login" component={login}></Route>
                <Route path="/home" component={home}></Route>
                <Redirect to="/login"></Redirect>
            </Switch>
            </div>
            
        )
    }
    
}

export default Main