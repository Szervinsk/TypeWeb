import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">

    <BrowserRouter>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="login">login</Link></li>
      </ul>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
      </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
