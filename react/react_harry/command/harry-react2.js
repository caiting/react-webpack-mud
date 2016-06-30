/**
 * Created by tt on 16/6/2.
 */
import React from 'react';
import ReactDOM from 'react-dom';

var HarryStyle =require('./harry-react1.css');
var date = [
    {
        "title": "新浪微博",
        "content": "诞生于1991年，性格开朗，毛病不少"
    },
    {
        "title": "QQ微博",
        "content": "诞生于1991年，性格开朗，毛病不少"
    }
];
var Square = React.createClass({
    render: function () {
        return (
            <ul className="block">
                {
                    date.map(function (val,i) {
                        return (
                            <li key={i}>
                                <a href="./harry-react1.html">
                                    <h2>{val.title}</h2>
                                    <div>{val.content}</div>
                                </a>
                            </li>
                        )

                    })
                }
            </ul>)
    }
});
var List = React.createClass({
    render: function () {
        return (<Square />);
    }
});
ReactDOM.render(
    <List />,
    document.getElementById('square')
)