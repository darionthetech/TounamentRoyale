import React from 'react';
import './styles/Projects.css';
import background from "./github.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faGithub } from '@fortawesome/free-brands-svg-icons';

//import from react hw assignment 
export default function Contact() {
  return (
<div class="team-grid">
<div class="container">
    <div class="row people d-flex justify-content-center">
        <div class="col-md-4 col-lg-3 item">
            <div class="box" style={{ backgroundImage:`url(${background})` }}>
                <div class="cover">
                    <h3 class="name">Joshua Thomas</h3>
                    <p class="title">Full Stack Web Developer</p>
                    <FontAwesomeIcon icon={faGithub}> </FontAwesomeIcon>
                    <a href='https://github.com'> REPO </a>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-lg-3 item">
            <div class="box" style={{ backgroundImage:`url(${background})` }}>
                <div class="cover">
                    <h3 class="name">Note Taker</h3>
                    <p class="title">My project is about a simple note taker made with Express, you can take as many notes that you want and save them.</p>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                   <a href= 'https://github.com/joshTlil/prepare-to-take-notes'> Repo</a>
                </div>
            </div>
        </div>
        <div class="col-md-4 col-lg-3 item">
            <div class="box" style={{ backgroundImage:`url(${background})` }}>
                <div class="cover">
                    <h3 class="name">Magical Wait Times</h3>
                    <p class="title">The site is about how a user can login and use the Magical Kingdom map to navigate where they want to go,
                    and they can read and write reviews on each individual ride so that the user knows what to aspect. </p>
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    <a href= 'https://github.com/MJGRiley/Magical-Wait-Times'>Repo</a>
                </div>
            </div>
        </div>
    </div>
</div>
</div>

  );
  } 