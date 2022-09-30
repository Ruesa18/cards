import { faFileText, faUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Component } from 'react';

export class CourseBox extends Component<{id: string, name: string, languageA: string, languageB: string, creator: string}, {}> {

    render() {
        return(
            <div className="courseBox">
                <div className="information">
                    <div className="bubble">
                        <FontAwesomeIcon className="information-icon" icon={faFileText}/>
                    </div>
                    <div className="bubble">
                        <FontAwesomeIcon className="information-icon" icon={faUser}/>
                    </div>
                </div>
                <h2> {this.props.name} </h2>
                <h3> 137 Begriffe</h3>
                <br />
                <h4> Created on: dd.mm.yyyy</h4>
                <h4> Updated on: dd.mm.yyyy</h4>
            </div>
        );
    }
}
