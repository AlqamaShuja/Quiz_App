import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./Result.css";

class Result extends Component {
  render() {
    return (
      <div>
        <h4 className="score"> Your Score is: {this.props.res}</h4>
        <Link to="/" className="submit">
          Go to Home
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    res: state.quesChange.score
  };
};

export default connect(mapStateToProps)(Result);
