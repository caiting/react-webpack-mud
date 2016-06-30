/**
 * Created by tt on 16/5/25.
 */
import React from 'react';
import ReactDOM from 'react-dom';

var HarryStyle =require('./harry-react1.css');
var Title = React.createClass({
    getInitialState: function () {
        return {
            class: true
        }
    },
    haddleClick: function (event) {
        this.setState({class: !this.state.class})
    },
    render: function () {
        var text = this.state.class ? 'hide' : 'show';
        return (
            <div className='clearfix'>
                <div className='left'>
                    <h2>实例文档</h2>
                </div>
                <div className='right relative' onClick={this.haddleClick}>
                    <img src="img/head.png" alt=""/>

                    <div className={text}>
                        <ul className='user'>
                            <li><a href="">用户中心</a></li>
                            <li><a href="">退出</a></li>
                        </ul>
                    </div>

                </div>
            </div>

        );
    }
});
ReactDOM.render(
    <Title />,
    document.getElementById('title')
);

