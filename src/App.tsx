import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Loading from './components/Loading'
import UserContext, { useUi } from './context/UserContext'
import MainScreen from './pages/MainScreen/MainScreen'
import Signup from './pages/SignUp/Signup'

function App() {


  return (
    <UserContext>
      <BrowserRouter>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Signup />}></Route>
            <Route path='feed' element={<MainScreen />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext >
  )
}

export default App
