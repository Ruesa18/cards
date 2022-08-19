import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFileText} from '@fortawesome/free-regular-svg-icons/faFileText';
import {faUser} from '@fortawesome/free-regular-svg-icons/faUser';
import './Courses.scss';

export class Courses extends Component {
  render() {
    return(
    <div>
       <h1> Courses </h1>

        <div className="grid">

        <div className="courseBox">
            <div className="information">
            <div className="bubble">
                <FontAwesomeIcon className="information-icon" icon={faFileText}/>
            </div>
            <div className="bubble">
                <FontAwesomeIcon className="information-icon" icon={faUser}/>
            </div>
            </div>
            <h2> Franz Voc: Violonce </h2>
            <h3> 137 Begriffe</h3>
            <br />
            <h4> Created on: dd.mm.yyyy</h4>
            <h4> Updated on: dd.mm.yyyy</h4>
        </div>

        <div className="courseBox">
            <div className="information">
            <div className="bubble">
                <FontAwesomeIcon className="information-icon" icon={faFileText}/>
            </div>
            <div className="bubble">
                <FontAwesomeIcon className="information-icon" icon={faUser}/>
            </div>
            </div>
            <h2> Franz Voc: Violonce </h2>
            <h3> 137 Begriffe</h3>
            <br />
            <h4> Created on: dd.mm.yyyy</h4>
            <h4> Updated on: dd.mm.yyyy</h4>
        </div>

        <div className="courseBox">
            <div className="information">
            <div className="bubble">
                <FontAwesomeIcon className="information-icon" icon={faFileText}/>
            </div>
            <div className="bubble">
                <FontAwesomeIcon className="information-icon" icon={faUser}/>
            </div>
            </div>
            <h2> Franz Voc: Violonce </h2>
            <h3> 137 Begriffe</h3>
            <br />
            <h4> Created on: dd.mm.yyyy</h4>
            <h4> Updated on: dd.mm.yyyy</h4>
        </div>

        <div className="courseBox">
            <div className="information">
            <div className="bubble">
                <FontAwesomeIcon className="information-icon" icon={faFileText}/>
            </div>
            <div className="bubble">
                <FontAwesomeIcon className="information-icon" icon={faUser}/>
            </div>
            </div>
            <h2> Franz Voc: Violonce </h2>
            <h3> 137 Begriffe</h3>
            <br />
            <h4> Created on: dd.mm.yyyy</h4>
            <h4> Updated on: dd.mm.yyyy</h4>
        </div>
        </div>
    </div>
    )
  }
}
export default Courses;