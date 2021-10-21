import React from "react";
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';

function Footer(){
    return <div className='icons-list'>
        <a className='faLinkedin app-link social-media-list' 
        href='linkedin.com/in/thurston-cox-377a17174' 
        target='_blank' 
        rel='noopender noreferrer'>
            <FontAwesomeIcon icon={faLinkedin} size='2x'/>
        </a>
        <a className='faGitHub app-link social-media-list' 
        href='https://github.com/Thurstoncox3' 
        target='_blank' 
        rel='noopender noreferrer'>
            <FontAwesomeIcon icon={faGithub} size='2x'/>
        </a>
    </div>
};


export default Footer;