/**
 * Created by tt on 16/6/12.
 */
import React from 'react';
import ReactDOM from 'react-dom';

var HarryStyle =require('./harry-react1.css');
var arr = [
    {
        "title": "序言"
    },
    {
        "title": "接口实例",
        "files": ["用户注册", "用户登陆", "省份数据", "城市数据"]
    },
    {
        "title": "数据字典实例",
        "files": ["user", "name", "item"]
    }

];

var Li = React.createClass({
    getInitialState: function () {
        return {
            index: -1
        }
    },
    hideOther: function (index) {
        this.setState({index: index});
    },
    render: function () {
        return (
            <ul className='nav-left'>
                {
                    arr.map(function (val, i) {
                        return (
                            <LiO key={i} val={val} opens={(this.state.index==i)} hideOther={this.hideOther} isOpen={!!val.files} index={i}/>
                        )
                    }.bind(this))
                }
            </ul>
        )
    }
});


var LiO = React.createClass({
    getInitialState: function () {
        return {
            class: true
        }
    },
    haddleClick: function (event) {
        this.setState({class: !this.state.class});
        this.props.hideOther(this.props.opens ? -1 : this.props.index);
    },
    render: function () {
        var clas = this.state.class ? 'open' : 'close';
        var val = this.props.val;
        return (
            <li>
                <a onClick={this.haddleClick} href="javascript:;" className={this.props.isOpen?clas:''}>{val.title}</a>
                <Ul list={val.files} open={this.props.opens}/>
            </li>
        )
    }
});

var Ul = React.createClass({
    render: function () {
        var files = this.props.list;
        var list = [];
        if (files instanceof Array) {
            list = files.map(function (name,i) {
                return <li key={i}><a href="javascript:;">{name}</a></li>
            })
        }
        return (
            <ul className={this.props.open?'show':'hide'}>
                {
                    list
                }

            </ul>
        )
    }
});

ReactDOM.render(
    <Li />,
    document.getElementById('main-left')
);