import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHandSpock} from '@fortawesome/free-regular-svg-icons/faHandSpock';
import {faBookmark} from '@fortawesome/free-regular-svg-icons/faBookmark'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>

      <body>
        <div className="wrapper">
          <div className="Navigation">
            <nav>
              <FontAwesomeIcon className="sub-wrapper" icon={faHandSpock}/>
              
              <ul className="sub-wrapper">
                <li> 
                  <FontAwesomeIcon icon={faBookmark}/>
                  <a href="#">Courses</a> 
                </li>
              </ul>

            </nav>
          </div>

          <div className="content">
            <App />
          </div>
        </div>

      </body>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
