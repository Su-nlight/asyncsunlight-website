import React from 'react'
import { Helmet } from 'react-helmet'

import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Feature from '../components/feature'
import Offer from '../components/offer'
import './projects-workings.css'

const ProjectsWorkings = (props) => {
  return (
    <div className="projects-workings-container">
      <Helmet>
        <title>Async_Sunlight Website</title>
        <meta property="og:title" content="Async_Sunlight Website" />
      </Helmet>
      
      <Navbar />
      
      <section id="top" className="projects-workings-hero">
        <div className="projects-workings-main">
          <div className="projects-workings-video">
            <video
              src
              poster="/Ext images/girl-7889973-1100h.jpg"
              className="projects-workings-video1"
            ></video>
            <div className="projects-workings-tint"></div>
          </div>
          <div className="projects-workings-content">
            <div className="projects-workings-center">
              <div className="projects-workings-heading">
                <h1 className="projects-workings-header">
                  Completion of a project is just the beginning...
                </h1>
                <p className="projects-workings-caption">
                  All of my life&apos;s substantial projects are listed on this
                  page
                </p>
              </div>
            </div>
          </div>
        </div>
        <div id="features" className="projects-workings-feaures">
          <div className="projects-workings-content1">
            <Feature
              Icon="\Icons\thumbs-up.svg"
              Header="Original Work"
              Description="All the projects and report made by me or my team is a perfectly original sample created."
            ></Feature>
            <Feature
              Icon="https://img.icons8.com/pulsar-color/48/user-group-man-woman.png"
              Header="Team Managing Skills"
              Description="Communication is the key to achieving best potential out of the team."
            ></Feature>
          </div>
        </div>
      </section>
      
      <section id="Projects" className="projects-workings-projects">
        <div className="projects-workings-offers">
        <div className="projects-workings-offer-container">
            <a
              href="/under-development"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-workings-link06"
            >
              <Offer
                Image="/Ext images/data-audit.jpg"
                Heading="Data Auditing Survey Paper"
                Subheading="Data Auditing in Cloud Computing: A Survey"
                Description="This article explores data replication techniques in cloud storage systems, addressing performance, availability, stability, & security. Providing analysis & comparison of strategies, challenges & future research directions."
                rootClassName="offer-root-class-name"
                className="projects-workings-component2"
              ></Offer>
            </a>
        </div>
        <div className="projects-workings-offer-container">
            <a
              href="https://drive.google.com/file/d/1tujgYcVyssySznbf6V-GxyXLZO6wyki5/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-workings-link06"
            >
              <Offer
                Image="/Ext images/keyPass.jpg"
                Heading="KeyESP PassKeep"
                Subheading="Secure & Encrypted Password Management"
                Description="I developed KeyESP PassKeep, a secure, device-based password manager utilizing encrypted storage and BLE access, demonstrating my focus on efficient, hardware-integrated security solutions."
                rootClassName="offer-root-class-name"
                className="projects-workings-component2"
              ></Offer>
            </a>
          </div>
          <div className="projects-workings-offer-container">
            <a
              href="https://github.com/Su-nlight/keylogger"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-workings-link06"
            >
              <Offer
                Image="/Ext images/keylogger.jpg"
                Heading="Simple Keylogger"
                Subheading="Python Based Keylogger"
                Description="This project involves creating keylogger software injected through an ATtiny85 microchip plugged into a USB port, capturing keystrokes from a computer. The system operates stealthily, highlighting the hidden nature of the process."
                rootClassName="offer-root-class-name"
                className="projects-workings-component2"
              ></Offer>
            </a>
          </div>
          <div className="projects-workings-offer-container">
            <a
              href="https://github.com/shvn22k/FinerdAI"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-workings-link06"
            >
              <Offer
                Image="/Ext images/FinerdAI.jpg"
                Heading="FinerdAI App"
                Subheading="Website for Financial Advice"
                Description="FinerdAI is a chatbot built with LangChain, FastAPI, and Google's Generative AI, focused on educating users about financial literacy. It provides clear, detailed answers to finance-related questions while avoiding real-time or outdated info."
                rootClassName="offer-root-class-name"
                className="projects-workings-component2"
              ></Offer>
            </a>
          </div>
          <div className="projects-workings-offer-container">
            <a
              href="https://github.com/Su-nlight/asyncsunlight-website"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-workings-link06"
            >
              <Offer
                Image="/Ext images/program-6944163_1920%20(1)-1500w.jpg"
                Heading="Async_Sunlight (This) Website"
                Subheading="Personal Portfolio"
                Description="I made my portfolio website just to showcase my projects and other things about me without being very personal about my life. By this website I do promote Low-code development provided by many software solutions like, Wix, Webflow, Bootstrap, etc."
                rootClassName="offer-root-class-name"
                className="projects-workings-component2"
              ></Offer>
            </a>
          </div>
          <div className="projects-workings-offer-container1">
            <a
              href="https://drive.google.com/file/d/1sXmIfthU3Zo1IjrWYbBqEdAimpCSgKT7/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-workings-link07"
            >
              <Offer
                Image="/Ext images/plasma-2338669_1920%20(1)-1500w.jpg"
                Heading="Impulse Generator"
                Subheading="High School Physics Project"
                Description="An impulse generator is a device that stores energy in low supply voltages and then discharges it as an electrical impulse in high voltage inverted case for current. This project replicates and demonstrates the same in an easy way and low-scale project."
                className="projects-workings-component3"
              ></Offer>
            </a>
          </div>
          <div className="projects-workings-offer-container2">
            <a
              href="https://github.com/Su-nlight/energyzoids"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-workings-link08"
            >
              <Offer
                Image="/Ext images/pexels-tranmautritam-326514%20(1)-1500w.jpg"
                Heading="Static Website Building"
                Subheading="Energyzoids Event Static Site"
                Description="We created this project for a competition of developing an event website &amp; making it socially active using social media platform Namely Instagram. I developed the static site for it with the help of other team members who provided me with true and actual content."
                className="projects-workings-component4"
              ></Offer>
            </a>
          </div>
          <div className="projects-workings-offer-container3">
            <a
              href="https://drive.google.com/file/d/1-vy46ayVVtuxjvddRkkZK3rGbru1fxz4/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-workings-link09"
            >
              <Offer
                Image="/Ext images/cms-project.jpg"
                Heading="Class Management System"
                Subheading="High School C.S. Project"
                Description="The team developed a Python project with three files, two containing object-oriented functions for database and file processing, and external modules like Asyncio, FastApi, and Pickle. FastApi serves as the base, while Asyncio defines path functions. Pickle handles binary file data processing."
                className="projects-workings-component5"
              ></Offer>
            </a>
          </div>
          <div className="projects-workings-offer-container4">
            <a
              href="https://drive.google.com/file/d/1EkFWyvGF6SVTQm-jEos85BKDuKisbKM3/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-workings-link10"
            >
              <Offer
                Image="/Ext images/pexels-jean-balzan-6820821-1500w.jpg"
                Heading="Interview of a Tour Guide"
                Subheading="High School English Project"
                Description="We conducted an interactive study on travel and exploration. Our expert guides shared their experiences and passion for showcasing the wonders of the world. From hidden gems to historical landmarks, get ready to embark on a captivating journey through their eyes."
                className="projects-workings-component6"
              ></Offer>
            </a>
          </div>
          <div className="projects-workings-offer-container5">
            <a
              href="https://drive.google.com/file/d/1VdH4DTeRRGtZ0AvevRQafI08JeAc3ih1/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-workings-link11"
            >
              <Offer
                Image="/Ext images/saumbudee-dog1-1500w.jpg"
                Heading="Tour Guide Profession Short Report"
                Subheading="Document based on Project"
                Description="This report is a carefully curated study of the lifestyle of the tourist escorts of our northern country and the challenges they potentially face in their day-to-day lives. The group interviewed a few tour guides from various dialects to understand their pandemic challenges."
                className="projects-workings-component7"
              ></Offer>
            </a>
          </div>
          <div className="projects-workings-offer-container6">
            <a
              href="https://drive.google.com/file/d/1P7wBrXo7UhE0G0XU5QHMaL22sT8v0XUF/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-workings-link12"
            >
              <Offer
                Image="/Ext images/pexels-julia-filirovska-7138969%20(1)-1500w.jpg"
                Heading="Preparation of Activated Charcoal"
                Subheading="High School Chemistry Project"
                Description="Activated carbon is made from charcoal through a simple and cheap process. It's a porous form of carbon that's used for water and gas purification. It is often made from waste materials like coconut husks & paper mill waste. It is usually derived from waste products such as coconut husks, waste from paper mills, etc."
                className="projects-workings-component8"
              ></Offer>
            </a>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  )
}

export default ProjectsWorkings