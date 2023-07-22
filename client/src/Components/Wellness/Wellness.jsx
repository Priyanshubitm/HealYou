import React from 'react';
import { useSelector } from 'react-redux';
import Section from '../Section/Section';

import './Wellness.css';
const Wellness = () => {
    const { user } = useSelector((state) => state.authReducer.authData);
  return (
    <div className='Wellness'>
       <div className='header'>
           <h1>HealYou Wellness Centre</h1>
           <h2>Welcome {user.firstname}</h2>
       </div>
<div className="grid-container">
    <div className='well'>
    <Section 
        title="Self-directed Learning"
        content={
            <React.Fragment>
          <p>
            With all the resources available today, self-learning is no longer an impossible feat as it might have been a few decades ago. With the abundance of free resources online such as online courses, articles, essays, videos, books, and journals, all you need is a proper plan, time, and energy.
            If you are exploring the world of self-learning like many other students and professionals confined to their homes due to the pandemic, here a good way to start.<br></br>
          
          </p>
          <a href="https://creately.com/blog/education/self-learning-techniques-tools/#The%20Ideal%20Self-Learning%20Process">Self Directed Learning</a>
          </React.Fragment>
        }
      />
    </div>
     
      <div className='well'>
      <Section 
        title="Wellbeing and Self-care"
        content={
            <React.Fragment>
          <p>
            Prioritizing your wellbeing and practicing self-care are vital aspects of maintaining good mental health. Our Wellness Center is dedicated to helping you develop healthy habits and strategies that promote overall well-being and self-care.<br></br>
            
          </p>
          <a href="https://creately.com/blog/education/self-learning-techniques-tools/#The%20Ideal%20Self-Learning%20Process">Wellbeing and self care.</a>
          </React.Fragment>
        }
      />
      </div>
      

     
  <div className='well'>
  <Section
        title="Sleep and Well-being"
        content={
          <React.Fragment>
            <p>
              Sometimes, the pace of modern life barely gives you time to stop and rest. It can make getting a good night’s sleep on a regular basis seem like a dream.
              But sleep is as important for good health as diet and exercise. Good sleep improves your brain performance, mood, and health.
              Not getting enough quality sleep regularly raises the risk of many diseases and disorders. These range from heart disease and stroke to obesity and dementia.
            </p>
            <p>
              Our sleep specialists will assess your sleep habits, identify potential sleep disorders or disturbances, and develop personalized sleep plans tailored to your needs. We provide evidence-based strategies and techniques to promote better sleep hygiene, relaxation, and stress management. With improved sleep, you can experience enhanced cognitive function, mood regulation, and a better overall sense of well-being.
            </p>
            <a href="https://www.youtube.com/watch?v=5MuIMqhT8DM">Sleep is your Superpower.</a>
          </React.Fragment>
        }
      />
  </div>
     
   <div className='well'>
   <Section 
        title="Relationships"
        content={
          <React.Fragment>
            <p>
              Building and maintaining healthy relationships is essential for emotional well-being and a sense of belonging. At our Wellness Center, we understand the impact of relationships on mental health and offer guidance to foster positive connections.
            </p>
            <p>
              Our therapists provide individual and couples counseling to address relationship challenges, communication issues, and conflict resolution. We offer a safe space for open dialogue and provide tools to improve interpersonal skills, cultivate empathy, and establish healthy boundaries. Nurturing meaningful relationships can lead to increased happiness, support networks, and improved overall mental health.
            </p>
            <a href="https://www.youtube.com/watch?v=gh5VhaicC6g">Realtionships.</a>
          </React.Fragment>
        }
      />
   </div>
      
    </div>
    </div>
    
  );
};

export default Wellness;