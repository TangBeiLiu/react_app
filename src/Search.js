import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Search extends Component {
    static propTypes = {
        setSearchName: PropTypes.func.isRequired
    }
    handleSearch = () => {
        //得到输入的关键字
        const searchName = this.input.value.trim();
        if(searchName){
            //搜索
            this.props.setSearchName(searchName);
        }
    }
    render () {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={input=>this.input=input}/>
                    <button onClick={this.handleSearch}>Search</button>
                </div>
            </section>
        )
    }
}

export default Search
