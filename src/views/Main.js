import React, { useContext } from 'react'
import { Route, Router, Routes } from 'react-router'
import { Navbar } from '../components/Navbar'
import { NavBottom } from '../components/NavBottom'
import { ServiceContext } from '../context/ServiceContext'
import Attorneys from './Attorneys'
import { Contact } from './Contact'
import { Home } from './Home'
import { WhatWeDo } from './WhatWeDo'
import { WhereWeWork } from './WhereWeWork'
import { WhoWeAre } from './WhoWeAre'

export const Main = () => {
    const {search} = useContext(ServiceContext)
    return (
        <React.Fragment>
            <div className="container bg-white">
                <header>
                    <Navbar />
                </header>
                <main>
                    <Routes>
                        <Route exact path='/' element={<Home />} />
                        <Route exact path='/who-we-are' element={<WhoWeAre />} />
                        <Route exact path='/what-we-do' element={<WhatWeDo s={ search }/>} />
                        <Route exact path='/where-we-work' element={<WhereWeWork />} />
                        <Route exact path='/contact-us' element={<Contact />} />
                        <Route exact path='/who-we-are/attorneys' element={<Attorneys />} />
                    </Routes>
                </main>
                <footer>
                    <NavBottom />
                </footer>
            </div>

        </React.Fragment>
    )
}
