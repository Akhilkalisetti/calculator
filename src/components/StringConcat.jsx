import React, { useState } from "react";
import Button from "./Button";

const StringConcat = () => {
  const [str1, setStr1] = useState("");
  const [str2, setStr2] = useState("");
  const [result, setResult] = useState("");

  const handleConcat = () => {
    setResult(str1 + str2);
  };

  return (
    <div className="string-concat">
      <h3>String Concatenation</h3>
      <input
        type="text"
        placeholder="Enter first string"
        value={str1}
        onChange={(e) => setStr1(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter second string"
        value={str2}
        onChange={(e) => setStr2(e.target.value)}
      />
      <Button label="Concat" onClick={handleConcat} />
      <div className="result">Result: {result}</div>
    </div>
  );
};

export default StringConcat;
