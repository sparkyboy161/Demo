import React, { Component } from "react";
// import Select from "react-select";
import { Dropdown } from "semantic-ui-react";

export default class Dropdowns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      options: [
        { key: 1, text: "IPsoft", value: "IPsoft" },
        { key: 2, text: "Google", value: "Google" },
        { key: 3, text: "Mozilla", value: "Mozilla" },
        { key: 4, text: "Safari", value: "Safari" }
      ]
    };
  }
  handleChange = (e, data) => {
    let v = data.value;
    console.log("handleChange", v);
    this.setState({ value: v });
    this.props.onChange(v);
  };

  onDelete = () => {
    let { onDelete } = this.props;
    onDelete();
  };

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(
  //     "previous box",
  //     prevProps.inputLabel,
  //     "this box",
  //     this.props.inputLabel
  //   );
  //   console.log(
  //     "previous box:State",
  //     prevState.value,
  //     "this box:State",
  //     this.state.value
  //   );
  //   if (prevProps.inputLabel !== this.props.inputLabel) {
  //     this.setState({
  //       value: this.props.inputLabel
  //     });
  //   }
  //   if (prevState.value !== this.state.value) {
  //     this.setState({
  //       value: this.props.inputLabel
  //     });
  //   }
  // }

  render() {
    console.log("annotator", this.props);
    return (
      // <Dropdown
      //   text="Dropdown"
      //   onChange={this.handleChange}
      //   options={this.state.options}
      //   value={this.state.value}
      //   // options={this.state.options}
      //   // simple
      //   // item
      // />

      <div style={{ display: "flex", flex: "1" }}>
        <Dropdown
          placeholder="Select"
          fluid
          selection
          value={this.props.inputLabel}
          onChange={this.handleChange}
          options={this.state.options}
        />

        <div
          className="col col-md-4"
          style={{
            float: "right",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "35px",
            color: "white",
            fontSize: "12px",
            backgroundColor: "#3b5bdb",
            borderRadius: "0 5px 5px 0",
            cursor: "pointer",
            transition: "backgroundColor 0.5s, color 0.5s;"
          }}
        >
          <i class="far fa-trash-alt" onClick={this.onDelete} />
        </div>
      </div>
    );
  }
}
