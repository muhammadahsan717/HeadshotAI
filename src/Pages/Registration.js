import React from 'react'
import { Form, Input } from 'antd';
import Navbars from '../Components/Navbars';
import Footer from '../Components/Footer';
import '../Styles/Pages/Registration.css';
import { useNavigate } from "react-router-dom";

function Registration(){
    const navigate = useNavigate();
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className='registration-main'>
            <div className='registration-nav'>
                <Navbars />
            </div>
            <div className='registration-header'>
                <p>Registration</p>
            </div>
            <div className='registration-form'>    
                <div className='form-box'>
                    <Form name='basic' initialValues={{remember: true,}} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off' layout='vertical'>
                            <Form.Item name='firstName' rules={[ {required: true, message: 'Enter first name'} ]}>
                                <Input placeholder='First Name' size='large' className='custome-placeholder' style={{width:'100%'}}/>
                            </Form.Item>
                            <Form.Item name='lastName' rules={[ {required: true, message: 'Enter last name'}, ]}>
                                <Input size='large' className='custome-placeholder' placeholder='Last Name' />
                            </Form.Item>
                        <Form.Item name='emailID' rules={[ {required: true, message: 'Enter valid email'}]}>
                            <Input placeholder='Email' size='large' className='custome-placeholder'/>
                        </Form.Item>
                        <Form.Item name='verification' rules={[ {required: true, message: 'Enter verification code'}, ]}>
                            <Input placeholder='Verification Code' size='large' className='custome-placeholder' />
                        </Form.Item>
                            <Form.Item name='gender' rules={[ {required: true, message: 'Enter gender'}, ]}>
                                <Input placeholder='Gender' size='large' className='custome-placeholder' />
                            </Form.Item>
                            <Form.Item name='eyeColor' rules={[ {required: true, message: 'Enter eye color'}, ]}>
                                <Input placeholder='Eye Color' size='large' className='custome-placeholder'/>
                            </Form.Item>
                    </Form>
                    <div className='form-button'>
                        <button className='Buttons-icon' onClick={()=>navigate('/packages')}>Packages  <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Registration;