import { Component } from "react";
import "./phone.css";

export class Phone extends Component {
  state = {
    number: "",
    showTheList: false,
    value: "Беларусь",
    img: "/image/bel.jpg",
    mask: "XXXX (XX) XXX-XX-XX",
    oper: "",
    count: 13,
  };

  inputs = [
    {
      value: "Беларусь",
      code: "+375",
      img: "/image/bel.jpg",
      mask: "XXXX (XX) XXX-XX-XX",
      count: 13,
    },
    {
      value: "Россия",
      code: "+7",
      img: "/image/rus.jpg",
      mask: "XX (XXX) XXX-XX-XX",
      count: 12,
    },
    {
      value: "Украина",
      code: "+380",
      img: "/image/uk.jpg",
      mask: "XXXX (XXX) XXX-XX-XX",
      count: 13,
    },
    {
      value: "Польша",
      code: "+48",
      img: "/image/poland.png",
      mask: "XXX XXX-XXX-XXX",
      count: 12,
    },
    {
      value: "Литва",
      code: "+370",
      img: "/image/lith.png",
      mask: "XXXX (XX) XXX-XX-XX",
      count: 13,
    },
    {
      value: "Латвия",
      code: "+371",
      img: "/image/latvia.png",
      mask: "XXXX XXXX-XXXX",
      count: 12,
    },
  ];

  theList() {
    return (
      <ul>
        {this.inputs.map((item) => {
          return (
            <li
              onClick={() =>
                this.setState({
                  number: item.code,
                  showTheList: false,
                  img: item.img,
                  mask: item.mask,
                  count: item.count,
                })
              }
              key={item.value}
            >
              <img
                src={item.img}
                alt=""
              />
              <label>
                <input type="radio" name="country" value={item.value} />
                {item.value}
                {" "}
                {item.code}
              </label>
            </li>
          );
        })}
      </ul>
    );
  }

  numberField() {
    return (
      <>
        <label>
          <img
            src={this.state.img}
            style={{
              height: "15px",
              width: "30px",
            }}
            alt = ""
          />
          <input
            onClick={() =>
              this.setState({ showTheList: !this.state.showTheList })
            }
            id = "number"
            type = "tel"
            name = "myPhone"
            placeholder= "+375 (33) 333-33-33"
            value = {this.state.number}
            onChange = {this.handleNumberChange}
            maxLength = {this.state.count}
          />
          <input
              id = "pik"
              placeholder="operator"
              value = {this.state.oper}
              onChange = {this.handleNumberChange}
          />
        </label>
      </>
    );
  }

  handleNumberChange = (e) => {
    this.setState(
      {
        number: e.target.value,
      },
      () => {
        this.inputs.map((item) => {
          if (this.state.number === item.code) {
            this.setState({
              value: item.value,
              img: item.img,
              mask: item.mask,
              count: item.count,
            });
          }
        });
        if (this.state.count === this.state.number.length) {
          let maskArr = this.state.mask.split(""),
            numberArr = this.state.number.split("");
          for (let i = 0, j = 0; i < maskArr.length; i++)
            if (maskArr[i] === "X") {
              maskArr[i] = numberArr[j];
              j++;
            }
          let number = maskArr.join("");
          this.setState({ number: number });
          this.setState({oper:"Undefined"});
        }
        //
        if (this.state.count === this.state.number.length) {
          let maskArr = this.state.mask.split(""),
              numberArr = this.state.number.split("");
          let opp = "";
          for (let i = 0, j = 0; i < maskArr.length; i++, j++) {
            if ((maskArr[i] === "(") && (maskArr[i+3]===")") ) {
              maskArr[i+1] = numberArr[j-1];
              maskArr[i+2] = numberArr[j];
              opp = maskArr[i+1]+maskArr[i+2];
              switch(opp){
                case "29": this.setState({oper:"MTC"});break;
                case "33": this.setState({oper:"MTC"});break;
                case "44": this.setState({oper:"A1"});break;
                case "25": this.setState({oper:"life:)"});break;
                default: this.setState({oper:"Undefined"});break;
              }
            }
            if ((maskArr[i] === "(") && (maskArr[i+4]===")") ) {
              maskArr[i+1] = numberArr[j-1];
              maskArr[i+2] = numberArr[j];
              maskArr[i+3] = numberArr[j+1];
              opp = maskArr[i+1]+maskArr[i+2]+maskArr[i+3];
              switch(opp){
                case "910": this.setState({oper:"MTC"});break;
                case "920": this.setState({oper:"Мегафон"});break;
                case "067": this.setState({oper:"Кieвстар"});break;
                case "902": this.setState({oper:"Билайн"});break;
                case "050": this.setState({oper:"Vodafone"});break;
                case "063": this.setState({oper:"Lifecell"});break;
                default: this.setState({oper:"Undefined"});break;
              }
            }
          }
        }
      }
    );
  };

  render() {
    return (
      <>
        {this.numberField()}
        {this.state.showTheList ? this.theList() : null}
      </>
    );
  }
}
