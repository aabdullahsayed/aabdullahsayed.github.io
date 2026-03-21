import './Icon.css';
import React from 'react';
import {FaLinkedinIn, FaGithub, FaEnvelope, FaLinkedin} from "react-icons/fa";
import {SiLeetcode} from "react-icons/si";

function Icon(){
    return(
        <div class="icon">
            <a href="https://github.com/aabdullahsayed" title="Check my commits" target="_blank" rel="noopener noreferrer">
                <FaGithub class="github-icon"/>
            </a>
            <a href="https://www.linkedin.com/in/abdullahsayedchy/" title="Linkedin Profile" target="_blank">
                <FaLinkedin class='linkedin-icon'/>
            </a>
            <a href="mailto:abdullahsayed@tutamailcom" title="Mail me!" target="_blank">
                <FaEnvelope class="envelope-icon"/>
            </a>

        </div>
    );
}
export default Icon;