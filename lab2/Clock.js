import { Component } from "react";

export class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({         //обновляет внутреннее состояние компонента
      date: new Date(),
    });
  }

  minutesAndHours() {
    let minutes, diffHours = 0;

    if (this.props.timezone) {
      minutes = this.state.date.getUTCMinutes();  //число от 0 до 59
      let timezone = this.props.timezone.replace(/[^0-9\.-]+/g, "");  //возвращает новую строку с некоторыми или всеми сопоставлениями с шаблоном, заменёнными на заменитель.
      timezone = timezone % 100;
      minutes += timezone;
      if (minutes >= 60) {
        minutes -= 60;
        diffHours = 1;
      }
      if (minutes < 0) {
        minutes += 60;
        diffHours = -1;
      }
    } else {
      minutes = this.state.date.getMinutes();
    }
    minutes = minutes < 10 ? "0" + minutes : minutes;

    let hours;
    if (this.props.timezone) {
      hours = this.state.date.getUTCHours();
      let timezone = parseInt(this.props.timezone, 10);
      hours += timezone;
    } else {
      hours = this.state.date.getHours();
    }

    let format;
    if (this.props.format) {
      format = this.props.format;
    } else {
      format = "24";
    }
    if (format === "12") {
      hours %= 12;
      hours = hours ? hours : 12;
    }
    hours += diffHours;
    hours = hours < 10 ? "0" + hours : hours;
    return `${hours}:${minutes}`;
  }

  seconds() {
    let seconds = this.state.date.getSeconds();
    seconds = seconds < 10 ? "0" + seconds : seconds;
    return seconds;
  }
  render() {
    return (
      <>
        <h2>
          Сейчас {this.minutesAndHours()}:{this.seconds()}
        </h2>
      </>
    );
  }
}
