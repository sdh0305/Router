import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/login';
import LoginPage from './pages/loginpage';
import Main from './pages/main';
import Test from './pages/test';


const App = () =>{
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='login/*' element={<Login />} />
        <Route path='main/*' element={<Main />} />
        <Route path='test/*' element={<Test />} />
      </Routes>
    </BrowserRouter>    
  )
}

export default App;
