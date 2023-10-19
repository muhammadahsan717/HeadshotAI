import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import purpleimage from '../Assets/Images/purpleimage.png'
import cloudimg from '../Assets/Images/cloud.png'
import timeimg from '../Assets/Images/time.png'
import image1 from '../Assets/Images/image.png'
import Navbars from '../Components/Navbars';
import Footer from '../Components/Footer';
import '../Styles/Pages/HomePage.css'
import Packages from '../Components/Packages';

function HomePage() {

  const data = [
    {
      title: 'Landy Hu - Nurse',
      text: '"This product helped me create a LinkedIn profile picture without having to go to a professional photographer. Very impressive!"'
    },
    {
      title: 'John Doe - Doctor',
      text: '"This product helped me create a LinkedIn profile picture without having to go to a professional photographer. Very impressive!"'
    },
    {
      title: 'Linda Hu - Maid',
      text: '"This product helped me create a LinkedIn profile picture without having to go to a professional photographer. Very impressive!"'
    },
    {
      title: 'Landy Hu - Nurse',
      text: '"This product helped me create a LinkedIn profile picture without having to go to a professional photographer. Very impressive!"'
    },
    {
      title: 'Gabriel - Software Engineer',
      text: '"This product helped me create a LinkedIn profile picture without having to go to a professional photographer. Very impressive!"'
    },
    {
      title: 'Gabriel - Software Engineer',
      text: '"This product helped me create a LinkedIn profile picture without having to go to a professional photographer. Very impressive!"'
    },
    {
      title: 'Landy Hu - Nurse',
      text: '"This product helped me create a LinkedIn profile picture without having to go to a professional photographer. Very impressive!"'
    },
    {
      title: 'Landy Hu - Nurse',
      text: '"This product helped me create a LinkedIn profile picture without having to go to a professional photographer. Very impressive!"'
    }
  ];
  
  return (
    <div className='home-main'>
      <div className='main'>
        <Navbars />
          <div className='section1'>
            <div className='contents'>
              <div>
                    <p className='content1'>Look Professional,<br /> Grow Your Career.</p>
              </div>
              <div>
                  <p className='content2'>Make your first<br /> impression count.</p>
              </div>
              <div className='short-size'>
                    <p>Get your headshots now</p>
              </div>
                  
            </div>
            <div className='images'>
                <img className='main-image' alt='Home' src={image1}/>
            </div>
          </div>
          
          <div className='section2'>
            <div className='sec-two-header'>
              <div className='textss'>
                <p>Other professionals left satisfied</p>
              </div>
              <div className='short-text'>
                <p>Look at what other professionals are saying about us:</p>
              </div>
            </div>

            <div className='section-two-body'>
              <div className='sec-two-body'>
                <Swiper
                    breakpoints={{
                      1440:{
                        width: 1440,
                        slidesPerView: 4, 
                      },
                      1200: {
                        width: 1200,
                        slidesPerView: 3,
                      },
                      900: {
                        width: 900,
                        slidesPerView: 2,
                      },
                      480: {
                        width: 480,
                        slidesPerView: 1,
                      },
                    }}
                    // slidesPerView={3}
                    spaceBetween={0}
                    pagination={{clickable: true}}
                    // modules={[Pagination]}
                    className='mySwiper'
                  >
                    {data.map((element, i) => (
                      <SwiperSlide>

                        <div style={{ width: '350px', height: '550px' }}>
                          <img variant="top" src={purpleimage} style={{width: '350px', height: '400px'}} alt='carousel' />
                          <div>
                            <div className='card-title'>{element.title}</div>
                            <div className='card-text'>{element.text}</div>
                          </div>
                        </div>
                      </SwiperSlide>
                  ))}
                </Swiper>
              </div>

            </div>

            <div className='sec-two-sub'>
              <p className='short-text-inside'>See All
                <span><button className='Button-icon'><i className="fa-solid fa-arrow-right"></i></button></span>
              </p>
            </div>
          </div>

          <div className='section3'>

            <div className='section-three-heading'>
              
              <div className='big-text'>
                <p className='big-text-inside'>Become a professional others want to work with.</p>
              </div>
              
              <div className='short-texts'>
                <p className='short-text-inside'>Why waste countless hours and money on a photoshoot when you can get it all done in just under 2 minutes.</p>
              </div>

            </div>

            <div className='section-three-boxes'>

              <div className='box-one'>
                <div className='box-one-big-text'>
                  <p>Upload your photos</p>
                </div>

                <div className='box-one-small-text'>
                  <p>in a few minutes</p>
                </div>
                <div className='imgs'>
                  <img src={cloudimg} alt='clouds' className='cloud'/>
                </div>  
              </div>

              <div className='box-two'>
                <div className='box-two-big-text'>
                  <p>Get your Headshots Now</p>
                </div>

                <div className='box-two-small-text'>
                  <p>72 hour turnaround</p>
                </div>
                <div className='imgs'>
                  <img src={timeimg} alt='timeclock' className='time'/>
                </div>  
              </div>
            </div>

            <div className='section-three-paragraph'>
            <div className='big-text'>
                <p className='big-text-inside'>Make a lasting first impression with the perfect headshots.</p>
              </div>

              <div className='short-texts'>
                <p className='short-text-inside'>TRY IT NOW
                  <span><button className='Button-icon'><i className="fa-solid fa-arrow-right"></i></button></span>
                </p>
                
              </div>
            </div>
          </div>

          <Packages data={'white'}/>

          <div className='section5'>
            <div className='section5-sub-box'>
              <div className='faq-divider'>
                <div className='faq-1'>
                  <div className='faq-heading'>
                    <p className='faq-heading-text'>Frequently asked questions</p>
                  </div>
                  <div className='faq-text'>
                    <p className='faq-desc'>We've compiled a list of the most commonly asked questions. If you have any other questions, please feel free to reach out to us.</p>
                  </div>
                </div>

                <div className='faq-2'>
                  <div className='faq-qa'>
                    <div className='faq-qas'>
                      <div className='faq-question'>
                        <p>What kind of photos should I upload?</p>
                      </div>
                      <div className='faq-answer'>
                        <p>Upload photos of your face with a variety of facial expressions, backgrounds, lighting and perspective. We recommend 12 close-ups, 3 side  profiles, 5 chest-up photos. Also, please crop the photo such that your face takes up at least 25% of the photo. Avoid headwear, sunglasses, and     minimal makeup. No nudes.</p>
                      </div>
                    </div>
                    <div className='faq-icon'><button className='Button-icon'><i className="fa-solid fa-arrow-right"></i></button></div>
                  </div>
                  <div className='faq-qa'>
                    <div className='faq-qas'>
                      <div className='faq-question'>
                          <p>Deserunt mollit dolore cillum. Exercitation veniam consequat sunt </p>
                      </div>
                    </div>
                    <div className='faq-icon'><button className='Button-icon'><i className="fa-solid fa-arrow-right"></i></button></div>
                  </div>
                  <div className='faq-qa'>
                    <div className='faq-qas'>  
                      <div className='faq-question'>
                          <p>Ullamco est sit aliqua dolor do amet sint. Velit</p>
                      </div>
                    </div>
                    <div className='faq-icon'><button className='Button-icon'><i className="fa-solid fa-arrow-right"></i></button></div>
                  </div>
                  <div className='faq-qa'>
                    <div className='faq-qas'> 
                      <div className='faq-question'>
                          <p>Exercitation veniam consequat sunt</p>
                      </div>
                    </div>
                    <div className='faq-icon'><button className='Button-icon'><i className="fa-solid fa-arrow-right"></i></button></div>
                  </div>
                  <div className='faq-qa'>
                    <div className='faq-qas'>  
                      <div className='faq-question'>
                          <p>UAliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis </p>
                      </div>
                    </div>
                    <div className='faq-icon'><button className='Button-icon'><i className="fa-solid fa-arrow-right"></i></button></div>
                  </div>

                </div>
              </div>
            </div>
          </div>

          <Footer />
      </div>
    </div>
  )
}

export default HomePage

// import React, { useEffect } from 'react';
// import Swiper from 'swiper';
// import 'swiper/css/swiper.min.css';

// // ... (your other imports and component code)

// function HomePage() {
//   useEffect(() => {
//     // Initialize Swiper
//     const swiper = new Swiper('.swiper', {
//       direction: 'vertical',
//       loop: true,
//       pagination: {
//         el: '.swiper-pagination',
//       },
//       navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//       },
//       scrollbar: {
//         el: '.swiper-scrollbar',
//       },
//     });

//     // Return a cleanup function if necessary
//     return () => {
//       swiper.destroy(); // Cleanup Swiper instance when the component unmounts
//     };
//   }, []); // The empty dependency array ensures this effect runs only once on component mount

//   // ... (rest of your component code)
// }
