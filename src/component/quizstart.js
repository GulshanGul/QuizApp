import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

class Quizstart extends React.Component {
  render() {
    return (
      <div className="row">
        <h5>Mathematics Quiz | quiz id : 23GH65</h5>
        <hr />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Row>
            <Col className="top">Question 1 of 10</Col>
            <Col></Col>
            <Col className="bottom">Time lefts:28s</Col>
          </Row>
          <Row>
            <Col></Col>
            <Col xs={7}>
              <p className="para">
                <br />
                <br />
                <br />
                Question 1: The two sides of triangle are 7 m and 9 m. The two
                angle of this triangle and 37 degree <br /> and 23 degree.
                Identify the length of the 3rd side of triangle from the
                opposition below.
                <br />
                <br />
                <br />
                <br />
              </p>
            </Col>
            <Col></Col>
          </Row>
          <br />
          <br />
          <Row>
            <Col></Col>
            <Col>
              <button className="option"> A. Option1 </button>
            </Col>
            <Col></Col>
          </Row>
          <br />

          <Row>
            <Col></Col>
            <Col>
              <button className="option"> B. Option2 </button>
            </Col>
            <Col></Col>
          </Row>
          <br />

          <Row>
            <Col></Col>
            <Col>
              <button className="option"> C. Option3 </button>
            </Col>
            <Col></Col>
          </Row>
          <br />

          <Row>
            <Col></Col>
            <Col>
              <button className="option"> D. Option4 </button>
            </Col>
            <Col></Col>
          </Row>

          <br />
          <br />
          <br />

          <Row>
            <Col>
              <button className="back">
                <BsArrowLeft size={30} />
                Back to Home
              </button>
            </Col>
            <Col></Col>
            <Col>
              <button className="next">
                Next <BsArrowRight size={30} />
              </button>
            </Col>
          </Row>
          <br />
          <br />
        </Container>
      </div>
    );
  }
}

export default Quizstart;
