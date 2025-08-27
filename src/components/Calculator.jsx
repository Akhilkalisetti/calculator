import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import StringConcat from "./StringConcat";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      // Replace common math functions with JS Math equivalents
      let expr = input
        .replace(/π/g, Math.PI)
        .replace(/e/g, Math.E)
        .replace(/sin/g, "Math.sin")
        .replace(/cos/g, "Math.cos")
        .replace(/tan/g, "Math.tan")
        .replace(/log/g, "Math.log10")
        .replace(/ln/g, "Math.log")
        .replace(/√/g, "Math.sqrt")
        .replace(/exp/g, "Math.exp")
        .replace(/abs/g, "Math.abs")
        .replace(/\^/g, "**");

      // Factorial (custom handling)
      if (expr.includes("!")) {
        expr = expr.replace(/(\d+)!/g, (_, n) => factorial(parseInt(n)));
      }

      // eslint-disable-next-line no-eval
      setInput(eval(expr).toString());
    } catch {
      setInput("Error");
    }
  };

  const factorial = (n) => {
    if (n < 0) return NaN;
    return n === 0 ? 1 : n * factorial(n - 1);
  };

  return (
    <div className="calculator">
      <Display value={input} />

      <div className="buttons">
        {/* Top row */}
        <Button label="C" onClick={handleClear} />
        <Button label="⌫" onClick={handleBackspace} />
        <Button label="(" onClick={() => handleInput("(")} />
        <Button label=")" onClick={() => handleInput(")")} />

        {/* Scientific functions */}
        <Button label="sin" onClick={() => handleInput("sin(")} />
        <Button label="cos" onClick={() => handleInput("cos(")} />
        <Button label="tan" onClick={() => handleInput("tan(")} />
        <Button label="√" onClick={() => handleInput("√(")} />



        <Button label="log" onClick={() => handleInput("log(")} />
        <Button label="ln" onClick={() => handleInput("ln(")} />
        <Button label="exp" onClick={() => handleInput("exp(")} />
        <Button label="!" onClick={() => handleInput("!")} />

       

        {/* Numbers & Operators */}
        <Button label="7" onClick={() => handleInput("7")} />
        <Button label="8" onClick={() => handleInput("8")} />
        <Button label="9" onClick={() => handleInput("9")} />
        <Button label="*" onClick={() => handleInput("*")} />

        <Button label="4" onClick={() => handleInput("4")} />
        <Button label="5" onClick={() => handleInput("5")} />
        <Button label="6" onClick={() => handleInput("6")} />
        <Button label="-" onClick={() => handleInput("-")} />

        <Button label="1" onClick={() => handleInput("1")} />
        <Button label="2" onClick={() => handleInput("2")} />
        <Button label="3" onClick={() => handleInput("3")} />
        <Button label="+" onClick={() => handleInput("+")} />

        <Button label="0" onClick={() => handleInput("0")} />
        <Button label="." onClick={() => handleInput(".")} />
        <Button label=" = " onClick={handleEvaluate} />
      </div>

      <StringConcat />
    </div>
  );
};

export default Calculator;
