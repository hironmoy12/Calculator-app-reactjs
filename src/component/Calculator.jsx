import React, { useState, useEffect } from 'react';
import '../component/Calculator.css';

export default function Calculator() {
  const [result, setResult] = useState('');

  const handleClick = (e) => {
    setResult(result.concat(e.target.value));
  };

  const calculate = () => {
    try {
      let calculatedResult = result;
      calculatedResult = calculatedResult.replace(/%/g, '/ 100 *');
      setResult(eval(calculatedResult));
    } catch (error) {
      setResult('Error');
    }
  };

  const clear = () => {
    setResult('');
  };
  

  return (
    <div className="calculator">
      <div className="result">{result}</div>
      <div className="keypad">
        {/* Operator buttons */}
        <button className="operator" value="+" onClick={handleClick}>+</button>
        <button className="operator" value="-" onClick={handleClick}>-</button>
        <button className="operator" value="*" onClick={handleClick}>*</button>
        <button className="operator" value="/" onClick={handleClick}>/</button>
        <button className="operator" value="%" onClick={handleClick}>%</button>

        {/* Number buttons */}
        <button value="7" onClick={handleClick}>7</button>
        <button value="8" onClick={handleClick}>8</button>
        <button value="9" onClick={handleClick}>9</button>

        <button value="4" onClick={handleClick}>4</button>
        <button value="5" onClick={handleClick}>5</button>
        <button value="6" onClick={handleClick}>6</button>

        <button value="1" onClick={handleClick}>1</button>
        <button value="2" onClick={handleClick}>2</button>
        <button value="3" onClick={handleClick}>3</button>

        <button value="0" onClick={handleClick}>0</button>

        {/* Decimal point and equals button */}
        <button className="operator" value="." onClick={handleClick}>.</button>
        <button className="operator" id="equal" onClick={calculate}>=</button>
      </div>
      {/* Clear button */}
      <button className="clear" onClick={clear}>Clear</button>
    </div>
  );
}

