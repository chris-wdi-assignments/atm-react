import React, { Component } from 'react';

export default class Account extends Component {
  constructor (props) {
    super(props);
    this.state = {balance: 0};
  }
  handleDepositClick (e) {
    const amount = +this.inputBox.value;
    const newBalance = this.state.balance + amount;
    this.setState({ balance: newBalance });
    this.inputBox.value = '';
  }
  handleWithdrawClick (e) {
    const amount = +this.inputBox.value;
    const newBalance = this.state.balance >= amount
      ? this.state.balance - amount
      : this.state.balance;
    this.setState({ balance: newBalance });
    this.inputBox.value = '';
    let balanceClass = this.state.balance === 0
      ? 'balance'
      : 'balance zero';
  }
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={this.balanceClass}>${this.state.balance}</div>
        <input type="text" ref={(input) => this.inputBox = input} placeholder="enter an amount" />
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)} />
        <input type="button" value="Withdraw" onClick={(e) => this.handleWithdrawClick(e)} />
      </div>
    )
  }
}
