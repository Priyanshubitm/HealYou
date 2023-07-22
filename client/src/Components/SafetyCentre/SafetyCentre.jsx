import React from 'react'
import './SafetyCentre.css'

const SafetyCentre = () => {
  return (
    <div className='Safety'>
        <div className='heading-div'>
          <h3 className='largediv'>HealYou Moderation</h3>

          <p>Keep it clean! No inappropriate sexual content or requests, there's lots of other apps for that! When it comes to suicide and self harm, stick to feelings not methods. Don't post anything graphic and encouraging suicide is illegal and results in an instant ban. Be kind not cruel. Tough love and abuse isn't welcome and we'll remove it. If you see a post, comment or message that is inappropriate, please flag it! If you repeatedly breach our guidelines, we will suspend or ban your account.</p>
        </div>
        <div>
        <h1>Rules For Healthy Engagement</h1>
        <React.Fragment>
          <p>HealYou values your right to share your views and opinions, but not everything is welcome in an online community. If you are spewing hate, trolling, scamming or trying to mess with others - admins have the right to remove your content and your account without discussion. We're a global community and a private company. We reserve the right to run HealYou in a manner that is in line with our mission and values. </p>
          <p>Thoughtful and respectful debate is welcomed on HealYou, as are opposing viewpoints, as long as they are communicated in a respectful manner.</p>
          <p>We will remove any content that violates our community rules below. We will also restrict your access to certain HealYou features if they go against these rules. You may lose the ability to post, comment or use direct messaging for a period of time depending on the rules you violate and any prior offences. HealYou will permanently ban users from the platform if their behaviour warrants such action.  Individuals are notified of our decisions and can appeal them if they believe no violation has occurred.</p>
        </React.Fragment>  
        </div>
        <div>
        <React.Fragment>
          <h3>Boosting Posts</h3>
          <p>All boost requests are reviewed by our admin team.</p>
          <h3>Keep it Safe</h3>
          <p>Keep it safe. We're here to share the ups and the downs, however, we're not a crisis support platform - if you are in a crisis situation please immediately contact local emergency services. You can find more help in the "I need help” section. </p>
          <h3>Use in Moderation</h3>
          <p>We get it, you love HealYou and you love to check in! However, as your mum says, too much of anything will rot your teeth. Make sure you are using HealYou in a healthy way and keeping an eye on the time. We can even help by locking you out for a break option found under settings - ‘take a break’.</p>
          <h3>HealYou is your Community</h3>
          <p>Be authentic and respect it.</p>
          <h3>Enforcement</h3>
          <ul>
            <li>Gentle warnings.</li>
            <li>Moving content to the random feed.</li>
            <li>Locking of posts and commenting.</li>
            <li>Removal of your content.</li>
            <li>Admins asking you to take a break or to calm down.</li>
            <li>Issue a short-term suspension for 2 hours.</li>
          </ul>
          </React.Fragment>
        </div>
    </div>
  )
}

export default SafetyCentre
