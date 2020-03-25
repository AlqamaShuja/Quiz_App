import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navigation from "../NavigationBar/Navigation";
import QuestionAnswer from "../../containers/QuestionAnswer/QuestionAnswer";
import Aux from "../../hoc/Auxi";
import Result from "../Result/Result";
import questions from "../../store/Questions";
import {
  nextQuestion,
  showResult,
  initQuestion
} from "../../store/actions/index";
import { connect } from "react-redux";

class MainComponent extends Component {
  state = {
    // ques: questions,
    // count: 0,
    score: 0,
    value: ""
  };

  onSubmit = (event, ans) => {
    event.preventDefault();
    let score = 0;
    if (this.state.value === ans) {
      score = 1;
    }
    this.props.onChangeQuestion(score);
  };

  onChangeValue = val => {
    this.setState({
      value: val
    });
  };

  // changeCount = () => {
  //   this.setState({
  //     count: 0
  //   });
  // };

  render() {
    return (
      <BrowserRouter>
        <Aux>
          <Navigation />
          <h1>Quiz</h1>
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <QuestionAnswer
                  ques={this.props.ques}
                  value={this.state.value}
                  count={this.props.count}
                  length={this.props.length}
                  onSubmit={this.onSubmit}
                  onChangeValue={this.onChangeValue}
                  // onShowResult={this.props.onShowResult}
                  initQuestion={this.props.initQuestion}
                />
              )}
            />
            <Route path="/result" render={() => <Result />} />
          </Switch>
        </Aux>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = state => {
  return {
    ques: state.quesChange.ques,
    count: state.quesChange.count,
    length: state.quesChange.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onChangeQuestion: score => dispatch(nextQuestion(score)),
    initQuestion: () => dispatch(initQuestion())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);
