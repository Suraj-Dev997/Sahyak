
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Component/Home'
import MoreInfo from './Component/MoreInfo'
import MoreInfo1 from './Component/MoreInfo1'

function App() {
  return (
    <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/blood-info' element={<MoreInfo></MoreInfo>}></Route>
       <Route path='/blood-management' element={<MoreInfo1></MoreInfo1>}></Route>
       
    </Routes>
  )
}

export default App
