import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="2024 - present"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Senior Analyst, Engineer</h3>
            <h4 className="vertical-timeline-element-subtitle">Valtech</h4>
            <p>
              <span className="vertical-timeline-description">Internal aerospace tools.</span> TypeScript, React, Python, AWS Lambda, Cloud Formation, Elastic Beanstalk, API Gateway, DynamoDB
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2021 - 2023"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Lead Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">CareCopilot</h4>
            <p>
            <span className="vertical-timeline-description">Help for caregivers.</span> React, Redux, Django, PostGreSQL, RDS, AWS, Docker, Mentoring, Team Leading
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - 2020"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Back End Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Britelite Immersive</h4>
            <p>
            <span className="vertical-timeline-description">Interactive art installations.</span> Python, Flask, Docker, Kubernetes, Ansible, Proxmox, Arduino
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2018 - 2019"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Machinist</h3>
            <h4 className="vertical-timeline-element-subtitle">Modbot</h4>
            <p>
            <span className="vertical-timeline-description">Robotics manufacturing.</span> Automation, Jenkins, soldering, inventory management, Python, BASH
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2018"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Assembler</h3>
            <h4 className="vertical-timeline-element-subtitle">DJ TechTools</h4>
            <p>
              <span className="vertical-timeline-description">Midi controller assembly.</span> Soldering, inventory management, BASH
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2016"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
            <h4 className="vertical-timeline-element-subtitle">Scalable Press</h4>
            <p>
              <span className="vertical-timeline-description">On-demand t-shirt printing.</span> React, Redux, Material UI, Angular, Node.js, MongoDB
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;