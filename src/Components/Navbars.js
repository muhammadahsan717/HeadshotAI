import React from 'react'
import '../Styles/Components/Navbars.css'
import navlogo from '../Assets/Images/image 1.png'
import { useNavigate } from 'react-router-dom'
import { Nav, Navbar } from 'react-bootstrap';


function Navbars() {
    const navigate = useNavigate();

    function handleScroll() {
        window.scroll({
            top: document.body.offsetHeight,
            left: 0, 
            behavior: 'smooth',
        });
    }
    
    
    return (
        <div className='nav-main'>
            <div className='in-nav-main'>

                <Navbar expand='lg'>
                        <Navbar.Brand>
                            <div className='logo'>
                                <img src={navlogo} className='logonav' alt='navbar' onClick={() => navigate('/')}/>
                            </div>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className='custom-nav-color' variant='light'/>
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className='on-Nav' >
                                <Nav.Link className='inside-Nav text-light' onClick={handleScroll}>About Us</Nav.Link>
                                <Nav.Link className='inside-Nav text-light'>Testimonials</Nav.Link>
                                <Nav.Link className='inside-Nav text-light'>How it Works</Nav.Link>
                                <Nav.Link className='inside-Nav text-light'>FAQ</Nav.Link>
                                <Nav.Link className='btn-contact'>Contact</Nav.Link>
                                <Nav.Link className='btn-login'>Login</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default Navbars