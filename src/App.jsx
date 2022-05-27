import React from 'react'
import {Routes, BrowserRouter, Route} from 'react-router-dom';
import Singup from './components/auth/Singup';
import Login from './components/auth/Login'
import Panel from './components/panel/Layout';

import Qr from './components/panel/Qr';
import Registro from './components/panel/Registro';
import Menu from './components/panel/Menu';
import QrOnly from './components/panel/QrOnly';
import Account from './components/account/Account';
import Categorias from './components/panel/Categorias';
import Alimentos from './components/panel/Alimentos';
import RegistroCat from './components/panel/RegistroCat';
import RegistroAlimento from './components/panel/RegistroAli';
import Activate from './components/auth/Activate';

import PasswordEdit from './components/account/Password';
import Profile from './components/account/Profile';

import AuthState from './context/authState';
import UserState from './context/userContext/userState';

import PrivateRoute from './routes/PrivateRoute';



function App() {


  return (
    <AuthState>
      <UserState>
      <BrowserRouter>
        <Routes>
          <Route path='/activate' element={<Activate/>}/>
          <Route path='/singup' element={<Singup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/' element={
            <PrivateRoute>
              <Panel vista={<Qr/>} nombre='qr'/>
            </PrivateRoute>
          }/>
          <Route path='/qr' element={<PrivateRoute><QrOnly/></PrivateRoute>}/>
          <Route path='/registro' element={<PrivateRoute><Panel vista={<Registro/>} nombre='registro'/></PrivateRoute>}/>
          <Route path='/registro/categorias' element={<PrivateRoute><Panel vista={<RegistroCat/>} nombre='registro'/></PrivateRoute>}/>
          <Route path='/registro/alimentos' element={<PrivateRoute><Panel vista={<RegistroAlimento/>} nombre='registro'/></PrivateRoute>}/>
          
          <Route path='/menu' element={<PrivateRoute><Panel vista={<Menu/>} nombre='menu'/></PrivateRoute>}/>
          <Route path='/menu/categorias' element={<PrivateRoute><Panel vista={<Categorias/>} nombre='menu'/></PrivateRoute>}/>
          <Route path='/menu/alimentos' element={<PrivateRoute><Panel vista={<Alimentos/>} nombre='menu'/></PrivateRoute>}/>

          <Route path='/cuenta' element={<PrivateRoute><Panel vista={<Account/>} nombre='account'/></PrivateRoute>}/>
          <Route path='/cuenta/password' element={<PrivateRoute><Panel vista={<PasswordEdit/>} nombre='account'/></PrivateRoute>}/>
          <Route path='/cuenta/profile' element={<PrivateRoute><Panel vista={<Profile/>} nombre='account'/></PrivateRoute>}/>
        </Routes>
      </BrowserRouter>
      </UserState>
    </AuthState>
  )
}

export default App
