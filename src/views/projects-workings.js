import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Feature from '../components/feature'
import Offer from '../components/offer'
import './projects-workings.css'

const ProjectsWorkings = (props) => {
  return (
    <div className="projects-workings-container">
      <Helmet>
        <title>projects-workings - Character NFT template</title>
        <meta
          property="og:title"
          content="projects-workings - Character NFT template"
        />
      </Helmet>
      <header data-thq="thq-navbar" className="projects-workings-navbar">
        <Link to="/" className="projects-workings-logo">
          <span className="projects-workings-text">Async</span>
          <span className="projects-workings-text01">_</span>
          <span>Sunlight</span>
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="projects-workings-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="projects-workings-nav"
          >
            <Link
              to="/"
              className="projects-workings-navlink button-clean button"
            >
              Home
            </Link>
            <Link
              to="/buddies"
              className="projects-workings-navlink1 button-clean button"
            >
              Buddies
            </Link>
            <Link
              to="/under-development"
              className="projects-workings-navlink2 button-clean button"
            >
              Digital Writings
            </Link>
          </nav>
        </div>
        <div
          data-thq="thq-navbar-btn-group"
          className="projects-workings-btn-group"
        >
          <div className="projects-workings-socials">
            <button className="social button">
              <a href="mailto:sumitsharmakaen@gmail.com?subject=">
                <svg viewBox="0 0 1024 1024" className="projects-workings-icon">
                  <path d="M854 256q34 0 59 26t25 60v512q0 34-25 59t-59 25h-684q-34 0-59-25t-25-59v-512q0-34 25-60t59-26h86v-256h342v170h-256v342h84v-256h428z"></path>
                </svg>
              </a>
            </button>
            <button className="social button">
              <a
                href="https://github.com/Su-nlight"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="projects-workings-icon02"
                >
                  <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                </svg>
              </a>
            </button>
            <button className="social button">
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="projects-workings-image"
              />
            </button>
            <button className="social button">
              <a
                href="https://www.discordapp.com/users/727073320557871137"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="projects-workings-image1"
                />
              </a>
            </button>
          </div>
          <a
            href="https://www.instagram.com/async_sunlight/"
            target="_blank"
            rel="noreferrer noopener"
            className="projects-workings-view button"
          >
            Follow on Instagram
          </a>
        </div>
        <div
          data-thq="thq-burger-menu"
          className="projects-workings-burger-menu"
        >
          <button className="button projects-workings-button">
            <svg viewBox="0 0 1024 1024" className="projects-workings-icon04">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div
          data-thq="thq-mobile-menu"
          className="projects-workings-mobile-menu"
        >
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="projects-workings-nav1"
          >
            <div className="projects-workings-container1">
              <Link to="/" className="projects-workings-logo1">
                <span className="projects-workings-text03">Async</span>
                <span className="projects-workings-text04">_</span>
                <span className="projects-workings-text05">Sunlight</span>
              </Link>
              <div
                data-thq="thq-close-menu"
                className="projects-workings-menu-close"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="projects-workings-icon06"
                >
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="projects-workings-nav2"
            >
              <Link
                to="/"
                className="projects-workings-navlink3 button-clean button"
              >
                <span className="projects-workings-text06">Home</span>
                <br></br>
              </Link>
              <Link
                to="/buddies"
                className="projects-workings-navlink4 button-clean button"
              >
                Buddies
              </Link>
              <Link
                to="/under-development"
                className="projects-workings-navlink5 button-clean button"
              >
                Digital Writings
              </Link>
            </nav>
            <div className="projects-workings-container2">
              <a
                href="https://www.instagram.com/async_sunlight/"
                target="_blank"
                rel="noreferrer noopener"
                className="projects-workings-login button"
              >
                Follow on instagram
              </a>
            </div>
            <div className="projects-workings-socials1">
              <button className="social button">
                <a href="mailto:sumitsharmakaen@gmail.com?subject=">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="projects-workings-icon08"
                  >
                    <path d="M854 256q34 0 59 26t25 60v512q0 34-25 59t-59 25h-684q-34 0-59-25t-25-59v-512q0-34 25-60t59-26h86v-256h342v170h-256v342h84v-256h428z"></path>
                  </svg>
                </a>
              </button>
              <button className="social button">
                <a
                  href="https://github.com/Su-nlight"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="projects-workings-icon10"
                  >
                    <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                  </svg>
                </a>
              </button>
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="projects-workings-image2"
                />
              </button>
              <button className="social button">
                <a
                  href="https://www.discordapp.com/users/727073320557871137"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <img
                    alt="image"
                    src="/Icons/discord.svg"
                    className="projects-workings-image3"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>
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
              Icon="https://img.icons8.com/external-filled-line-andi-nur-abdillah/64/external-Patent-law-and-justice-(filled-line)-filled-line-andi-nur-abdillah.png"
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
              href="https://github.com/Su-nlight/Su-nlight"
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
                Description="We created this project for a competition of developing an event website &amp; making it socially active using social media. I developed the static site for it with the help of other team members who provided me with true and actual content."
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
                Image="https://cdn.discordapp.com/attachments/772070695152123925/1135573104740020254/1690812365023.jpg"
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
                Description="This report is a carefully curated study of the lifestyle of the tourist escorts of our country and the challenges they face in their day-to-day lives. The group interviewed tour guides from various dialects to understand their pandemic challenges."
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
                Description="Activated carbon is made from charcoal through a simple and cheap process. It's a porous form of carbon that's used for water and gas purification. Activated carbon is often made from waste materials like coconut husks and paper mill waste. It is usually derived from waste products such as coconut husks, waste from paper mills, etc."
                className="projects-workings-component8"
              ></Offer>
            </a>
          </div>
        </div>
      </section>
      <footer className="projects-workings-footer">
        <div className="projects-workings-main1">
          <div className="projects-workings-branding">
            <div className="projects-workings-heading1">
              <h2 className="projects-workings-logo2">
                <span className="projects-workings-text08">Async</span>
                <span>_</span>
                <span className="projects-workings-text10">Sunlight</span>
              </h2>
              <p className="projects-workings-caption1">
                <span className="projects-workings-text11">
                  Life is so short to regret anything, come together,
                </span>
                <br className="projects-workings-text12"></br>
                <span className="projects-workings-text13">
                  let us connect I shall always appreciate such connection.
                </span>
                <br className="projects-workings-text14"></br>
                <br className="projects-workings-text15"></br>
                <span className="projects-workings-text16">
                  -----
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="projects-workings-text17">Sumit Sharma</span>
                <br className="projects-workings-text18"></br>
              </p>
            </div>
            <div className="projects-workings-socials2">
              <a
                href="https://github.com/Su-nlight"
                target="_blank"
                rel="noreferrer noopener"
                className="projects-workings-github2 social button"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  className="projects-workings-icon12"
                >
                  <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                </svg>
              </a>
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="projects-workings-image4"
                />
              </button>
              <a
                href="https://www.discordapp.com/users/727073320557871137"
                target="_blank"
                rel="noreferrer noopener"
                className="projects-workings-discord2 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="projects-workings-image5"
                />
              </a>
            </div>
          </div>
          <div className="projects-workings-links">
            <div className="projects-workings-list">
              <h3 className="projects-workings-heading2">Site</h3>
              <div className="projects-workings-items">
                <Link
                  to="/"
                  className="projects-workings-link13 button-clean button"
                >
                  Home
                </Link>
                <Link
                  to="/buddies"
                  className="projects-workings-link14 button-clean button"
                >
                  Buddies
                </Link>
                <Link
                  to="/under-development"
                  className="projects-workings-link15 button-clean button"
                >
                  Digital Writings
                </Link>
                <button className="projects-workings-link16 button-clean button">
                  <a href="#top" className="projects-workings-link17">
                    <span className="projects-workings-text19">
                      To the page top
                    </span>
                    <br></br>
                  </a>
                </button>
              </div>
            </div>
            <div className="projects-workings-list1">
              <h3 className="projects-workings-heading3">Connections</h3>
              <div className="projects-workings-items1">
                <a
                  href="https://www.instagram.com/async_sunlight/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="projects-workings-link18 button-clean button"
                >
                  Instagram
                </a>
                <a
                  href="https://github.com/Su-nlight"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="projects-workings-link19 button-clean button"
                >
                  Github
                </a>
                <a
                  href="mailto:sumitsharmakaen@gmail.com?subject=Reaching out to you"
                  className="projects-workings-link20 button-clean button"
                >
                  Email
                </a>
                <a
                  href="https://www.discordapp.com/users/727073320557871137"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="projects-workings-link21 button-clean button"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>
          <div className="projects-workings-socials3">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-workings-twitter3 social button"
            >
              <img
                alt="image"
                src="/Icons/twitter.svg"
                className="projects-workings-image6"
              />
            </a>
            <a
              href="https://discord.com"
              target="_blank"
              rel="noreferrer noopener"
              className="projects-workings-discord3 social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="projects-workings-image7"
              />
            </a>
          </div>
        </div>
        <span className="projects-workings-copyright">
          © 2023 Sumit Sharma (Async_Sunlight) . All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default ProjectsWorkings
