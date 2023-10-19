import React, { useState, useEffect } from 'react';
import { Tab, Nav, Row, Col, Tabs } from 'react-bootstrap';
import Navbars from '../Components/Navbars'
import Footer from '../Components/Footer'
import '../Styles/Pages/Profile.css';
import p1 from '../Assets/Images/p1.png'
import p2 from '../Assets/Images/p2.png'
import p3 from '../Assets/Images/p3.png'
import p4 from '../Assets/Images/p4.png'
import p5 from '../Assets/Images/p5.png'


function Profile() {

    const profileOrder = [
        {
            packageName: 'Professional',
            packageStatus: 'Draft',
            paymentStatus: 'DONE'
        },
        {
            packageName: 'Practical',
            packageStatus: 'Processing',
            paymentStatus: 'DONE'
        },
        {
            packageName: 'Seasoned',
            packageStatus: 'Processing',
            paymentStatus: 'DONE'
        },
        {
            packageName: 'Proficient',
            packageStatus: 'Processing',
            paymentStatus: 'DONE'
        },
        {
            packageName: 'Pragmatic',
            packageStatus: 'Draft',
            paymentStatus: 'DONE'
        },
        {
            packageName: 'Resourceful',
            packageStatus: 'Processing',
            paymentStatus: 'DONE'
        },
        {
            packageName: 'Businesslike',
            packageStatus: 'Draft',
            paymentStatus: 'DONE'
        },
        {
            packageName: 'Accomplished',
            packageStatus: 'Processing',
            paymentStatus: 'DONE'
        }
    ];

    const imagesData = [
        {
            source: p1,
            imageStatus: 'rejected'
        },
        {
            source: p2,
            imageStatus: 'accepted'
        },
        {
            source: p3,
            imageStatus: 'rejected'
        },
        {
            source: p4,
            imageStatus: 'accepted'
        },
        {
            source: p5,
            imageStatus: 'accepted'
        },
        {
            source: p2,
            imageStatus: 'accepted'
        },
        {
            source: p3,
            imageStatus: 'rejected'
        },
        {
            source: p4,
            imageStatus: 'accepted'
        },
        {
            source: p5,
            imageStatus: 'accepted'
        },
        {
            source: p1,
            imageStatus: 'rejected'
        },
        {
            source: p3,
            imageStatus: 'rejected'
        },
        {
            source: p4,
            imageStatus: 'accepted'
        },
        {
            source: p5,
            imageStatus: 'accepted'
        },
        {
            source: p1,
            imageStatus: 'rejected'
        },
        {
            source: p2,
            imageStatus: 'accepted'
        },
        {
            source: p4,
            imageStatus: 'accepted'
        },
        {
            source: p5,
            imageStatus: 'accepted'
        },
        {
            source: p1,
            imageStatus: 'rejected'
        },
        {
            source: p2,
            imageStatus: 'accepted'
        },
        {
            source: p3,
            imageStatus: 'rejected'
        }
    ];

    const [show, setShow] = useState(false);
    const [packagesName, setPackagesName] = useState();
    const [packagesStatus, setPackagesStatus] = useState();
    const [paymentsStatus, setPaymentsStatus] = useState();
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [tabId, setTabId] = useState();

    useEffect(() => {
        // Update the screen width when the window is resized
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        const handleId = () => {
            setTabId(window.innerWidth >= 1200 ? 'left-tabs-example' : 'fill-tab-example');
        }

        window.addEventListener('resize', handleResize);

        return () => {
            // Clean up the event listener when the component unmounts
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    function handleData(data){
        setShow(!show);
        setPackagesName(data.packageName);
        setPackagesStatus(data.packageStatus);
        setPaymentsStatus(data.paymentStatus);
    }

    return (
        <div className='profile-main'>
            <Navbars />
            <div className='profile-box'>
                
                {screenWidth >= 1200 ? ( // Change the breakpoint as needed
                    <Tab.Container defaultActiveKey='tab1' id={tabId} fill>
                        <Row className='profile-boxes'>
                            <Col sm={12} xl={3}>
                                    <Nav variant="pills" className="tabs-panel">
                                        <Nav.Item className='profile-tab'>
                                            <Nav.Link eventKey="tab1"><p>Profile</p></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='order-page-tab'>
                                            <Nav.Link eventKey="tab2"><p>Order Page</p></Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item className='help-and-support-tab'>
                                            <Nav.Link eventKey="tab3"><p>Help & Support</p></Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                    </Col>
                            <Col sm={12} xl={9}>
                                <div className='tabs-content'>
                                    <Tab.Content >
                                        <Tab.Pane eventKey='tab1' >
                                            <div className='tab-content1'>
                                                <div className='my-profile'>
                                                    <div className='profile-name'>
                                                        <p>Name</p>
                                                    </div>
                                                    <div className='profile-address'>
                                                        <p>Address</p>
                                                    </div>
                                                    <div className='profile-email'>
                                                        <p>Email</p>
                                                    </div>
                                                    <div className='profile-password'>
                                                        <p>Password</p>
                                                    </div>
                                                    <div className='profile-update'>
                                                        <button className='Buttons-icon'>Update  <i className="fa-solid fa-arrow-right"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey='tab2'>
                                            <div className='tab-content2'>
                                                {show === true ? (
                                                        <>
                                                            <div className='order-tabs'>
                                                                <div className='order'>
                                                                    <p className='pNameSmall'>Package Name: </p>
                                                                    <p className='pName'>{packagesName}</p>
                                                                    {packagesStatus === 'Draft' ? (
                                                                        <>
                                                                            <button className='pStatusDraft'>Draft</button>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <button className='pStatus'>Processing</button>
                                                                        
                                                                        </>
                                                                    )}
                                                                    
                                                                    <p className='paymentsStatus'>Payment Status: </p>
                                                                    <button className='paymentStatus'>{paymentsStatus}</button>
                                                                </div>
                                                                <div className='btl'>
                                                                    <p onClick={() => setShow(!show)}>Back to Listing</p>
                                                                </div>
                                                            </div>

                                                            <div className='order-view-list'>
                                                                <div className='ovl-text'>
                                                                    <p className='ovl-text-big'>Photos </p>
                                                                    <p className='ovl-text-small'>(8 rejected)</p>
                                                                </div>
                                                                <div className='ovl-images'>
                                                                    <div className='ovl-images-inside'>
                                                                        {imagesData.map((datas, i) => (
                                                                            <div key={i} className='ovl-image-box'>
                                                                                <img src={datas.source} alt={datas.imageStatus} className='ovl-image-size'/>
                                                                                {datas.imageStatus === 'accepted' ? (
                                                                                    <div className='ovl-icon-display'>
                                                                                        <i className="fa-solid fa-circle-check fa-2xl" style={{ color: '#0b430a' }}></i>
                                                                                    </div>
                                                                                ) : (
                                                                                    <>
                                                                                    <div className='ovl-icon-display notes'>
                                                                                        <div className='ovl-iconsss'>
                                                                                            <i className="fa-solid fa-circle-xmark fa-2xl " style={{color: '#af2c2c'}}></i>
                                                                                            <p className='ovl-icon-text'>View Notes</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </>
                                                                                )}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </>
                                                ) : (
                                                    <>
                                                    {profileOrder.map((data, i) => {
                                                        return(
                                                            <div className='order-tabs'>
                                                                <div className='order'>
                                                                    <p className='pNameSmall'>Package Name: </p>
                                                                    <p className='pName'>{data.packageName}</p>
                                                                    {data.packageStatus === 'Draft' ? (
                                                                        <>
                                                                            <button className='pStatusDraft'>{data.packageStatus}</button>
                                                                        </>
                                                                    ) : (
                                                                        <>
                                                                            <button className='pStatus'>{data.packageStatus}</button>
                                                                        
                                                                        </>
                                                                    )}
                                                                    
                                                                    <p className='paymentsStatus'>Payment Status: </p>
                                                                    <button className='paymentStatus'>{data.paymentStatus}</button>
                                                                </div>
                                                                <div className='view-order'>
                                                                    <p onClick={() => handleData(data)}>View Order <i className="fa-solid fa-circle-plus addIcon"></i></p>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                    </>
                                                )}
                                            </div>
                                        </Tab.Pane>
                                    </Tab.Content>
                                </div>
                            </Col>
                        </Row>
                    </Tab.Container>
                ) : (
                    <div className='profile-condition'>

                        <Tabs defaultActiveKey='tab1' id="fill-tab-example" fill >
                            <Tab eventKey="tab1" title='Profile'>
                                <div className='tab-content1'>
                                    <div className='my-profile'>
                                        <div className='profile-name'>
                                            <p>Name</p>
                                        </div>
                                        <div className='profile-address'>
                                            <p>Address</p>
                                        </div>
                                        <div className='profile-email'>
                                            <p>Email</p>
                                        </div>
                                        <div className='profile-password'>
                                            <p>Password</p>
                                        </div>
                                        <div className='profile-update'>
                                            <button className='Buttons-icon'>Update  <i className="fa-solid fa-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </Tab>
                            <Tab eventKey='tab2' title='Order Page'>
                                <div className='tab-content2'>
                                    {show === true ? (
                                            <>
                                                <div className='order-tabs'>
                                                    <div className='order'>
                                                        <div className='o-package'>
                                                            <p className='pNameSmall'>Package Name: </p>
                                                            <p className='pName'>{packagesName}</p>
                                                        </div>
                                                        <div className='o-button'>
                                                            {packagesStatus === 'Draft' ? (
                                                                <>
                                                                    <button className='pStatusDraft'>Draft</button>
                                                                </>
                                                            ) : (
                                                                <>
                                                                    <button className='pStatus'>Processing</button>
                                                                
                                                                </>
                                                            )}
                                                        </div>
                                                        <div className='o-payment'>
                                                            <p className='paymentsStatus'>Payment Status: </p>
                                                            <button className='paymentStatus'>{paymentsStatus}</button>
                                                        </div>
                                                    </div>
                                                    <div className='btl'>
                                                        <p onClick={() => setShow(!show)}>Back to Listing</p>
                                                    </div>
                                                </div>

                                                <div className='order-view-list'>
                                                    <div className='ovl-text'>
                                                        <p className='ovl-text-big'>Photos </p>
                                                        <p className='ovl-text-small'>(8 rejected)</p>
                                                    </div>
                                                    <div className='ovl-images'>
                                                        <div className='ovl-images-inside'>
                                                            {imagesData.map((datas, i) => (
                                                                <div key={i} className='ovl-image-box'>
                                                                    <img src={datas.source} alt={datas.imageStatus} className='ovl-image-size'/>
                                                                    {datas.imageStatus === 'accepted' ? (
                                                                        <div className='ovl-icon-display'>
                                                                            <i className="fa-solid fa-circle-check fa-2xl" style={{ color: '#0b430a' }}></i>
                                                                        </div>
                                                                    ) : (
                                                                        <>
                                                                        <div className='ovl-icon-display notes'>
                                                                            <div className='ovl-iconsss'>
                                                                                <i className="fa-solid fa-circle-xmark fa-2xl " style={{color: '#af2c2c'}}></i>
                                                                                <p className='ovl-icon-text'>View Notes</p>
                                                                            </div>
                                                                        </div>
                                                                    </>
                                                                    )}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                    ) : (
                                        <>
                                            {profileOrder.map((data, i) => {
                                                return(
                                                    <div className='order-tabs'>
                                                        <div className='order'>
                                                            <div className='vo-package'>
                                                                <p className='pNameSmall'>Package Name: </p>
                                                                <p className='pName'>{data.packageName}</p>
                                                            </div>
                                                            <div className='vo-button'>
                                                                {data.packageStatus === 'Draft' ? (
                                                                    <>
                                                                        <button className='pStatusDraft'>{data.packageStatus}</button>
                                                                    </>
                                                                ) : (
                                                                    <>
                                                                        <button className='pStatus'>{data.packageStatus}</button>
                                                                    
                                                                    </>
                                                                )}
                                                            </div>
                                                            <div className='vo-payment'>
                                                                <p className='paymentsStatus'>Payment Status: </p>
                                                                <button className='paymentStatus'>{data.paymentStatus}</button>
                                                            </div>
                                                        </div>
                                                        <div className='view-order'>
                                                            <p onClick={() => handleData(data)}>View Order <i className="fa-solid fa-circle-plus addIcon"></i></p>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </>
                                    )}
                                </div>
                            </Tab>
                            <Tab eventKey='tab3' title='Help & Support'></Tab>
                        </Tabs>
                    </div>
                )}
                
            </div>
            <div className='profile-footer'>
                <Footer />
            </div>

        </div>
    )
}

export default Profile