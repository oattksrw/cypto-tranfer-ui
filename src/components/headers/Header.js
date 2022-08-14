import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.scss'

const Header = () => {
    const navigate = useNavigate()
    return (
        <div className='header-container'>
            <div className='header-content'>
                <div className='logo'>
                    <img src={'https://www.satang.com/src/img/logo-satang.png'} alt='nice' />
                </div>
                <div className='menu'>
                    <span onClick={() => navigate('/market')}>Marget</span>
                </div>
            </div>

        </div>
    )
}

export default Header