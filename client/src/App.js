
import './App.css';
//components
import AddUser from './components/AddUser';
import AllUser from './components/AllUser';
import Crud from './components/Crud';
import EditUser from './components/EditUser';
import NavBar from './components/NavBar';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path='/' element={<Crud/>} />
      <Route path='/all' element={<AllUser/>} />
      <Route path='/add' element={<AddUser/>} />
      <Route path='/edit/:id' element={<EditUser/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
