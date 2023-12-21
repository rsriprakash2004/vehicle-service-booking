import React from 'react';
import { Link } from "react-router-dom";
import { Alert } from 'react-bootstrap';
import './AppInfo.css';

const AppInfo = () => {
  return (
    <Alert variant="success" className="c-app-info col-12">
            <p>
              This application based on{" "}
              <a
                href="https://data.gov.il/dataset/private-and-commercial-vehicles/resource/053cea08-09bc-40ec-8f7a-156f0677aff3?view_id=6e5c660c-9103-4297-a6f6-33824258da50"
                target="_blank"
                rel="noreferrer"
              >
                Israel Government Open Data
              </a>
            </p>
            <p>Use one of the following accounts to login:</p>
            <div className="accounts-list">
              <ul className="account-list">
                <li>Try first:</li>
                <li>
                  <small>email:</small>
                  <br />
                  BMW111@gmail.com
                </li>
                <li>
                  <small>password:</small>
                  <br />
                  BMW111
                </li>
              </ul>
              <ul className="account-list">
                <li>Try second:</li>
                <li>
                  <small>email:</small>
                  <br />
                  BMW222@gmail.com
                </li>
                <li>
                  <small>password:</small>
                  <br />
                  BMW222
                </li>
              </ul>
            </div>
            <p>Or <Link to="./signup-step-one">sigin</Link> with your BMW (only registered in Israel).
            </p>
          </Alert>
  );
}

export default AppInfo;
