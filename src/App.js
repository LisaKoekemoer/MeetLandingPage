import './App.css';
import logo from './images/logo.svg';
import heroLeft from './images/image-hero-left.png'; 
import heroRight from './images/image-hero-right.png'; 
import disImgOne from './images/image-woman-in-videocall.jpg';
import disImgTwo from './images/image-women-videochatting.jpg'; 
import disImgThree from './images/image-men-in-meeting.jpg'; 
import disImgFour from './images/image-man-texting.jpg'; 

function App() {
  return (
    <div className="App">
      <img className='logo' src={logo} alt="" />

      <div className='hero-section'>
        <img className='heroLeft' src={heroLeft} alt="" />
        <div className='product-intro'>
          <h1>Group Chat for Everyone</h1>
          <p>Meet makes it easy to connect with other face-to-face virtually
             and collaborate across any device.</p>
          <div className='product-intro-btn'>
            <button className='download' type='submit' >Download <span>v1.3</span></button>
             <button className='product-info' type='submit' >What is it?</button>
          </div>
        </div>
        <img className='heroRight' src={heroRight} alt="" />
      </div>

      <div className='meet-images'>
        <div className='one'>
          <p>01</p>
        </div>
        <div className='image-display'>
          <img src={disImgOne} alt="" />
          <img src={disImgTwo} alt="" />
          <img src={disImgThree} alt="" />
          <img src={disImgFour} alt="" />
        </div>
      </div>

      <div className='meet-description'>
        <h5>BUILT FOR MODERN USE</h5>
        <h2>Smarter meetings, all in one place</h2>
        <p>Send messages, share files, show your screen, and record your meetings — all in one 
           workspace. Control who can join with invite-only team access, data encryption, 
           and data export.</p>
      </div>

      <div className='meet-footer'>
        <div className='two'>
          <p>02</p>
        </div>
        <div className='footer-info'>
          <h2>Experience more together</h2>
          <p>Stay connected with reliable HD meetings and unlimited one-on-one
             and group video sessions.</p>
          <button className='footer-btn' type='submit' >Download <span>v1.3</span></button>
        </div>
      </div>













    </div>
  );
}

export default App;
