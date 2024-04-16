import './App.css';
import { Dashboard } from './pages/Dashboard';
import Chart from './pages/Chart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path="/pages/chart" element={<Chart />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
