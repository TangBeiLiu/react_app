import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from "./Search";
import Main from "./Main";

class App extends Component {
    state = {
        searchName: ''
    }
    //更新状态
    setSearchName = (searchName) => this.setState({searchName})

    render () {
        return (
            <div className="container">
                <Search setSearchName={this.setSearchName}/>
                <Main searchName={this.state.searchName}/>
            </div>
        )
    }
}

export default App;
