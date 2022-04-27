import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css"

const response =
    [{
        stock_name: "EFX",
        company_name: "Equifax Inc",
        price: 163.55,
        currency: "USD",
        change: "+9.03"
    }, {
        stock_name: "IRM",
        company_name: "Iron Mountain Inc",
        price: 33.21,
        currency: "USD",
        change: "+1.42"
    }, {
        stock_name: "NTAP",
        company_name: "NetApp Inc",
        price: 54.81,
        currency: "USD",
        change: "-6.01"
    }, {
        stock_name: "CTL",
        company_name: "Centurylink Inc",
        price: 13.79,
        currency: "USD",
        change: "-1.37"
    }]

export class Table extends React.Component {
    table = response.map((item) => {
        return (
            <tr>
                <td>{item.stock_name}</td>
                <td>{item.company_name}</td>
                <td>{item.price}</td>
                <td>{item.currency}</td>
                <td style = {
                    {
                       background: Number(item.change) > 0 ? "green" : "red"
                    }
                }
                >{item.change}</td>
            </tr>
        );
    });

    render() {
        return this.table;
    }
}

const salmon = React.createElement("td", {className:"salmony"});
const brown = React.createElement("td", {className:"browny"});

const row1 = <tr><th>1</th>{salmon}{brown}{salmon}{brown}{salmon}{brown}{salmon}{brown}<th>1</th></tr>;
const row2 = <tr><th>2</th>{brown}{salmon}{brown}{salmon}{brown}{salmon}{brown}{salmon}<th>2</th></tr>;
const row3 = <tr><th>3</th>{salmon}{brown}{salmon}{brown}{salmon}{brown}{salmon}{brown}<th>3</th></tr>;
const row4 = <tr><th>4</th>{brown}{salmon}{brown}{salmon}{brown}{salmon}{brown}{salmon}<th>4</th></tr>;
const row5 = <tr><th>5</th>{salmon}{brown}{salmon}{brown}{salmon}{brown}{salmon}{brown}<th>5</th></tr>;
const row6 = <tr><th>6</th>{brown}{salmon}{brown}{salmon}{brown}{salmon}{brown}{salmon}<th>6</th></tr>;
const row7 = <tr><th>7</th>{salmon}{brown}{salmon}{brown}{salmon}{brown}{salmon}{brown}<th>7</th></tr>;
const row8 = <tr><th>8</th>{brown}{salmon}{brown}{salmon}{brown}{salmon}{brown}{salmon}<th>8</th></tr>;

export class Table1 extends React.Component{
    render(){
        return (
            <table className={"table1"}>
                <th> </th>
                <th>a</th>
                <th>b</th>
                <th>c</th>
                <th>d</th>
                <th>e</th>
                <th>f</th>
                <th>g</th>
                <th>h</th>
                {row1}
                {row2}
                {row3}
                {row4}
                {row5}
                {row6}
                {row7}
                {row8}
                <th> </th>
                <th>a</th>
                <th>b</th>
                <th>c</th>
                <th>d</th>
                <th>e</th>
                <th>f</th>
                <th>g</th>
                <th>h</th>
            </table>
        );
    };
}

ReactDOM.render(<h1>Hello, world!</h1>,document.querySelector('#root'));
ReactDOM.render(<h3>{new Date(Date.now()).toString()}</h3>,document.querySelector('#root2'));
ReactDOM.render(<Table />,document.querySelector('#root3'));
ReactDOM.render(<Table1 />,document.querySelector('#root4'));


