import React from "react";
export class Search extends React.Component {
  onChange = (e) => {
    this.setState(() => this.props.search(e.target.value));
  };

  onClick = (target) => {
    this.setState(() => this.props.searchParameter(target));
  };

  render() {
    return (
      <div className="search">

          <h2>Search: </h2>
        <input type="search" placeholder="Search..." onChange={this.onChange} />

        <label className="radios">
            Partial match
          <input className="radiooo"
            type="radio"
            id="partial"
            name="search"
            defaultChecked
            onClick={this.onClick.bind(this, "partial")}
          />
        </label>

        <label className="radios">
            Full match
          <input
              className="radiooo"
            type="radio"
            id="full"
            name="search"
            onClick={this.onClick.bind(this, "full")}
          />
        </label>
      </div>
    );
  }
}
