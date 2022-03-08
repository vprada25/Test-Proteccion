import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import FibNumbers from "../components/FibNumbers/FibNumbers";
import Timer from "../components/Timer/Timer";
import "./Home.css";

const Home = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [n, setN] = useState(0);
  const [fibNumbers, setFibNumbers] = useState(false);
  const [timer, setTimer] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setTimer(new Date());
    }, 1000);
  },);

  const onFibSeries = () => {
    setFibNumbers(false);
    let mins = String(timer.getMinutes());
    let arr = mins.split("");
    console.log(mins);
    if (arr.length === 2) {
      setX(Number(arr[0]));
      setY(Number(arr[1]));
    } else {
      setX(0);
      setY(Number(arr[0]));
    }
    setN(timer.getSeconds());
    setFibNumbers(true);
  };

  return (
    <div className="container-fibo m-0 justify-content-center align-items-center vh-100 row">
      <Container>
        <Row>
          <Col md={4}>
            <h1>Bienvenido a Fibonacci</h1>
          </Col>
          <Col md={{ span: 4, offset: 4 }}>
            <h1>
              <Timer date={timer}></Timer>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col xs={5}>
            <div>{fibNumbers ? <FibNumbers key={n} n={n} x={x} y={y} /> : <></>}</div>
          </Col>
          <Col>
            <Button variant="outline-success" onClick={onFibSeries}>
              Success
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
