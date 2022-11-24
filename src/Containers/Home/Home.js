import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer'
import Header from '../../Components/Header/Header'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
        <Header />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Home