import React from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './../pages/Home';
import Tours from './../pages/Tours';
import TourDetails from './../pages/TourDetails';
import Login from './../pages/Login';
import SearchResultLIst from "../pages/SearchResultLIst"
import Register from './../pages/Register';
import ThankYou from '../pages/ThankYou';
import Error from '../pages/Error';
import PasswordReset from '../pages/PasswordReset'
const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/tours' element={<Tours />} />
        <Route path='/tours/:id' element={<TourDetails />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/thank-you' element={<ThankYou />} />
        <Route path='/password-reset' element={<PasswordReset />} />
        <Route path='*' element={<Error />} />
        <Route path='/tours/search' element={<SearchResultLIst />} />
    </Routes>
  )
}

export default Router
