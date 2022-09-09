import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NotFound from './components/NotFound';
import Header from './components/Header';
import EventHandling from './components/EventHandling';
import Todo from './components/Todo';
import Register from './components/Register';
import Product from './components/Product';
import UserManager from './components/UserManager';
import { Toaster } from 'react-hot-toast';



function App() {
  return (
    <div>
      <Toaster position='top-center'/>
      <BrowserRouter>
      <Header />
      {/* <Link to="/Index">Index</Link>
      <br />
      <Link to="/Login">Login</Link> */}
          <Routes>
            <Route  element={<Home></Home>} path="/"/> 
            <Route  element={<Home></Home>} path="index"/> 
            <Route  element={<Login></Login>} path="login" /> 
            <Route  element={<Todo></Todo>} path="todo" /> 
            <Route  element={<EventHandling />} path="event"/>
            <Route  element={<Register />} path="register"/>
            <Route  element={<Product />} path="product"/>
            <Route  element={<UserManager />} path="userManager"/>
            <Route  element={<NotFound />} path="*"/>
            
            {/* known as props */}
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
