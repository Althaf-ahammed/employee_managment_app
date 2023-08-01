import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Home from './pages/home/Home';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
