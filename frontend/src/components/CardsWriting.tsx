import React, { Component } from 'react';
import './CardsWriting.scss';

export class CardsWriting extends Component {
  render() {
    return(
    <div className="write-display">
        <div className="progress-status">
          <h1>BMS-2020-07 - Violence</h1>

          <div className="progress">
            <div className="stats-box">
              <h3>XX Correct / xx Wrong</h3>
              <div className="stats-bar"> </div>
            </div>
            <div className="stats-box">
              <h3>XX of XXX Words Remaining</h3>
              <div className="progress-bar"> </div>
            </div>
          </div>
        </div>

        <div className="answer-box">
          <div className="answer-sub-box">
            <h3>Prompt:</h3>
            {/* TODO: Word to be answered should be displayed*/}
            <h1 className="answer">Word to be Answered</h1>
          </div>
          <hr />
          <div className="answer-sub-box">
            <div className="user-answer-box">
              <h3>Your Answer:</h3>
              {/* TODO: Name this thingy thing */}
              <input type="text" />
            </div>
            <div className="right-answer-box">
              <h3>Correct Answer:</h3>
              {/* TODO: Here the correct answer would be displayed*/}
              <h1>Correct Answer</h1>
            </div>
          </div>           
        </div>

    </div>
    )
  }
}
export default CardsWriting;