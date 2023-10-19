import React from 'react'
import '../Styles/Components/Packages.css';

function Packages({data}) {
    // const containerStyle = data === 'white' ? { backgroundColor: data } : { background: data };


  return (
    <div className='section4'>
      <div className='section-four-box'>
        <div className='section-four-heading'>
          <p className='section-four-big-text'>Packages & Pricing</p>
        </div>

        <div className='section-four-text'>
          <p className='section-four-small-text'>One-time payment only.</p>
        </div>

        <div className='section-four-cards'>
          <div className='card-one'>
            <p className='section4-cards-heading'>Intern</p>
            <p className='section4-cards-text'>Intern 7 professional profile photos in small (512x512) format.</p>
            <p className='section4-cards-pricing'>US$21</p>
          </div>
          
          <div className='card-one'>
            <p className='section4-cards-heading'>Professional</p>
            <p className='section4-cards-text'>14 professional shots @ 4K resolution — 7 profile photos (4096x4096) + 7 portrait photos (16:9 aspect ratio).</p>
            <p className='section4-cards-pricing'>US$35</p>
          </div>
          
          <div className='card-one'>
            <p className='section4-cards-heading'>Executive</p>
            <p className='section4-cards-text'>30 professional shots @ 4K resolution — 15 profile photos (4096x4096) + 15 portrait photos (16:9 aspect ratio).</p>
            <p className='section4-cards-pricing'>US$59</p>
          </div>
        </div>
      </div>
  </div>
  )
}

export default Packages