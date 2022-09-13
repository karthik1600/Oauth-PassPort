import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Post from './Pages/Post';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
function App() {
  const user = 1;
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/post/:id" element={!user?<Navigate to="/login"/>:<Post />}/>
        <Route path="/login" element={user?<Navigate to="/"/>:<Login />}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
