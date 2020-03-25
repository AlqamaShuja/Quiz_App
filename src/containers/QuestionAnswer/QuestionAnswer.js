import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import "./QuestionAnswer.css";

class QuestionAnswer extends Component {
  componentDidMount() {
    this.props.initQuestion();
  }

  render() {
    const question = this.props.ques;
    const options = [];

    let showQuestion = (
      <div>
        <h3>"No More Question.!"</h3>
        <Link
          className="submit"
          to="/result" /*onClick={this.props.onShowResult}*/
        >
          Check Your Score
        </Link>
      </div>
    );
    if (this.props.length > this.props.count) {
      for (let opt in question.options) {
        options.push(opt);
      }

      showQuestion = (
        <div className="main-div">
          <form onSubmit={event => this.props.onSubmit(event, question.answer)}>
            <h2>{question.question}</h2>
            {options.map(opt => {
              return (
                <div key={question.options[opt]}>
                  <input
                    type="radio"
                    className="options"
                    id={question.options[opt]}
                    name={question.question}
                    value={this.props.value}
                    onChange={() =>
                      this.props.onChangeValue(question.options[opt])
                    }
                  />
                  <label>{question.options[opt]}</label>
                </div>
              );
            })}
            <input type="submit" className="submit" />
          </form>
        </div>
      );
    }

    return <div>{showQuestion}</div>;
  }
}

export default QuestionAnswer;
