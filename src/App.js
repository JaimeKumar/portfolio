import './App.css';
import $ from 'jquery';

import Project from './Project';

import jaime from './jaime-cropped.png';
import htmlLogo from './html-logo.png';
import cssLogo from './css-logo.png';
import jsLogo from './js-logo.png';
import reactLogo from './react-logo.png';
import pythonLogo from './python-logo.avif';
import nodeLogo from './node-logo.png';
import gitLogo from './git-logo.png';
import linkedinLogo from './linkedin-logo.png';
import emnews from './emnews.png'
import nostars from './nostars.png'
import pastebrush from './pastebrush.png'
import cryptickle from './cryptickle.png'
import track from './track.png'
import eglantine from './eglantine.png'
import { useState } from 'react';

const projects = [
  {
    title: 'Eglantine',
    url: 'https://eglantine.netlify.app/',
    img: eglantine,
    description: "Eglantine is an online store for a luxury clothing brand. With filters to help the user find exactly what they're looking for and a fully functional checkout using Stripe Payment Element, this site provides an elegant and complete shopping experience."
  },
  {
    title: 'EM News',
    url: 'https://em-news.netlify.app/',
    img: emnews,
    description: "Utilising the GNews API to fetch News articles and the IPInfo API to get the user's location, this simple News application was a practice in responsive design. With no media queries I was able to achieve a more responsive UI then I had achieved before, making use of the CSS Clamp function, Grid layouts and flex-wrap."
  },
  {
    title: 'No Stars Studios',
    url: 'https://no-stars.netlify.app/',
    img: nostars,
    description: "No Stars Studios are a London based Recording studio company that I have worked with in my 10+ years working as a Recording Engineer, so I was aware their website needed some help. With a complete redesign, including a redesigned logo, I focused on achieving an impression of luxury and professionalism."
  },
  {
    title: 'Paste Brush',
    url: 'https://paste-brush.netlify.app/',
    img: pastebrush,
    description: 'Having been intrigued by a style of artwork involving repeating images to form a new shape, I set out to create an app that could perform this style of art. The user creates a background, with 1 or more gradient stops. Images can be uploaded, with controls for the size, rotation and repitition-density. The Modulation feature allows the rotation and size to be controlled by an LFO, allowing for more interesting patterns.'
  },
  {
    title: 'Track CMS',
    url: 'https://track-cms.netlify.app/',
    img: track,
    description: 'In my time in the music industry, I noticed when collaborating on projects involving multiple individuals, files often become misplaced and end up scattered across various platforms. To address this problem, I developed a content management system tailored specifically for the music industry. Track CMS provides a centralised platform where all project-related files can be hosted in one place. Everyone involved can access files and engage in productive discussions through the integrated chat feature, ensuring everyone is on the same page.'
  },
  {
    title: 'Cryptickle',
    url: 'https://cryptickle.netlify.app/',
    img: cryptickle,
    description: "Cryptic crosswords, while being fun, can be too difficult and time consuming. Cryptickle is a bite-sized cryptic crossword, or a 'tickle of cryptic'. The objective is to solve the main (down) clue, but for each letter the user can reveal an across clue to help out."
  }
]

function App() {

  const [sideOpen, setSide] = useState(false)

  function hoverStack(which) {
    $(`#${which}Span`).addClass('spanShow');
  }

  function unHoverStack(which) {
    $(`#${which}Span`).removeClass('spanShow')
  }

  function link(where) {
    $(`#${where}`)[0].scrollIntoView();
  }

  function showSideMenu() {
    $('.App').css('transform', `translateX(${sideOpen?100:0}px)`)
    setSide(p => !p)
  }
  
  return (
    <div className="App">
      <div className="sideMenu">
        <ul>
          <li onClick={() => {link('about')}}>
            About
          </li>
          <li onClick={() => {link('projects')}}>
            Projects
          </li>
          <li onClick={() => {link('contact')}}>
            Contact
          </li>
        </ul>
      </div>
      <div id="nav">
        <div className="menu" onClick={showSideMenu}>
          <div className="menuLine"></div>
          <div className="menuLine"></div>
          <div className="menuLine"></div>
        </div>
        <h1 onClick={() => {link('home')}}>jaimekumar.uk</h1>
        <ul>
          <li onClick={() => {link('about')}}>
            About
          </li>
          <li onClick={() => {link('projects')}}>
            Projects
          </li>
          <li onClick={() => {link('contact')}}>
            Contact
          </li>
        </ul>
      </div>
      <div id="home" className='page'>
        <div id="centerCont">
          <div id="centerText">
            <h1>Front-End React Developer</h1>
            <p>Hi there, I'm Jaime Kumar. I'm a passionate and dedicated Front-end React Developer from Slough, United Kingdom.</p>
            <div id="stackIcons">
              <div className="stackImg" onMouseEnter={() => {hoverStack("html")}} onMouseLeave={() => {unHoverStack('html')}} >
                <img src={htmlLogo} alt="html" />
                <span className='stackSpan' id='htmlSpan'>HTML</span>
              </div>
              <div className="stackImg" onMouseEnter={() => {hoverStack("css")}} onMouseLeave={() => {unHoverStack('css')}} >
                <img src={cssLogo} alt="css" />
                <span className='stackSpan' id='cssSpan'>CSS</span>
              </div>
              <div className="stackImg" onMouseEnter={() => {hoverStack("javascript")}} onMouseLeave={() => {unHoverStack('javascript')}} >
                <img src={jsLogo} alt="javascript" />
                <span className='stackSpan' id='javascriptSpan'>JavaScript</span>
              </div>
              <div className="stackImg" onMouseEnter={() => {hoverStack("react")}} onMouseLeave={() => {unHoverStack('react')}} >
                <img src={reactLogo} alt="react" />
                <span className='stackSpan' id='reactSpan'>React</span>
              </div>
              <div className="stackImg" onMouseEnter={() => {hoverStack("node")}} onMouseLeave={() => {unHoverStack('node')}} >
                <img src={nodeLogo} alt="node" />
                <span className='stackSpan' id='nodeSpan'>Node.js</span>
              </div>
              <div className="stackImg" onMouseEnter={() => {hoverStack("python")}} onMouseLeave={() => {unHoverStack('python')}} >
                <img src={pythonLogo} alt="python" />
                <span className='stackSpan' id='pythonSpan'>Python</span>
              </div>
              <div id="divider"></div>
              <a href="https://github.com/JaimeKumar/">
                <img src={gitLogo} alt="git" />
              </a>
              <a href="https://www.linkedin.com/in/jaime-kumar-20a68a269/">
                <img src={linkedinLogo} alt="linked in" />
              </a>
            </div>
          </div>
          <img id="centerImg" src={jaime} alt="me" />
        </div>
      </div>

      <div id='projects' className="page">
        <h1>PROJECTS</h1>
        {projects.map((proj, i) => {
          return <Project project={proj} i={i} />
        })}
      </div>

      <div className="page" id="about">
        <h1>ABOUT ME</h1>
        <br />
        <p>I am a passionate and determined individual aspiring to pursue a career in web development. Despite lacking professional experience and a relevant degree, my relentless drive to learn and grow has propelled me forward in this field. <br /> <br /> 
        Through self-study and hands-on projects, I have acquired a solid foundation in HTML, CSS, and JavaScript. My insatiable curiosity has led me to explore various online resources, coding bootcamps, and engage with developer communities to expand my knowledge and stay up to date with the latest industry trends. <br /><br />  
        While technical skills are important, I believe that adaptability and a willingness to learn are equally crucial. I thrive in dynamic environments, where I can collaborate with diverse teams and embrace new challenges head-on. With a detail-oriented approach and a commitment to delivering high-quality work, I am dedicated to continuous improvement and ensuring the success of every project I undertake.<br /> <br /> 
        Furthermore, my background in mention relevant transferable skills or experiences, such as problem-solving, attention to detail, or teamwork has equipped me with valuable traits that complement my web development aspirations. I am a strong communicator, an effective collaborator, and possess a strong work ethic that drives me to go above and beyond expectations.<br /> <br /> 
        I am excited about the opportunity to contribute my skills and passion to a junior web development role. I am eager to work with a team of talented professionals, learn from their expertise, and make a meaningful impact on projects. My ambition is to grow both professionally and personally, and I am committed to investing the time and effort required to achieve excellence in this field.</p>
      </div>

      <div className="page" id="contact">
        <h1>CONTACT ME</h1>
        <br />

        <div className="contactBlock">
          <p>
            <i class="fa fa-envelope"></i>
            <a href = "mailto: jaime.kumar@hotmail.com">jaime.kumar@hotmail.com</a>
          </p>
          
          <p>
            <i class="fa fa-phone"></i>
            <a href="tel:+447824539722">+44 7824 539 722</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
