import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import Testimonal from '../components/testimonal'
import PersonCard from '../components/person-card'
import Card from '../components/card'
import './buddies.css'

const Buddies = (props) => {
  return (
    <div className="buddies-container">
      <Helmet>
        <title>Async_Sunlight Website</title>
        <meta property="og:title" content="Async_Sunlight Website" />
      </Helmet>
      <header data-thq="thq-navbar" className="buddies-navbar">
        <Link to="/" className="buddies-logo">
          <span className="buddies-text">Async</span>
          <span className="buddies-text01">_</span>
          <span>Sunlight</span>
        </Link>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="buddies-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="buddies-nav"
          >
            <Link to="/" className="buddies-navlink button-clean button">
              Home
            </Link>
            <Link
              to="/projects-workings"
              className="buddies-navlink1 button-clean button"
            >
              Projects
            </Link>
            <a href='https://blogs.asyncsunlight.me' 
              target="_blank"
              rel="noreferrer noopener"
              className='buddies-navlink2 button-clean button'>
                Blogs
            </a>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="buddies-btn-group">
          <div className="buddies-socials">
            <button className="social button">
              <a href="mailto:sumitsharmakaen@gmail.com?subject=">
                <svg viewBox="0 0 1024 1024" className="buddies-icon">
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
                  className="buddies-icon02"
                >
                  <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                </svg>
              </a>
            </button>
            <button className="social button">
              <a
                href='https://www.linkedin.com/in/async-sunlight/'
                target="_blank"
                rel="noreferrer noopener">
              <img
                alt="image"
                src="/Icons/linkedin.svg"
                className="home-image"
              />
              </a>
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
                  className="buddies-image1"
                />
              </a>
            </button>
          </div>
          <a
            href="https://www.instagram.com/async_sunlight/"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-view button"
          >
            Follow on Instagram
          </a>
        </div>
        <div data-thq="thq-burger-menu" className="buddies-burger-menu">
          <button className="button buddies-button">
            <svg viewBox="0 0 1024 1024" className="buddies-icon04">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="buddies-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="buddies-nav1"
          >
            <div className="buddies-container1">
              <Link to="/" className="buddies-logo1">
                <span className="buddies-text03">Async</span>
                <span className="buddies-text04">_</span>
                <span className="buddies-text05">Sunlight</span>
              </Link>
              <div data-thq="thq-close-menu" className="buddies-menu-close">
                <svg viewBox="0 0 1024 1024" className="buddies-icon06">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="buddies-nav2"
            >
              <Link to="/" className="buddies-navlink3 button-clean button">
                Home
              </Link>
              <Link
                to="/projects-workings#top"
                className="buddies-navlink3 button-clean button"
              >
                Projects
              </Link>
              <a href='https://blogs.asyncsunlight.me' 
                target="_blank"
                rel="noreferrer noopener"
                className="buddies-navlink3 button-clean button">
                  Blogs
              </a>
            </nav>
            <div className="buddies-container2">
              <a
                href="https://www.instagram.com/async_sunlight/"
                target="_blank"
                rel="noreferrer noopener"
                className="buddies-login button"
              >
                Follow on instagram
              </a>
            </div>
            <div className="buddies-socials1">
              <button className="social button">
                <a href="mailto:sumitsharmakaen@gmail.com?subject=">
                  <svg viewBox="0 0 1024 1024" className="buddies-icon08">
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
                    className="buddies-icon10"
                  >
                    <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                  </svg>
                </a>
              </button>
              <button className="social button">
                <a 
                  href="https://www.linkedin.com/in/async-sunlight/"
                  target="_blank"
                  rel="noreferrer noopener">
                  <img
                    alt="image"
                    src="/Icons/linkedin.svg"
                    className="buddies-image2"
                  />
                </a>
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
                    className="buddies-image3"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>
      <section id="top" className="buddies-hero-section">
        <section className="buddies-join-us">
          <div className="buddies-content">
            <div className="buddies-main">
              <div className="buddies-heading">
                <h2 className="buddies-header">
                  A professional connection is what workaholic people strive
                  for...
                </h2>
                <p className="buddies-caption">
                  Collaborate with me on a casual current or future project
                  where I could be helpful to you.
                </p>
              </div>
              <a
                href="https://www.linkedin.com/in/async-sunlight/"
                className="buddies-view1 button"
              >
                Connect with Me
              </a>
            </div>
            <img
              alt="image"
              src="/Avatars/undraw_engineering_team_a7n2.svg"
              className="buddies-image4"
            />
          </div>
        </section>
      </section>
      <section className="buddies-testimonals">
        <div className="buddies-left">
          <span className="buddies-section section-head">Testimonials</span>
          <span className="buddies-text06 title">
            What my friends say about me
          </span>
          <p className="buddies-paragraph section-description">
            <span>
              Sometimes a good word by friend is all you need to present to
              showcase yourself.
            </span>
            <br></br>
          </p>
        </div>
        <div className="buddies-right">
          <div className="buddies-column">
            <Testimonal
              From="rish_1412"
              Name="Rishabh Jain"
              Quote='"Sumit is an exceptional friend and professional. His unwavering support, empathy, and dedication make him a true gem to have in both personal and work spheres. Highly recommend!"'
              Avatar_alt="Rishabh Jain cute avatar"
              Avatar_src="/Characters/cute%20avatar%20rishabh.svg"
              link_Author="https://x.com/rish_1412"
            ></Testimonal>
            <Testimonal
              From="tek_knight"
              Name="Priyansh Singh"
              Quote='"Sumit is a good coder and an even better friend. He&apos;s funny, kind and always there to help his friends out. Enthusiastic about physics and electronics among other things, he is a great human being."'
              Avatar_alt="Priyansh Singh cute avatar"
              Avatar_src="/Characters/cute%20avatar%20priyansh.svg"
              link_Author="https://www.instagram.com/priyanshsingh7322/"
            ></Testimonal>
            <Testimonal
              From="the_elevated_one"
              Name="Prince Thind"
              Quote='"A humble yet professional young man. It is not common to find someone who is quick with his work and would still bear the mammoth of tasks with utmost elegance. I highly recommend Sumit as an IT professional"'
              Avatar_alt="Prince Thind cute avatar"
              Avatar_src="/Characters/cute%20avatar%20prince.svg"
            ></Testimonal>
            <Testimonal
              From="k_shvn"
              Name="Shiven Shandil"
              Quote='"Sumit is a skilled guy, especially when it comes to  cybersecurity, with a sharp analytical mind and a knack for solving complex problems. His dedication and approachable nature make them a valuable asset in and projects."'
              Avatar_alt="Shiven Shandil cute avatar"
              Avatar_src="/Characters/cute%20avatar%20Shiven.svg"
              link_Author="https://x.com/k_shvn"
            ></Testimonal>
            <Testimonal
              From="Anmol_9784"
              Name="Anmol"
              Quote="&quot;Sumit is a very hardworking and helpful person and always does work with team work. He is always ready to help others and try to solve problems by putting his efforts. He is always ready to take on new challenges and always ready for their outcomes.&quot;"
              Avatar_alt="Anmol cute avatar"
              Avatar_src="/Characters/cute%20avatar%20Anmol.svg"
              link_Author="https://x.com/Anmol_9784"
            ></Testimonal>
          </div>
          <div className="buddies-column1">
            <Testimonal
              From="vivacious_san"
              Name="Sanjana"
              Quote="&quot;Sumit's IT work is remarkable! He demonstrates a keen understanding in the field of electronic physics &amp; programming related topics and consistently delivers top-notch solutions. It's a pleasure to witness his talent and dedication in action.&quot;"
              Avatar_alt="Sanjana cute avatar"
              Avatar_src="/Characters/cute%20avatar%20sanjana.svg"
              link_Author="https://www.instagram.com/vivacious_san/"
            ></Testimonal>
            <Testimonal
              From="akansha2001"
              Name="Akansha Jain"
              Quote='"Sumit is a hardworking individual who courageously takes on responsibilities in any field, wholeheartedly completes the tasks with dedication."'
              Avatar_alt="Akansha jain cute avatar"
              Avatar_src="/Characters/cute%20avatar%20%20akansha.svg"
              link_Author="https://x.com/Akansha2001"
            ></Testimonal>
            <Testimonal
              From="Butter"
              Name="Ankit Thakur"
              Quote='"Sumit is a very consistent individual with a lot of resiliance towards a task. Along with good coding skills, he possesses good soft skills."'
              Avatar_alt="Ankit Thakur cute avatar"
              Avatar_src="/Characters/cute%20avatar%20ankit.svg"
            ></Testimonal>
            <Testimonal
              From="Rohan Sahu"
              Name="Rohan Sahu"
              Quote='"As a long-time friend of Sumit, I have witnessed his journey from a curious technical enthusiast to a talented developer. His website showcases not only his coding prowess but also his passion for technology and towards learning to code languages to level better than his classmates. Sumit’s dedication to refining his work, even when faced with challenges, is truly commendable."'
              Avatar_alt="Rohan Sahu cute avatar"
              Avatar_src="/Characters/cute%20avatar%20rohan%20sahu.svg"
            ></Testimonal>
            <Testimonal
              From="visualter_in"
              Name="Abhishek Sharma"
              Quote='"Sumit is a very compassionate partner who makes working alongside him a peice of cake. Goes above and beyond to ensure the success of the project he works on. His positive demeanour and value for others time always guarantees the best results. A prefect match for any professional endeavour."'
              Avatar_alt="Abhishek Sharma Cute Avatar"
              Avatar_src="/Characters/cute%20avatar%20abhishek.svg"
              link_Author="https://www.instagram.com/visualter_in"
            ></Testimonal>
          </div>
        </div>
        <span className="buddies-text09">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <section id="Buddies" className="buddies-collection">
        <div className="buddies-content1">
          <span className="buddies-caption1">collection of buddies</span>
          <div className="buddies-heading1">
            <h2 className="buddies-header1">My Friends&apos; Catalogue</h2>
            <p className="buddies-header2">
              Only Professional relations are mentioned in this section
            </p>
          </div>
        </div>
        <div className="buddies-cards-container">
        <a
          href="https://www.linkedin.com/in/sanjana-kumari-54a2b5306/"
          target="_blank"
          rel="noreferrer noopener"
          className="buddies-link06">
            <PersonCard
              image="/Characters/cute%20avatar%20sanjana.svg"
              Person="Sanjana"
              image_alt="Sanjana cute avatar"
              description="Sanjana is a passionate and ambitious young artist. She is demonstrating a great enthusiasm to expand her knowledge and skills in the field of art. She is pursuing a Bachelor's degree in Architecture, which aligns perfectly with her deep-rooted passion."
              social_link="https://www.instagram.com/vivacious_san/"
              rootClassName="person-card-root-class-name"
              className="buddies-component08"
            ></PersonCard>
          </a>
          <a
            href="https://www.researchgate.net/publication/349710925_Image_Classification_using_Decision_Trees_with_Clustering_algorithms_PCA"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link06"
          >
            <PersonCard
              Hint="Explore Article"
              image="/Characters/cute%20avatar%20ankit.svg"
              Person="Ankit Thakur"
              image_alt="Ankit thakur cute avatar"
              description="Ankit Thakur has a vast knowledge of programming and is very professional with his work, whether done in a group or solo. He is currently pursuing Bachelor's in Applied Mathematics. This card will directly take you to his Research Article on ResearchGate."
              rootClassName="person-card-root-class-name2"
              className="buddies-component09"
            ></PersonCard>
          </a>
          <Link to="/under-development" className="buddies-navlink7">
            <PersonCard
              image="/Characters/cute%20avatar%20priyansh.svg"
              Person="Priyansh Singh"
              image_alt="Priyansh Singh cute avatar"
              description="In order to obtain a Bachelor of Technology in Computer Science Engineering, Priyansh Singh is currently studying. In terms of software and its other fields, he aspires to be a student and actively engages in extracurricular activities."
              social_link="https://www.instagram.com/priyanshsingh7322/"
              rootClassName="person-card-root-class-name5"
              className="buddies-component10"
            ></PersonCard>
          </Link>
          <a
            href="https://github.com/rish-1412"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link09"
          >
            <PersonCard
              image="/Characters/cute%20avatar%20rishabh.svg"
              Person="Rishabh Jain"
              Hint="Explore Profile"
              image_alt="Rishabh Jain cute avatar"
              description="Rishabh is a great friend who is pursuing B.Sc. (Hons.) in Statistics at Ramanujan College, Delhi University. He's proficient with data & numerical approaches and is keen for growth opportunities. His leadership qualities & spoken communication skills are a boon in handling workload in the team."
              social_link="https://www.linkedin.com/in/rishabh-jain-b6b420286/"
              rootClassName="person-card-root-class-name1"
              className="buddies-component13"
            ></PersonCard>
          </a>
          <a
            href="https://github.com/shvn22k"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link06"
          >
            <PersonCard
              Hint="Explore Profile"
              image="/Characters/cute%20avatar%20Shiven.svg"
              Person="Shiven Shandil"
              image_alt="Shiven Shandil cute avatar"
              social_link="https://www.linkedin.com/in/shiven-k-58b423212/"
              website_link="https://github.com/shvn22k"
              description="Shiven Shandil has a vast knowledge of Machine Learning and is very professional with his work, whether done in a group or solo. He is currently pursuing Bachelor's Comupter Science (AI&ML branch). He helps his team a lot in development of applications based upon ML and python language."
              rootClassName="person-card-root-class-name2"
              className="buddies-component09"
            ></PersonCard>
          </a>
          <a
            href="https://prince-thind.github.io/"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link07"
          >
            <PersonCard
              Hint="Explore Porfolio"
              image="/Characters/cute%20avatar%20prince.svg"
              Person="Prince Thind"
              image_alt="Prince Thind cute avatar"
              description="Prince has pursued Bachelors of technology in Computer Science Engineering and also possesses a vast knowledge of Frontend development. He possesses the ability to create both static and dynamic websites, which is a tough combination to find in young individuals."
              social_link="https://github.com/prince-thind"
              rootClassName="person-card-root-class-name4"
              className="buddies-component11"
            ></PersonCard>
          </a>
          <a
            href="https://github.com/SushantVirghla"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link09"
          >
            <PersonCard
              image="/Characters/cute%20avatar%20Sushant.svg"
              Person="Sushant Virghla"
              Hint="Explore Profile"
              image_alt="Sushant cute avatar"
              description="Sushant is passionate about & around App development, he currently is pursuing B.Tech. in CS Engineering. His desire for exploration of IT systems and developing scalable solutions are quite excellent and strong. He aims to achieve exquisite App development & UI/UX designing skills."
              social_link="https://www.linkedin.com/in/sushant-virghla-b74435329/"
              rootClassName="person-card-root-class-name1"
              className="buddies-component13"
            ></PersonCard>
          </a>
          <a
            href="https://anmolcoder.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link09"
          >
            <PersonCard
              image="/Characters/cute%20avatar%20Anmol.svg"
              Person="Anmol"
              Hint="Explore Porfolio"
              image_alt="Anmol cute avatar"
              description="Anmol is pursuing B.tech in IT Engineering and is very passionate about his work and solutions. He gives his heart into a project he has been assigned or chosen, moreover he has vast knowledge in developing scalable full stack websites. His dynamic approach to work is excuisite"
              social_link="https://www.linkedin.com/in/anmol-776877294"
              rootClassName="person-card-root-class-name1"
              className="buddies-component13"
            ></PersonCard>
          </a>
          <a
            href="https://jakansha2001.github.io/"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link08"
          >
            <PersonCard
              Hint="Explore Portfolio"
              image="/Characters/cute%20avatar%20%20akansha.svg"
              Person="Akansha Jain"
              image_alt="Akansha Jain cute avatar"
              description="Akansha Jain is a very professional cross-platform Flutter developer with excellent skills in multiple languages and also exceptional leadership skills. Her numerous events, which she has hosted in partnership with GDSE and The Flutter Community, have successfully paved the way for many tech enthusiasts."
              social_link="https://github.com/jakansha2001"
              rootClassName="person-card-root-class-name3"
              className="buddies-component12"
            ></PersonCard>
          </a>
          <a
            href="https://www.instagram.com/visualter_in"
            target="_blank"
            rel="noreferrer noopener"
            className="buddies-link09"
          >
            <PersonCard
              image="/Characters/cute%20avatar%20abhishek.svg"
              Person="Abhishek Sharma"
              image_alt="Abhishek Sharma cute avatar"
              description="Abhishek is a professional video and graphics designer residing in Shimla, the capital of Himachal Pradesh. Additionally, he holds the position of administrator for The Discord Server of Himachal Pradesh. In my estimation, his digital art and landscape photographs are the acme of greatness."
              social_link="https://www.instagram.com/visualter_in"
              rootClassName="person-card-root-class-name1"
              className="buddies-component13"
            ></PersonCard>
          </a>
        </div>
      </section>
      <section id="features" className="buddies-section1">
        <header className="buddies-header3">
          <header className="buddies-left1">
            <span className="section-head buddies-section2">
              Tempor incididunt
            </span>
            <h2 className="buddies-heading2 section-heading">
              <span>Meet our network</span>
              <br></br>
              <span>of licensed providers</span>
            </h2>
          </header>
          <div className="buddies-right1">
            <p className="buddies-paragraph1 section-description">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
          </div>
        </header>
        <main className="buddies-cards">
          <Card rootClassName="card-root-class-name"></Card>
          <Card
            Icon="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/524e45c1-0347-49e8-8a2f-1beae49da426/c146e758-32b1-4c16-9456-e1a441900c48?org_if_sml=1380"
            rootClassName="card-root-class-name1"
          ></Card>
          <Card
            Icon="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/524e45c1-0347-49e8-8a2f-1beae49da426/e70214bb-f096-4ff8-8c80-02ea76863af7?org_if_sml=1256"
            rootClassName="card-root-class-name2"
          ></Card>
        </main>
      </section>
      <footer className="buddies-footer">
        <div className="buddies-main1">
          <div className="buddies-branding">
            <div className="buddies-heading3">
              <Link to="/" className="buddies-navlink8">
                <h2 className="buddies-logo2">
                  <span className="buddies-text15">Async</span>
                  <span>_</span>
                  <span className="buddies-text17">Sunlight</span>
                </h2>
              </Link>
              <p className="buddies-caption2">
                <span className="buddies-text18">
                  Life is so short to regret anything, come together,
                </span>
                <br className="buddies-text19"></br>
                <span className="buddies-text20">
                  let us connect I shall always appreciate such connection.
                </span>
                <br className="buddies-text21"></br>
                <br className="buddies-text22"></br>
                <span className="buddies-text23">
                  -----
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="buddies-text24">Sumit Sharma</span>
                <br className="buddies-text25"></br>
              </p>
            </div>
            <div className="buddies-socials2">
              <a
                href="https://github.com/Su-nlight"
                target="_blank"
                rel="noreferrer noopener"
                className="buddies-github2 social button"
              >
                <svg viewBox="0 0 1024 1024" className="buddies-icon12">
                  <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/async-sunlight/"
                target="_blank"
                rel="noreferrer noopener"
                className="buddies-github2 social button">
                <img
                  alt="image"
                  src="/Icons/linkedin.svg"
                  className="buddies-image5"
                />
              </a>
              <a
                href="https://www.discordapp.com/users/727073320557871137"
                target="_blank"
                rel="noreferrer noopener"
                className="buddies-discord2 social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="buddies-image6"
                />
              </a>
            </div>
          </div>
          <div className="buddies-links">
            <div className="buddies-list">
              <h3 className="buddies-heading4">Site</h3>
              <div className="buddies-items">
                <Link to="/" className="buddies-link10 button-clean button">
                  Home
                </Link>
                <Link
                  to="/projects-workings#top"
                  className="buddies-link11 button-clean button"
                >
                  <span>
                    <span>
                      All
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <span>Projects</span>
                  </span>
                </Link>
                <a href='https://blogs.asyncsunlight.me' 
                  target="_blank"
                  rel="noreferrer noopener"
                  className="buddies-link12 button-clean button">
                    Blogs
                </a>
                <a href="#top" className="buddies-link13 button-clean button">
                  To the Page Top
                </a>
              </div>
            </div>
            <div className="buddies-list1">
              <h3 className="buddies-heading5">Connections</h3>
              <div className="buddies-items1">
                <a
                  href="https://www.instagram.com/async_sunlight/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="buddies-link14 button-clean button"
                >
                  Instagram
                </a>
                <a
                  href="https://github.com/Su-nlight"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="buddies-link15 button-clean button"
                >
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/async-sunlight/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="buddies-link15 button-clean button"
                >
                  Linkedin
                </a>
                <a
                  href="mailto:sumitsharmakaen@gmail.com?subject=Reaching out to you"
                  className="buddies-link16 button-clean button"
                >
                  Email
                </a>
                <a
                  href="https://www.discordapp.com/users/727073320557871137"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="buddies-link17 button-clean button"
                >
                  Discord
                </a>
              </div>
            </div>
          </div>
          <div className="buddies-socials3">
            <a
              href="https://github.com/Su-nlight"
              target="_blank"
              rel="noreferrer noopener"
              className="buddies-github2 social button">
                <svg viewBox="0 0 1024 1024" className="buddies-icon12">
                  <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/async-sunlight/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-twitter3 social button">
              <img
                alt="image"
                src="/Icons/linkedin.svg"
                className="home-image24"
              />
            </a>
            <a
              href="https://www.discordapp.com/users/727073320557871137"
              target="_blank"
              rel="noreferrer noopener"
              className="buddies-discord3 social button">
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="buddies-image8"
              />
            </a>
          </div>
        </div>
        <span className="buddies-copyright">
          © 2025 Sumit Sharma (Async_Sunlight) . All Rights Reserved.
        </span>
      </footer>
    </div>
  )
}

export default Buddies
