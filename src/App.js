import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Home from './pages/home/Home';
import Employee from './pages/employee/Employee';
import AddEmployeeForm from './components/addEmployeeForm/AddEmployeeForm.jsx'
import Designation from './pages/designation/Designation';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/employee' element={<Employee/>}></Route>
        <Route path='/designation' element={<Designation/>}></Route>
        <Route path='/employee/addEmployee' element={<AddEmployeeForm/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
