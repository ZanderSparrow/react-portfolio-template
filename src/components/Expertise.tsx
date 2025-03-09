import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "Redux",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "Python",
    "Django",
    "Flask",
    "SQL",
    "PostgreSQL",
    "DynamoDB",
    "MongoDB"
];

const labelsSecond = [
    "Git",
    "GitHub Actions",
    "Docker",
    "Kubernetes",
    "AWS",
    "Azure",
    "Linux",
    "Ansible",
];

const labelsThird = [
    "OpenAI",
    "LLM",
    "Azure AI",
    "Amazon Bedrock",
    "Hugging Face",
    "tensorflow",
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I have built production web applications from scratch using technologies such as React, Node, Django, and Flask. I have also worked with complex legacy code, and have worked on internal as well as customer-facing applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Automation</h3>
                    <p>I have deployed numerous applications on AWS using Elastic Beanstalk, Lambda, pipelines, DynamoDB, and RDS, and am Azure certified. I have containerized existing applications, and have built CI/CD pipelines, and automated deployment and testing.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>GenAI & LLM</h3>
                    <p>Stay relevant in the market by leveraging the latest AI models in your projects. I have experience utilizing AI technologies in Python, as well as AWS and Azure services.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;