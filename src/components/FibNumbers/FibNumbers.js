import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const FibNumbers = ({ x, y, n }) => {
  const [fibNumbers, setFibNumbers] = useState([]);

  useEffect(() => {
    calculateFibonacci();
  }, []);

  const calculateFibonacci = () => {
    let fibo = [0, 1];
    for (let i = 2; i <= n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    
    setFibNumbers(fibo.splice(n))

  };

  

  return (
    <div className="container-fluid">
      <h1>Fibonacci Numbers</h1>
      <h2>semila 1: {x}</h2>
      <h2>semilla 2: {y}</h2>
      <h2>semilla 3: {n}</h2>
      <h3>{fibNumbers.slice('-')}</h3>
    </div>
  );
};

FibNumbers.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  n: PropTypes.number.isRequired,
};

export default FibNumbers;
