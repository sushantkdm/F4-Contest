import { useState } from 'react';
import './App.css';

function App() {

  let [result, setResult] = useState("");
  let [num1, setnum1] = useState("");
  let [num2, setnum2] = useState("");
  let [msg, setmsg] = useState("");


  function validation(e) {
    if (num1 == "") {     
      setmsg("Error :  Num1 cannot be empty");
      setResult("");
      return;
    }
    else if (num2 == "") {
      setmsg("Error :  Num2 cannot be empty");
      setResult("");
      return;
    }
    else { 
      calculate(e);
    }
  }

  function calculate(e) {
    let ans ;
    if (e.target.innerText == "+") {
      ans = Number(num1) + Number(num2);
    }
    else if (e.target.innerText == "-") {
      ans = Number(num1) - Number(num2);
    }
    else if (e.target.innerText == "*") {
      ans = Number(num1) * Number(num2);
    }
    else {
      ans = Number(num1) / Number(num2);
    }

    if(isNaN(ans)){
      setmsg("Error :  Please enter a valid number");
      setResult("");
    }

    else{
      setmsg("Success : Your result is shown above!");
      setResult(ans);
    }
  }

  return (
    <div className="calculator-comp">
      <h1>React Calculator</h1>
      <input type="text" id="num1-inp" placeholder='Num 1' onChange={(e) => { setnum1(e.target.value) }} />
      <input type="text" id="num2-inp" placeholder='Num 2' onChange={(e) => { setnum2(e.target.value) }} />
      <div className="btn-grp">
        <button onClick={validation}>+</button>
        <button onClick={validation}>-</button>
        <button onClick={validation}>*</button>
        <button onClick={validation}>/</button>
      </div>
      <div className='res'>{result === "" ? "" : result}</div>
      <div className={(msg=="Success : Your result is shown above!")?"success":"error"} >{msg}</div>
    </div>
  );
}

export default App;
