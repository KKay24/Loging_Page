//import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import Classcounter from './Classcounter';
// import HookCounter from './HookCounter';
//import HookCounterTwo from './HookCounterTwo';
import LogginPage from './LogginPage';
import SignUp from './SignUp';
import Home from './Home';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <BrowserRouter>
        <Routes>
          <Route path='/Home' element={<Home/>}></Route>
          <Route path='/LogginPage' element={<LogginPage/>}></Route>
          <Route path='/SignUp' element={<SignUp/>}></Route>
        </Routes>
      </BrowserRouter>
      
      {/* <LogginPage />  */}
     {/* <Classcounter /> */}
     {/* <HookCounterTwo /> */}
    </div>
  );
}

export default App;
