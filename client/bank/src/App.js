import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import RegisterComponent from './componets/RegisterComponent'
import LoginComponent from './componets/LoginComponent'
import WithdrawComponent from './componets/WithdrawComponent'
import DepositComponent from './componets/DepositComponent'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/RegisterComponent"  element={<RegisterComponent/>}/>
      <Route path="/"  element={<LoginComponent/>}/>
      <Route path="/WithdrawComponent"  element={<WithdrawComponent/>}/>
      <Route path="/DepositComponent"  element={<DepositComponent/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
