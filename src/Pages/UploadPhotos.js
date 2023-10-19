import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbars from '../Components/Navbars'
import Footer from '../Components/Footer'
import examplePhoto from '../Assets/Images/examplePhoto.png'
import '../Styles/Pages/UploadPhotos.css'


function UploadPhotos() {
    const navigate = useNavigate();
    const contentArray = new Array(20).fill('+');
    return (
        <div className='uploadPhotos-main'>
                <Navbars />
                <div className='uploadPhotos-heading'>
                    <div className='up-heading'>
                        <p>Upload Photos</p>
                    </div>
                </div>
                
                <div className='uploadPhotos-content'>
                    <div className='up-content'>
                        <p className='up-text'>Upload Photos</p>

                        <div className='up-boxes'>
                            {contentArray.map((content, index) => (
                                <div key={index} className='up-boxes-inside'>
                                    <p>{content}</p>
                                </div>  
                            ))}
                        </div>
                    </div>
                </div>

                <div className='uploadPhotos-button'>
                    <div className='up-button'>
                        <button className='Buttons-icon-submit' onClick={()=>navigate('/payment')}>Submit  <i className="fa-solid fa-arrow-right"></i></button>
                        <button className='Buttons-icon-registerss' onClick={()=>navigate('/packages')}>Save For Later  <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>

                <div className='uploadPhotos-content'>
                    <div className='up-content'>
                        <p className='up-text'>Example Photos</p>

                        <div className='ep-boxes'>
                            <div className='ep-boxes-inside'>
                                <div className='ep-box-1'>
                                    <img src={examplePhoto} alt='example' className='ep-box-1-img'/>
                                </div>
                                <div className='ep-box-2'>
                                    <p>Upload your best photos! Bad uploads will lead to bad results.</p>
                                    <p>Ensure that your face and expressions in the photos resemble how you wish your face to look in the final product! Use flattering lighting and angles!</p>
                                    <p>Upload 20 photos of yourself (not blurry), </p>
                                    <p>make sure to include a mixture of: <br />~10 close-ups. and<br />~10 upper body shots<br />Ensure your face takes up at least 25% of the image!</p>
                                    <p>Please follow: <br />Lighting, backgrounds and clothing should all be different. Do not use photos from the same setting.</p>
                                    <p>You should be looking into the camera for each photo.</p>
                                    <p>Things that repeat across the photos will repeat in the results (e.g., bad hair, earphones, angry face, hats, bikinis)</p>
                                    <p>What should NOT be in the image:</p>
                                    <ul>
                                        <li><p>Do not have other faces in the photo.</p></li>
                                        <li><p>Do not have excessive makeup or else it will get exaggerated.</p></li>
                                        <li><p>No sunglasses or closed eyes.</p></li>
                                        <li><p>No nudes or too much exposed skin.</p></li>
                                    </ul>
                                </div>
                            </div>  
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
    )
}

export default UploadPhotos