import React from 'react';
import '../../components/start/landing.css';
import { useNavigate } from 'react-router-dom';

import Svg from '../../assets/SVG.png';
import bgOne from '../../assets/bgImgOne.png';
import bgTwo from '../../assets/bgImgTwo.png';
import Container from '../../assets/Container.png';
import cross from '../../assets/cross.png';
import tick from '../../assets/tick.png';
import arrow from '../../assets/arrow.png';
import FormImage from '../../assets/formImg.png';
import typebot from '../../assets/typebot.png';
import FeatureOne from '../../assets/featureOne.png';
import FeatureTwo from '../../assets/featureTwo.png';
import Tools from '../../assets/tools.png';
import Chat from '../../assets/chat.png';
import oFeatures from '../../assets/oFeatures.png';
import creators from '../../assets/creators.png';


function Landing() {
    const navigate = useNavigate();
    return(
        <div className='landing'>
            {/* navbar */}
            <nav className="nav">
              <div className='nav-left'>
                <img src={Svg} alt="Svg" />
                <p>FormBot</p>
              </div>
              <div className='nav-right'>
                <button className='sign-in-btn nav-btn' onClick={ () => navigate('/Login')} >
                    Sign in
                </button>
                <button className='create-btn nav-btn' onClick={ () => navigate('/Signup')} >
                    Create a FormBot
                </button>
              </div>
            </nav>

            {/* container */}
            <div className='container-landing'>
                <div className='section-intro'>
                    <div className='section-intro-1'>
                        <img src={bgOne} alt="background-1" />
                    </div>
                    <div className='section-intro-2'>
                        <h1 className='section-intro-2-h1' >Build advanced chatboats visually</h1>
                        <p className='section-intro-2-p'>
                            Typebots gives you powerful blocks to create unique chat 
                            chat expriences. Embed them anywhere in your web/mobile 
                            apps and start collecting results like magic.
                        </p>
                        <button className='section-intro-2-btn' onClick={ () => navigate('/Signup')} >
                            Create a FormBot for free
                        </button>
                    </div>
                    <div className='section-intro-3'>
                        <img src={bgTwo} alt="background-2" />
                    </div>
                </div>
                <div className='section-intro-images'>
                    <img src={Container} alt="Container" className='section-intro-image'/>
                </div>
            </div>

            

            {/* advertisement section */}
            <div className='adv'>
                <div className='adv-child'>
                    <div className='advGC-1'>
                        <h1 className='advGC-1-h1'>Replace your old school forms <br /> with
                            <br /> chatbots
                        </h1>
                        <p className='advGC-1-p'>
                        Typebot is a better way to ask for information. 
                        It leads to an increase in customer satisfaction 
                        and retention and multiply by <br /> 3 <br />
                        your conversion rate compared to classical forms.
                        </p>
                    </div>
                    <div className='advGC-2'>
                        <div className='blank'></div>
                        <div className='cross-tick-images'>
                            <img src={cross} alt="cross" className='cross'/>
                            <img src={tick} alt="tick" className='tick'/>
                        </div>
                        <div className='arrow-image'>
                            <img src={arrow} alt="arrow" className='arrow'/>
                        </div>
                    </div>
                    <div className='advGC-3'>
                        <img src={FormImage} alt="form" className='form-image'/>
                        <img src={typebot} alt="typebot" className='typebot'/>
                    </div>
                </div>
            </div>

            {/* featurs section */}
            <div className='features'>
                <img src={FeatureOne} alt="FeatureOne" className='featureOne'/>
                <div className='feature-notes'>
                    <h2 className='feature-notes-h2'>
                        Easy building
                        experience
                    </h2>
                    <p className='feature-notes-p'>
                        All you have to do is drag and
                        drop blocks to create your app.
                        Even if you have custom needs,
                        you can always add custom
                        code.
                    </p>
                </div>
            </div>
            <div className='features'>
                <div className='feature-notes'>
                    <h2 className='feature-notes-h2'>
                        Embed it in a click
                    </h2>
                    <p className='feature-notes-p'>
                        Embedding your typebot in
                        your applications is a walk in
                        the park. Typebot gives you
                        several step-by-step platform-
                        specific instructions. Your
                        typebot will always feel "native".
                    </p>
                </div>
                <img src={FeatureTwo} alt="FeatureTwo" className='featureTwo'/>
            </div>

            {/* tools */}
            <div className='tools'>
                <img src={Tools} alt="tools" className='toolsImage'/>
                <div className='tools-box'>
                    <h2 className='tools-box-h2'>
                        Integrate with any platform
                    </h2>
                    <p className='tools-box-p'>
                        Typebot offers several native integrations blocks as well as instructions on <br />
                        how to embed typebot on particular platforms
                    </p>
                </div>
            </div>

            {/* collections */}
            <div className='collections'>
                <div className='collections-box'>
                    <h1 className='collections-box-h1'>
                        Collect results in real-time
                    </h1>
                    <p className='collections-box-p'>
                        One of the main advantage of a chat application is that you collect the user's responses on each question. <br />
                        <b>You won't lose any valuable data.</b> 
                    </p>
                </div>
                <img src={Chat} alt="chat" className='chat'/>
            </div>

            {/* other features */}
            <div className='otherFeatures'>
                <div className='otherFeatures-box'>
                    <h1 className='otherFeatures-box-h1'>
                        And many more features
                    </h1>
                    <p className='otherFeatures-box-p'>
                        Typebot makes form building easy and comes with powerful features
                    </p>
                </div>
                <img src={oFeatures} alt="other features" className='otherFeatures-image'/>
            </div>

            {/* creators */}
            <div className='creators'>
                <h3 className='creators-h3'>Loved by teams and creators from all around the world</h3>
                <img src={creators} alt="creators" className='creators-img'/>
            </div>

            {/* create formbot */}
            <div className='create-formbot'>
                <div className='create-formbot-1'>
                    <img src={bgOne} alt="bg one" className='create-formbot-1-img'/>
                </div>
                <div className='create-formbot-2'>
                    <h3 className='create-formbot-2-h3'>
                        Improve conversion and user engagement
                        with FormBots 
                    </h3>
                    <button className='create-formbot-2-btn' onClick={ () => navigate('/Signup')} >
                        Create a FormBot
                    </button>
                    <p className='create-formbot-2-p'>
                        No trial. Generous free plan. 

                    </p>
                </div>
                <div className='create-formbot-3'>
                    <img src={bgTwo} alt="bg two" className='create-formbot-3-img'/>
                </div>
            </div>

            {/* footer */}
            <div className='footer'>
                <div className='footer-box'>
                    <div className='footer-box-1'>
                        <p>Made with ❤️ by </p><br /> 
                        <a href=".">@cuvette</a>
                    </div>
                    <div className='footer-box-2'>
                        <a href=".">Status &#x2197;</a> <br />
                        <a href=".">Documentation &#x2197;</a> <br />
                        <a href=".">Roadmap &#x2197;</a> <br />
                        <a href=".">Pricing</a>
                    </div>
                    <div className='footer-box-3'>
                        <a href=".">Discord &#x2197;</a> <br />
                        <a href=".">GitHub repository &#x2197;</a> <br />
                        <a href=".">Twitter &#x2197;</a> <br />
                        <a href=".">Linkedin &#x2197;</a> <br />
                        <a href=".">OSS Friends</a>
                    </div>
                    <div className='footer-box-4'>
                        <a href=".">About</a> <br />
                        <a href=".">Contact</a> <br />
                        <a href=".">Terms of Service</a> <br />
                        <a href=".">Privacy Policy</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Landing;