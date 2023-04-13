import React from "react";
import { editTableData, getTableData } from "../Reducer/action";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  cities: state.cities,
});

class Screen2 extends React.Component {
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
    editTableData: PropTypes.func.isRequired,
  };
  editDetails = (data) => {
    this.setState({
      id: data.id,
      tableName: data.tableName,
      columnName: data.columnName,
      distinctValue: data.distinctValue,
    });
  };
  handleEditDistinctValueChange = (e) => {
    this.setState({
      distinctValue: e.target.value,
    });
  };
  submitData = () => {
    if (
      this.state.tableName &&
      this.state.columnName &&
      this.state.distinctValue &&
      this.state.id
    ) {
      const updatedDetails = {
        id: this.state.id,
        tableName: this.state.tableName,
        columnName: this.state.columnName,
        distinctValue: this.state.distinctValue,
      };
      console.log(updatedDetails);
      this.props.editTableData(updatedDetails);
    } else {
      alert("Enter table Details.");
    }
  };
  render() {
    return (
      <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div style={{textAlign:"center"}}>
          <table>
            <thead>
              <tr>
                <th>Table Name</th>
                <th>Column Name</th>
                <th>Distinct Value</th>
                <th>User Input</th>
              </tr>
            </thead>
            <tbody>
              {this.props.cities &&
                this.props.cities.map((data, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{data.tableName}</td>
                      <td>{data.columnName}</td>
                      <td>{data.distinctValue}</td>
                      <td>
                        <input
                          onClick={() => this.editDetails(data)}
                          onChange={this.handleEditDistinctValueChange}
                          type="text"
                        />
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <button onClick={this.submitData} className="btn">UPDATE</button>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  getTableData,
  editTableData,
})(Screen2);
