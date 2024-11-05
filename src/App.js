import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Type from './pages/Type';

function App() {
  return (
    <BrowserRouter>
      <div className="App">        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/type" element={<Type />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
