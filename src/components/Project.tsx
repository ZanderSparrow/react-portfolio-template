import React from "react";
import gol from '../assets/images/gol.png';
import shelter from '../assets/images/shelter.png';
import dory from '../assets/images/dory.jpeg';
import pavise from '../assets/images/pavise.png';
import recipe from '../assets/images/recipes.png';
import translawmap from '../assets/images/translawmap.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://zandersparrow.github.io/GoL/" target="_blank" rel="noreferrer"><img src={gol} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://zandersparrow.github.io/GoL/" target="_blank" rel="noreferrer"><h2>Game of Life</h2></a>
                <p>An implementation of Conway's Game of Life using Processing.</p>
            </div>
            <div className="project">
                <a href="https://zandersparrow.github.io/translawmap/" target="_blank" rel="noreferrer"><img src={translawmap} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://zandersparrow.github.io/translawmap/" target="_blank" rel="noreferrer"><h2>Trans Law Map</h2></a>
                <p>A map of trans-related laws across the United States.</p>
            </div>
            <div className="project">
                <a href="https://gist.github.com/ZanderSparrow/069e6b5749c4225352e23375947699e1" target="_blank" rel="noreferrer"><img src={pavise} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://gist.github.com/ZanderSparrow/069e6b5749c4225352e23375947699e1" target="_blank" rel="noreferrer"><h2>Pavise</h2></a>
                <p>A text-based game written in Python</p>
            </div>
            <div className="project">
                <a href="https://grayarea.org/course/creative-code-intensive/" target="_blank" rel="noreferrer"><img src={dory} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://grayarea.org/course/creative-code-intensive/" target="_blank" rel="noreferrer"><h2>Connection Project</h2></a>
                <p>An interactive art installation displayed at Gray Area as part of the creative code intensive exhibition.</p>
            </div>
            <div className="project">
                <a href="https://www.sheltertech.org/" target="_blank" rel="noreferrer"><img src={shelter} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://www.sheltertech.org/" target="_blank" rel="noreferrer"><h2>Ask Darcel App</h2></a>
                <p>A React Native mobile app for Ask Darcel, a project for connecting unhoused people with resources.</p>
            </div>
            <div className="project">
                <a href="https://github.com/ZanderSparrow/django-recipe-api" target="_blank" rel="noreferrer"><img src={recipe} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/ZanderSparrow/django-recipe-api" target="_blank" rel="noreferrer"><h2>Recipe Box</h2></a>
                <p>An API for storing and sharing recipes, built in python with Django.</p>
            </div>
            <div className="project">
                <a href="https://github.com/BuoyantPyramid/Audiopile" target="_blank" rel="noreferrer"><img src="http://i.imgur.com/GhqG14C.png" className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/BuoyantPyramid/Audiopile" target="_blank" rel="noreferrer"><h2>Audiopile</h2></a>
                <p>Application for audio collaboration.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;