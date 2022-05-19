import React from "react";
import PropTypes from "prop-types";
import { SignUpEmailInput } from "./SignUpEmailInput";
import { SignUpPasswordInput } from "./SignUpPasswordInput";
import { PhoneInput } from "./PhoneInput.js";

export class SignUpForm extends React.Component {
  state = {
    disableBtn: false,
  };

  disableBtn = (value) => {
    this.setState({ disableBtn: value });
    return this.state.disableBtn;
  };

  day() {
    let days = [];
    for (let day = 1; day < 32; day++) {
      days.push(<option key={day} >{day}</option>);
    }
    return <select>{days}</select>;
  }

  months = [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь", ];

  month() {
    return (
      <select>
        {this.months.map((month) => {
          return <option key={month}>{month}</option>;
        })}
      </select>
    );
  }

  year() {
    let years = [];
    for (let year = 1960; year < 2021; year++) {
      years.push(<option key={year}>{year}</option>);
    }
    return <select>{years}</select>;
  }

  str = 324;
  num = Number('111');
  sym = Symbol('111');


  render() {
    return (
      <form className="form">
          <h1>Registration: </h1>
        <SignUpEmailInput
          disableBtn={this.disableBtn}
          disabledBtn={this.state.disableBtn}
          months={this.months}
          parentState={this.state}
          str={this.str}
          num={this.num}
          sym={this.sym}
        />
        <SignUpPasswordInput disableBtn={this.disableBtn} />

          <input type="text" placeholder="Surname" />
          <input name="name" type="text" placeholder="Name" />
          <input type="text" placeholder="Patronymic" />

          <h3>Choose gender: </h3>
          <div className = "radios">
              Male
              <input className="radi" type="radio" name="gender" value="male" />
          </div>

          <div className = "radios">
              Female
              <input className="radi" type="radio" name="gender" value="male" />
          </div>

        <div className="date">
          {this.day()}
          {this.month()}
          {this.year()}
        </div>

        <PhoneInput />

        <button className = "send" disabled={this.state.disableBtn} onClick={this.handleBtnClick}>
          Send
        </button>
      </form>
    );
  }

    handleBtnClick() {
        alert("Sent successfully!")
    }
}

SignUpEmailInput.propTypes = {
  disableBtn: PropTypes.func,
  disabledBtn: PropTypes.bool,
  months: PropTypes.array,
  parentState: PropTypes.object,
  str: PropTypes.string,
  num: PropTypes.number,
  sym: PropTypes.symbol
};

SignUpPasswordInput.propTypes = {
    disabledBtn: PropTypes.bool,
}
