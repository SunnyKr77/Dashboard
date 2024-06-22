import './App.css';
import { Dashboard } from './pages/Dashboard';
import Chart from './pages/Chart';
import { ChangeEvent, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  const [inputText, setInputText] = useState("");
    const factor = (e: ChangeEvent<HTMLInputElement>) => {
      setInputText(e.target.value)


      const factorial = e.target.value
      for(let i = factorial-1 )

    console.log(factorial);
    
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path="/pages/chart" element={<Chart />} />
        </Routes>
      </Router>
      <div className='input-holder'>
      <input type="number" onChange={factor} value={inputText} className='input-field' />
      <p>Input: {inputText}</p>
      <button className='btn'>Submit</button>
      </div>
    </div>
  );
}

export default App;
