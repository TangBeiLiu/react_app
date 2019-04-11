import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'


class Main extends Component {
    static propTypes = {
        searchName: PropTypes.string.isRequired
    }
    state = {
        initView: true,
        loading: false,
        users: null,
        errorMsg: null
    }
    //当组件接收到新的属性时进行回调
    componentWillReceiveProps(newProps) {//指定新的searchName,需要发请求
        const {searchName} = newProps;
        //更新状态
        this.setState({
            initView:false,
            loading:true
        })
        //发请求
        const url = `https://api.github.com/search/users?q=${searchName}`;
        axios.get(url)
            .then(response => {
                //得到数据
                const result = response.data;
                const users = result.items.map(item=> {
                    return {name:item.login,url:item.html_url,avatarUrl:item.avatar_url}//注意
                })
                //更新状态
                this.setState({
                    loading:false,
                    users
                })
            })
            .catch(error => {
                //更新状态
                this.setState({
                    loading:false,
                    errorMsg:error.message
                })
            })
    }
    render () {
        const {initView,loading,users,errorMsg} = this.state;
        const {searchName} = this.props;

        if(initView){
            return <h2>请输入关键词进行搜索:{searchName}</h2>
        }else if(loading){
            return <h2>正在请求</h2>
        }else if(errorMsg){
            return <h2>{errorMsg}</h2>
        }else {
            return (
                <div className="row">
                    {
                        users.map((user,index)=>(
                            <div className="card" key={index}>
                                <a href={user.url} target="_blank">
                                    <img src={user.avatarUrl} style={{width: 100}}/>
                                </a>
                                <p className="card-text">{user.name}</p>
                            </div>
                        ))
                    }
                </div>
            )
        }
    }
}

export default Main
