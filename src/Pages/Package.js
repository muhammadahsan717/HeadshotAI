import React from 'react'
import Packages from '../Components/Packages'
import Footer from '../Components/Footer'
import Navbars from '../Components/Navbars'
import { useNavigate } from 'react-router-dom'
import '../Styles/Pages/Package.css'

function Package() {
    const navigate = useNavigate();
    return (
        <div className='package-main'>
            <Navbars />
            <Packages data={'linear-gradient(0.5turn, #c1a8ca, #7fa7bd, #eea6ee)'}/>
            <div className='package-button'>
                <div className='package-button-inside'>
                    <button className='Buttons-icon-register' onClick={()=>navigate('/register')}>Back To Registration  <i className="fa-solid fa-arrow-right"></i></button>
                    <button className='Buttons-icon' onClick={()=>navigate('/t&c')}>T & C  <i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Package