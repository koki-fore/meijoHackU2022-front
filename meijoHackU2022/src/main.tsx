import { ChakraProvider } from '@chakra-ui/react'
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import SignUp from './pages/SignUp'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<App />} />
        <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      
    </ChakraProvider>
  </React.StrictMode>
)
