import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter as Router,
    Route, Routes,
  } from "react-router-dom"  
import App from './App'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import SignIn from './pages/SignIn/SignIn'
import Profile from './pages/Profile/Profile'
import store from './store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/signin' element={<SignIn/>} />
                <Route path='/profile' element={<Profile />} />
            </Routes>
            <Footer />
        </Router>
    </Provider>
)
