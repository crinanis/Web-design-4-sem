import React from "react";

export class StudentInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      FIO: "Kiselov Andrey Viktorovich",
      birthDate: "21.08.2003",
      uniYear: "2020",
      faculty: "IT",
      group: "5",
      speciality: "POIT",
      email: "kiselov.andrey@gmail.com",
      phoneNumber: "+375292736457",
    };
  }
  render() {
      return(
          this.props.render(this.state)
      )
  }
}
