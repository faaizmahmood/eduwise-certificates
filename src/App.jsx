import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Certificate from './certificate/certificate'
import Home from './home/home';

function App() {

  return (
    <>
      <Routes>

        <Route path='/' element={<Home/>} />

        <Route path='/:certificateID' element={<Certificate />} />

        <Route path='*' element={<Navigate to='/' />} />

      </Routes>

      {/* for notifications */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </>
  )
}

export default App
