import React from 'react'
import Header from '../headers/Header'
import Footer from '../footers/Footer'
import './style.scss'

const Layout = (props) => {
    return (
        <div>
            <Header />
                <div className='content-container'>
                    {props.children}
                </div>
            <Footer />
        </div>
    )
}

export default Layout