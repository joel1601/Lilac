import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Home from './Pages/Dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/Signup' element={<SignUp/>}></Route>
        <Route path='/Dashboard' element={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
