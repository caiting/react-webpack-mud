/**
 * Created by tt on 16/5/30.
 */

import React from 'react';
import ReactDOM from 'react-dom';

var HarryStyle =require('./harry-react1.css');
var Table = React.createClass({
    render: function () {
        var repos = this.props.parameter;
        var head = this.props.header;
        var header = head.map(function (head,i) {
            return (
                <th key={i}>{head.title}</th>
            )
        });
        var repoList = repos.map(function (repo, index) {
            return (
                <tr key={index}>
                {
                    head.map(function (val, i) {
                        return (<td  key={i}>{repo[val.field]}</td>);
                    })
                }
                </tr>);
        });


        return (
            <table className='table table-bordered table-hover'>
                <thead>
                <tr>
                    {header}
                </tr>
                </thead>
                <tbody>
                    {repoList}
                </tbody>
            </table>
        )
    }
});

var MainRight = React.createClass({
    getInitialState: function () {
        return {
            username: '',
            lastGistUrl: '',
            way: '',
            parameterName: [],
            parameter: [],
            returnParameterName: [],
            returnParameter: []
        }
    },
    componentDidMount: function () {
        $.get(this.props.source, function (result) {
            var lastGist = result[0];
            if (this.isMounted()) {
                this.setState({
                    username: lastGist.depri,
                    lastGistUrl: lastGist.UPL,
                    way: lastGist.way,
                    parameterName: lastGist.parameterName,
                    parameter: lastGist.parameter,
                    returnParameterName: lastGist.returnParameterName,
                    returnParameter: lastGist.returnParameter
                });
            }
        }.bind(this));

    },
    render: function () {
        return (
            <div className='describe'>
                <h3>简要描述：</h3>

                <div>{this.state.username}</div>
                <h3>请求UPL:</h3>

                <div>{this.state.lastGistUrl}</div>
                <h3>请求方式：</h3>

                <div>{this.state.way}</div>
                <h3>参数：</h3>

                <div>
                    <Table parameter={this.state.parameter} header={this.state.parameterName}/>
                </div>
                <h3>返回参数说明</h3>

                <div>
                    <Table parameter={this.state.returnParameter} header={this.state.returnParameterName}/>
                </div>
            </div>

        )
    }
});
ReactDOM.render(
    <MainRight source={'react.json'}/>,
    document.getElementById('main-right')
);