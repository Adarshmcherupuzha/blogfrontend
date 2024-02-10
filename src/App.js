import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Route>
      <Routes path="/" element={<Login/>}/>
      
      <Routes path="/signup" element={<SignUp/>}/>
      
      
      </Route></BrowserRouter>
      

    </div>
  );
}

export default App;
