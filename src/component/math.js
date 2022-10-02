import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "../css/simple.css";

class Math extends React.Component{
    render(){
        return(
            <div className="row">
            <h4 className="hh">Active Quizzes</h4>
            <hr className="line" />

<br />
<br />
{/* <br />
<br />
<br />
<br />
<br />
<br /> */}
        <Container>
        <Row>
          <Col>
          <div className="div1">
          {/* <img src={require("../images/n.png")} alt="" height={60} width={60} /> */}
          <h1 className="photo" >M</h1>
          <br />
        
            <h3 className="h5">Mathematics Quiz</h3>
            <p className="id">quiz id 12ertq1</p>
          </div>
          </Col>
          <Col> <div className="div1">
            <div className="pic">

            <h1 className="photo" >P</h1>
            </div>
          {/* <img src={require("../images/t.png")} alt="" height={60} width={60} className="photo" /> */}
          <br />
        
            <h3 className="h5">Physics Quiz</h3>
            <p className="id">quiz id 189Kltq1</p>
          </div>
          </Col>
          <Col>
          <div className="div1">
          <div className="pic">

            <h1 className="photo" >M</h1>
            </div>
          <br />
        
            <h3 className="h5">Mathematics Quiz</h3>
            <p className="id">quiz id 12ertq1</p>
          </div>
          </Col>
          <Col>
          <div className="div1">
          <div className="pic">

            <h1 className="photo" >G</h1>
            </div>
          <br />
        
            <h3 className="h5">Geography Quiz</h3>
            <p className="id">quiz id PYT652</p>
          </div>
          </Col>
        </Row>
<br />
<br />
        <div>
          <h5>Completed Quizzes</h5>
          <hr />
        
          <h5>10 DEC 2020</h5>
          <br />
        <Row className="white">
          <Col className="whitee">
          <h4 className="h5">General Knowledge Quiz</h4>
          </Col>
          <Col className="whitee"><h4 className="h5">Rank 1321</h4></Col>
          <Col className="whitee"><h4 className="h5">Won USD 10</h4></Col>
        </Row>
        <br />
        <Row className="white">
          <Col className="whitee">
          <h4 className="h5">Geography Quiz</h4>
          </Col>
          <Col className="whitee"><h4 className="h5">Rank 119</h4></Col>
          <Col className="whitee"><h4 className="h5">Won USD 10</h4></Col>
        </Row>
        <br />
        <h5>02 DEC 2020</h5>
      
        <Row className="white">
          <Col className="whitee">
          <h4 className="h5">Science Quiz</h4>
          </Col>
          <Col className="whitee"><h4 className="h5">Rank 67</h4></Col>
          <Col className="whitee"><h4 className="h5">Won USD 10</h4></Col>
        </Row>
        <br />
        </div>
      </Container>
        </div>
        )
    }
}

export default Math