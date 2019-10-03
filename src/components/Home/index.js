import React, {Fragment} from 'react';

// Reactstrap
import {
  Card,
  CardText,
  CardTitle,
  Row,
  Col,
  Jumbotron,
  Container,
} from 'reactstrap';

// FontAwesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faDatabase,
  faSync,
  faWarehouse,
  faKey,
  faPaintBrush,
  faSortAmountDown,
  faFont,
  faMagic,
  faStream,
  faRunning,
} from '@fortawesome/free-solid-svg-icons';
import {faReact, faFontAwesome} from '@fortawesome/free-brands-svg-icons';

export default function Home() {
  return (
    <Fragment>
      <Jumbotron fluid>
        <Container>
          <h1 className="display-5">Sample create React app</h1>
          <p className="lead">
            This create react app is a boilerplate that aims to speed up your
            development process when using the Google Firebase tools. <br />
          </p>
          <ul>
            <li>
              You can communicate with either a Backend API or a Cloud Firestore
              database.
            </li>
            <li>
              It comes with Firebase Authentication and React-Router protected
              routes out of the box.
            </li>
            <li>
              You could either deploy this project to Firebase Hosting using the
              Firebase CLI or modify the included .travis.yml file for
              continuous deployment.
            </li>
          </ul>
        </Container>
      </Jumbotron>
      <Container>
        <Row>
          <Col sm="3">
            <Card body className="text-center">
              <CardText>
                <FontAwesomeIcon
                  icon={faReact}
                  size="2x"
                  mask={['far', 'circle']}
                />
              </CardText>
              <CardTitle>React</CardTitle>
              <a
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                More
              </a>
            </Card>
          </Col>
          <Col sm="3">
            <Card body className="text-center">
              <CardText>
                <FontAwesomeIcon icon={faMagic} size="2x" />
              </CardText>
              <CardTitle>Create React app</CardTitle>
              <a
                href="https://create-react-app.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                More
              </a>
            </Card>
          </Col>
          <Col sm="3">
            <Card body className="text-center">
              <CardText>
                <FontAwesomeIcon icon={faSortAmountDown} size="2x" />
              </CardText>
              <CardTitle>Redux</CardTitle>
              <a
                href="https://redux.js.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                More
              </a>
            </Card>
          </Col>
          <Col sm="3">
            <Card body className="text-center">
              <CardText>
                <FontAwesomeIcon icon={faWarehouse} size="2x" />
              </CardText>
              <CardTitle>Firebase Hosting</CardTitle>
              <a
                href="https://firebase.google.com/products/hosting/"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                More
              </a>
            </Card>
          </Col>
          <Col sm="3">
            <Card body className="text-center">
              <CardText>
                <FontAwesomeIcon icon={faKey} size="2x" />
              </CardText>
              <CardTitle>Firebase Auth</CardTitle>
              <a
                href="https://firebase.google.com/products/auth/"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                More
              </a>
            </Card>
          </Col>
          <Col sm="3">
            <Card body className="text-center">
              <CardText>
                <FontAwesomeIcon icon={faDatabase} size="2x" />
              </CardText>
              <CardTitle>Cloud Firestore</CardTitle>
              <a
                href="https://firebase.google.com/products/firestore/"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                More
              </a>
            </Card>
          </Col>
          <Col sm="3">
            <Card body className="text-center">
              <CardText>
                <FontAwesomeIcon icon={faRunning} size="2x" />
              </CardText>
              <CardTitle>Axios</CardTitle>
              <a
                href="https://github.com/axios/axios"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                More
              </a>
            </Card>
          </Col>
          <Col sm="3">
            <Card body className="text-center">
              <CardText>
                <FontAwesomeIcon icon={faSync} size="2x" />
              </CardText>
              <CardTitle>Travis</CardTitle>
              <a
                href="http://travis-ci.com"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                More
              </a>
            </Card>
          </Col>
          <Col sm="3">
            <Card body className="text-center">
              <CardText>
                <FontAwesomeIcon icon={faStream} size="2x" />
              </CardText>
              <CardTitle>jsonplaceholder</CardTitle>
              <a
                href="https://jsonplaceholder.typicode.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                More
              </a>
            </Card>
          </Col>
          <Col sm="3">
            <Card body className="text-center">
              <CardText>
                <FontAwesomeIcon icon={faPaintBrush} size="2x" />
              </CardText>
              <CardTitle>ReactStrap</CardTitle>
              <a
                href="https://reactstrap.github.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                More
              </a>
            </Card>
          </Col>
          <Col sm="3">
            <Card body className="text-center">
              <CardText>
                <FontAwesomeIcon icon={faFontAwesome} size="2x" />
              </CardText>
              <CardTitle>React FontAwesome</CardTitle>
              <a
                href="https://fontawesome.com/how-to-use/on-the-web/using-with/react"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                More
              </a>
            </Card>
          </Col>

          <Col sm="3">
            <Card body className="text-center">
              <CardText>
                <FontAwesomeIcon icon={faFont} size="2x" />
              </CardText>
              <CardTitle>Google Fonts</CardTitle>
              <a
                href="https://jsonplaceholder.typicode.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                More
              </a>
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
