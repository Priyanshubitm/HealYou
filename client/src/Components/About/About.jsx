import React from 'react'
import Section from '../Section/Section';
import './About.css';
import img1 from "../../img/Happy-1.jpg"
const AboutHealYou = () => {
  return (
     <div>
       <div className='heading'>
           <h1 >About HealYou</h1>
       </div>
       <div className='AboutApp'>
      <Section
       title='HealYou was created to be a safe place to share the ups and downs of life.'
       content={
        <React.Fragment>
          <p className='par'>Knowing you're not alone is hugely powerful and something many of us desperately need.</p>
          <p className='par'>HealYou will never advertise to you, sell your data or act in a way that would breach your privacy and trust in this community or our team.</p>
          <p className='par'>Our moderation is strict but balanced. Our community guidelines and rules have been designed by the community and are critical to maintaining a healthy community.</p>
          <p className='par'>HealYou is entirely free to use, and we sustain ourselves through angels and licensing similar platforms to universities and corporates like HealCampus. You are not the product and never will be.</p>
          <p className='par'>You are not the product and never will be.</p>
          <p className='par'>I want you to know that we deeply care about this community. We don't get everything right, but we're here to listen and improve where we can. We want you to be a part of this journey and to hold us to account along the way.</p>
          <p className='par'>Much love and welcome to HealYou...</p>
        </React.Fragment>
       }
      />
    </div>
     </div>
   
  )
}

export default AboutHealYou