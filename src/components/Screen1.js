import React from "react";
import { addTableData, getTableData } from "../Reducer/action";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  cities: state.cities,
});

class Screen1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      tableName: "",
      columnName: "",
      distinctValue: "",
    };
  }

  static propTypes = {
    cities: PropTypes.array.isRequired,
    getTableData: PropTypes.func.isRequired,
    addTableData: PropTypes.func.isRequired,
  };
  componentDidMount() {
    this.props.getTableData();
  }
  handleNameChange = (e) => {
    this.setState({
      tableName: e.target.value,
    });
  };
  handleDistinctValueChange = (e) => {
    this.setState({
      distinctValue: e.target.value,
    });
  };
  handleDepartmentChange = (e) => {
    this.setState({
      columnName: e.target.value,
    });
  };
  submitData = () => {
    if (
      this.state.tableName &&
      this.state.columnName &&
      this.state.distinctValue &&
      !this.state.id
    ) {
      const newData = {
        id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
        tableName: this.state.tableName,
        columnName: this.state.columnName,
        distinctValue: this.state.distinctValue,
      };

      this.props.addTableData(newData);
      alert("New Table add check in Screen2");
    } else {
      alert("Enter Table Details.");
    }
  };

  render() {
    return (
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div style={{textAlign:"center"}}>
          <input
            onChange={this.handleNameChange}
            value={this.state.tableName}
            type="text"
            placeholder="Table Name"
            style={{padding:"20px"}}
          />
          <br />
          <input
            onChange={this.handleDistinctValueChange}
            value={this.state.distinctValue}
            type="text"
            placeholder="Unique Column"
            style={{padding:"20px"}}
          />
          <br />
          <input
            onChange={this.handleDepartmentChange}
            value={this.state.columnName}
            type="text"
            placeholder="Column Name"
            style={{padding:"20px"}}
          />
          <br />
          <button onClick={this.submitData} className="btn">Manual Update</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  addTableData,
  getTableData,
})(Screen1);
