import React from "react";
// import { Container, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai";
import "../css/simple.css";

class Science extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
    };
  }

  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };
  render() {
    return (
      <div className="scie">
        <br />

        <h5>Mathematics Quiz | quiz id : 23GH65</h5>
        <hr />
        <br />
        <Button variant="primary" onClick={this.handleShow}>
          Launch demo modal
        </Button>
        <Container>
          <Row>
            <br />
            <Col></Col>
            <Col>
              <br />
              <div className="div1">
                <div className="pic">
                  <h1 className="photo">M</h1>
                </div>
                <br />

                <h3 className="h5">Mathematics Quiz</h3>
                <p className="id">quiz id 12ertq1</p>
              </div>
              <br />
            </Col>

            <Col></Col>
          </Row>

          <Row>
            <Col></Col>
            <Col xs={6}>
              <br />
              <div className="content">
                <h2 className="ins">Instructions</h2>

                <p className="para">
                  1. There will be 10 question in this quiz.
                  <br />
                  2. For each question you will get 40 seconds to answer the
                  question.
                  <br />
                  3. Answer as quickly as possible to score higher.
                  <br />
                  4. Example : if time left for question is 30 seconds you will
                  score higher then if time left for question is 10 sec.
                  <br />
                  5. You cannot pass the question. Answer all question <br />
                  6. When time gets over you will be automatically directed to
                  next question <br />
                </p>
              </div>
            </Col>
            <Col></Col>
          </Row>
          <br />
          <br />
        </Container>

        <div>
          <Row md={4}>
            <Col>
              <button className="btnn"> <AiOutlineArrowLeft size={20} /> Back to home</button>
            </Col>
            <Col></Col>
            <Col>
              <Button
                variant="warning"
                className="btn"
                onClick={this.handleShow}
              >
                use 20 coins to start the quiz <AiOutlineArrowRight size={20} />
              </Button>{" "}
            </Col>
          </Row>
          <br />
          <br />
          <br />
          <br />
        </div>
        <div className="par">
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col></Col>
                <Col xs={7}>
                  <p>
                    <br />
                    <b>
                      {" "}
                      20 coins deducted from your Wallet <br /> Updated Coin
                      Balance : 219 coins
                      <br />
                      <br />
                      Starting Quiz.....
                    </b>
                  </p>
                </Col>
                <Col></Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Science;
