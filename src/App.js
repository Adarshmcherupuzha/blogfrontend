import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Addpost from './components/Addpost';
import ViewPost from './components/ViewPost';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login/>}/>
      
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/addpost" element={<Addpost/>}/>
      <Route path="/viewpost" element={<ViewPost/>}/>
        
      
      </Routes></BrowserRouter>
      

    </div>
  );
}

export default App;
