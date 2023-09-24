import React from 'react'
import './App.css';
import {Routes , Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import Cart from './Components/Cart';
import Error from './Components/Error';
import Sells from './Components/Sells';
import Login from './Components/Ragister_pages/Login';
import Signup from './Components/Ragister_pages/Signup';


function App() {
  return (
    <div className="App">
<Header />
<Routes>
  <Route path='/' element={<Home />}  />
  <Route path='/cart' element={<Cart />} />
  <Route path='/sells' element={<Sells />} />
  <Route path='/login' element={<Login />} />
  <Route path='/signup' element={<Signup />} />
  <Route path='*' element={<Error />} />
</Routes>

    </div>
  );
}

export default App;
