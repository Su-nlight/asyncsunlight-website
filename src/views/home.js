import React from 'react'
import { Link } from 'react-router-dom'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ProjectCard from '../components/project-card'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Async_Sunlight Website</title>
        <meta property="og:title" content="Async_Sunlight Website" />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar">
        <span className="home-logo">
          <span className="home-text">Async</span>
          <span className="home-text01">_</span>
          <span>Sunlight</span>
        </span>
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          >
            <a href="#Me" className="home-link button-clean button">
              Character
            </a>
            <a href="#collection" className="home-link01 button-clean button">
              Projects
            </a>
            <Link to="/buddies#top" className="home-navlink button-clean button">
              Buddies
            </Link>
            <a href='https://blogs.asyncsunlight.me' 
              target="_blank"
              rel="noreferrer noopener"
              className="home-navlink1 button-clean button">
                Blogs
            </a>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group">
          <div className="home-socials">
            <button className="social button">
              <a href="mailto:sumitsharmakaen@gmail.com?subject=">
                <svg viewBox="0 0 1024 1024" className="home-icon">
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
                  className="home-icon02"
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
                  className="home-image01"
                />
              </a>
            </button>
          </div>
          <a
            href="https://www.instagram.com/async_sunlight/"
            target="_blank"
            rel="noreferrer noopener"
            className="home-view button"
          >
            Follow on Instagram
          </a>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <button className="button home-button">
            <svg viewBox="0 0 1024 1024" className="home-icon04">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container1">
              <span className="home-logo1">
                <span className="home-text03">Async</span>
                <span className="home-text04">_</span>
                <span className="home-text05">Sunlight</span>
              </span>
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon06">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <a href="#Me" className="home-link05 button-clean button">
                Charachter
              </a>
              <a href="#collection" className="home-link05 button-clean button">
                Projects
              </a>
              <Link
                to="/buddies#top"
                className="home-link05 button-clean button"
              >
                Buddies
              </Link>
              <a href='https://blogs.asyncsunlight.me' 
                target="_blank"
                rel="noreferrer noopener"
                className="home-link05 button-clean button">
                  Blogs
              </a>
            </nav>
            <div className="home-container2">
              <a
                href="https://www.instagram.com/async_sunlight/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-login button"
              >
                Follow on instagram
              </a>
            </div>
            <div className="home-socials1">
              <button className="social button">
                <a href="mailto:sumitsharmakaen@gmail.com?subject=">
                  <svg viewBox="0 0 1024 1024" className="home-icon08">
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
                    className="home-icon10"
                  >
                    <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                  </svg>
                </a>
              </button>
              <button className="social button">
                <img
                  alt="image"
                  src="/Icons/twitter.svg"
                  className="home-image02"
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
                    className="home-image03"
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </header>
      <section id="top" className="home-hero">
        <div className="home-heading">
          <h1 className="home-header comic">
            <span>A dendrophile and the life of a party, when I am not attached to my screen</span>
            <br className="comic"></br>
          </h1>
          <p className="home-caption">
          Albeit an open book there are so many more sides to me that only 
          my dearest friends came across…<br></br>let's take a deep dive into it.
          </p>
        </div>
        <div className="home-buttons">
          <a href="#collection" className="home-view1 button">
            Learn more about projects
          </a>
          <a href="#Me" className="home-link10">
            <div className="home-get-started button">
              <span className="home-text08">Learn more about me</span>
            </div>
          </a>
        </div>
      </section>
      <section className="home-description">
        <img
          alt="Banner Image"
          src="/Ext images/banner-1500w.png"
          loading="eager"
          className="home-divider-image"
        />
        <div id="Me" className="home-container3">
          <div className="home-description01">
            <div className="home-content">
              <p className="home-paragraph">
                <span className="home-text09">Hello there!</span>
                <br className="home-text10"></br>
                <br className="home-text11"></br>
                <span className="home-text12">I&apos;m</span>
                <span className="home-text13">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text14">Sumit Sharma</span>
                <br></br><br></br>
                <p className="home-paragraph">
                  I have profound knowledge of I.T. stuff, application
                  programming, user interface designing, Video and photography
                  and most importantly how to keep good friendship.
                  <br></br><br></br>
                  I&apos;m a backend developer, UI/UX designer and most
                  importantly an extrovert who likes to party. Pay a visit to my
                  hometown. There you&apos;ll experience the best place to
                  experience new sense of friendship.
                </p>
              </p>
            </div>
            <div className="home-links">
              <a
                href="mailto:sumitsharmakaen@gmail.com?subject=Let us connect and collab with our work"
                className="home-link11 button-link button"
              >
                <span className="home-text19">Request a collab with me</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow"
                />
              </a>
              <a
                href="https://www.discordapp.com/users/727073320557871137"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link12 button-link button"
              >
                <span className="home-text20">Join me on Discord</span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-arrow1"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-interests">
        <div className="home-cinephile">
          <div className="home-content01">
            <span className="home-caption1">Cinephile</span>
            <div className="home-heading01">
              <h2 className="home-header01">
                Movies have a great effect on you
              </h2>
              <p className="home-header02">
                <span className="home-text21">
                  Movies and the internet are getting people together. Experts
                  have shown that those who suffer from social anxieties and
                  find it challenging to find a common language with others can
                  overcome these obstacles by watching movies. A film is always
                  an excellent opportunity to meet new people and to strengthen
                  relationships with old friends.
                  <br></br><br></br>
                  Our favourite characters, superheroes, teach us life lessons.
                  They give us ideas and inspiration to do everything for the
                  better instead of just sitting around, waiting for things to
                  go their way. Films about famous personalities are the perfect
                  way to affect social behaviour positively.
                  <br></br><br></br>
                  Films are a source of knowledge. They can help learn what’s in
                  the trend, find out more about ancient times, or fill out some
                  knowledge gaps.
                  <br></br><br></br>
                  ----- Says Times of india
                  <br></br><br></br>
                  Words indeed are not mine but the feeling is rather the same,
                  I love many of movies and also great TV shows...
                </span>
              </p>
            </div>
            <a
              href="https://timesofindia.indiatimes.com/readersblog/ajaytalks/the-positive-effects-of-movies-on-human-behaviour-25678/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view2 button-link button"
            >
              <span className="home-text31">Link to the article</span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home-image04"
              />
            </a>
          </div>
          <img
            alt="movies"
            src="/Avatars/undraw_netflix_q-00-o.svg"
            loading="eager"
            className="home-image05"
          />
        </div>
        <div className="home-nemophilist">
          <img
            alt="great view"
            src="/Avatars/undraw_before_dawn_re_hp4m.svg"
            className="home-image06"
          />
          <div className="home-content02">
            <span className="home-caption2">Nemophilist</span>
            <div className="home-heading02">
              <h2 className="home-header03">
                <span>Nature &amp; Mountains are my love</span>
                <br></br>
              </h2>
              <p className="home-header04">
                <span>
                  Born in Delhi, India but being a Himachali I feel like life is
                  beautiful in the mountains. I hail from the Kangra district of
                  Himachal Pradesh, and being raised there for 4 years seems
                  magnificent to me now. Tourism in my hometown is a
                  forever-lasting one, For people like me who love the mountain
                  ranges and the peacefulness of those places it is like a
                  heaven.
                  <br></br><br></br>
                  The only problem I think persists there is the more and more
                  construction and litter taking place that seems to have taken
                  over the city. That is why there is a need of some NGOs that
                  take care with that. No hard feelings, but sometimes the
                  forest range burns due to one cigeratte thrown by tourists.
                </span>
              </p>
            </div>
            <div className='home-links'>
            <a
              href="https://www.instagram.com/dhauladharcleaners"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view3 button-link button"
            >
              <span className="home-text38">
                People who keep my Hometown clean
              </span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home-image07"
              />
            </a>
            <a
              href="https://www.instagram.com/wastewarriors"
              target="_blank"
              rel="noreferrer noopener"
              className="home-view4 button-link button"
            >
              <span className="home-text39">
                People helping the mountains stay clean
              </span>
              <img
                alt="image"
                src="/Icons/arrow.svg"
                className="home-image08"
              />
            </a>
            </div>
          </div>
        </div>
      </section>
      <section className="home-qualifications">
        <div className="home-heading03">
          <h2 className="home-header05">My Qualifications</h2>
          <p className="home-header06">
            Here is my Official qualifications that I have achieved over these
            academic years of mine...
          </p>
        </div>
        <div className="home-list">
          <div className="home-step">
            <span className="home-caption1">01</span>
            <div className="home-heading04">
              <h2 className="home-header07">CBSE 10th Grade</h2>
              <p className="home-header08">
                Got an overall percentage of 90.2% . Actually, at that time
                board actual exams were cancelled and we were given this
                percentage not the basis of any exam rather than our old results
                analysed and by our teacher&apos;s wish, this is how I got to
                choose Science Stream.
              </p>
            </div>
          </div>
          <div className="home-step1">
            <span className="home-caption1">02</span>
            <div className="home-heading05">
              <h2 className="home-header09">CBSE 12th Grade</h2>
              <p className="home-header10">
                  Got an overall percentage of 92%. In few terms it indeed is
                  actually a nice and descent score but my many of the
                  classmates scored more than me, thus I am not the best of my
                  so called batchmates.
                  <br></br>
                  Also, Completed both of above listed qualification from DAV
                  Noida.
              </p>
            </div>
          </div>
          <div className="home-step2">
            <span className="home-caption1">03</span>
            <div className="home-heading06">
              <h2 className="home-header11">Got into AKTU University</h2>
              <p className="home-header12">
                <span className="home-text44">
                  I am currently Pursuing Computer Science 
                  Engineering from G.L. Bajaj Institute of Technology, 
                  even though I personally am not doing very well in academics
                  but my collegues are pretty decent.<br></br>
                  I am trying my best to be part of the communities here yet 
                  most of the things still works discretely. <br></br>
                  Ending thoughts? Umm... Find your best version yourself rather to relying on your college.
                </span>
              </p>
            </div>
          </div>
          <div className="home-step3">
            <span className="home-caption1">04</span>
            <div className="home-heading07">
              <h2 className="home-header13">Other Qualifications</h2>
              <p className="home-header14">
                I am very qualified in terms of online free resources only, not
                very qualified but it would work quite well thou...
              </p>
              <div className="home-benefits">
              <a
                  href="https://www.credly.com/badges/update"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <div className="home-item3">
                    <img
                      alt="Technology"
                      src="https://img.icons8.com/clouds/48/cyber-security.png"
                      className="home-image12"
                    />
                    <p className="home-header18">
                      Career Essentials in Cybersecurity by Microsoft and LinkedIn
                    </p>
                  </div>
              </a>
              <a
                  href="https://www.credly.com/badges/8e098956-6f6f-48d2-9519-892a226d5137"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <div className="home-item3">
                    <img
                      alt="Technology"
                      src="https://img.icons8.com/pulsar-color/48/security-shield-green.png"
                      className="home-image12"
                    />
                    <p className="home-header18">
                      Cybersecurity Fundamentals by IBM
                    </p>
                  </div>
                </a>
                <a
                  href="https://app.cybrary.it/courses/api/certificate/CC-6626e529-9bda-4ecb-a7e1-875d4c2eb491/view"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <div className="home-item3">
                    <img
                      alt="Technology"
                      src="https://img.icons8.com/pulsar-color/48/security-shield-green.png"
                      className="home-image12"
                    />
                    <p className="home-header18">
                      Entry-Level Cybersecurity Training by Cybrary
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.credly.com/badges/e796f97b-93df-4d87-9438-adbb233b899f/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <div className="home-item3">
                    <img
                      alt="Technology"
                      src="https://img.icons8.com/pulsar-color/48/security-shield-green.png"
                      className="home-image12"
                    />
                    <p className="home-header18">
                      Introduction to Cybersecurity by Cisco NetAcad
                    </p>
                  </div>
                </a>
                <a
                  href="https://skillsoft.digitalbadges.skillsoft.com/923f163a-ffaa-436d-9ca1-8763180f76d1"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <div className="home-item3">
                    <img
                      alt="Technology"
                      src="https://img.icons8.com/dusk/48/engineering.png"
                      className="home-image12"
                    />
                    <p className="home-header18">
                    Security for Engineering Leaders by SkillSoft
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.freecodecamp.org/certification/Su-nlight/scientific-computing-with-python-v7"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link13"
                >
                  <div className="home-item">
                    <img
                      alt="image"
                      src="https://img.icons8.com/color/48/python--v1.png"
                      loading="eager"
                      className="home-image09"
                    />
                    <p className="home-header15">
                      Python qualification from Free Code Camp 
                    </p>
                  </div>
                </a>
                <div className="home-item1">
                  <img
                    alt="image"
                    src="https://img.icons8.com/color/48/python--v1.png"
                    className="home-image10"
                  />
                  <p className="home-header16">
                    Python Core qualification from Sololearn
                  </p>
                </div>
                <a
                  href="https://www.sololearn.com/certificates/CT-U2NNQ9LE"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link14"
                >
                  <div className="home-item2">
                    <img
                      alt="external-sql-computer-programming-flaticons-lineal-color-flat-icons"
                      src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-sql-computer-programming-flaticons-lineal-color-flat-icons.png"
                      className="home-image11"
                    />
                    <p className="home-header17">
                      SQL qualification from Sololearn
                    </p>
                  </div>
                </a>
                <a
                  href="https://www.sololearn.com/certificates/CC-5GSKNCNE"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link15"
                >
                  <div className="home-item3">
                    <img
                      alt="Technology"
                      src="https://img.icons8.com/clouds/48/technology.png"
                      className="home-image12"
                    />
                    <p className="home-header18">
                      Tech for Everyone qualification from Sololearn
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="collection" className="home-collection">
        <div className="home-content03">
          <span className="home-caption1">collection of Past workings</span>
          <div className="home-heading08">
            <h2 className="home-header19">Past Projects on Display</h2>
            <p className="home-header20">
              Only the best of mine are on display, of-course this is clearly to
              swank about of...
            </p>
          </div>
        </div>
        <div className="home-main">
          <a
            href="https://github.com/shvn22k/FinerdAI"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProjectCard
              Name="FinerdAI : Financial Litteracy Chatbot"
              Image_alt="External AI Computer"
              Image_src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/200/external-ai-computer-and-laptop-itim2101-lineal-color-itim2101.png"
              Description="GFG Finale Noida Project"
              rootClassName="project-card-root-class-name"
              className="home-component1"
            ></ProjectCard>
          </a>
          <a
            href="/under-development"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProjectCard
              Name="Survey Paper on Data Auditing in Cloud Computing"
              Image_alt="Business Report"
              Image_src="https://img.icons8.com/plasticine/200/business-report.png"
              Description="A Research Paper Presented in ICDT2025"
              rootClassName="project-card-root-class-name2"
              className="home-component2"
            ></ProjectCard>
          </a>
          <a
            href="https://drive.google.com/file/d/1tujgYcVyssySznbf6V-GxyXLZO6wyki5/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProjectCard
              Name="Making & Implementing Secure ESP Device"
              Image_alt="Keyboard"
              Image_src="https://img.icons8.com/dusk/200/keyboard.png"
              Description="Bachelor's Degree Mini Project"
              rootClassName="project-card-root-class-name3"
              className="home-component3"
            ></ProjectCard>
          </a>
          <a
            href="https://drive.google.com/file/d/1sXmIfthU3Zo1IjrWYbBqEdAimpCSgKT7/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
          >
            <ProjectCard
              Name="Demonstration &amp; building Impulse Generator"
              Image_alt="Electricity Hazard Sign"
              Image_src="https://img.icons8.com/plasticine/250/electricity-hazard.png"
              Description="High School Physics Project"
              rootClassName="project-card-root-class-name1"
              className="home-component"
            ></ProjectCard>
          </a>
        </div>
        <Link to="/projects-workings#top" className="home-view5 button-link button">
          View all
        </Link>
      </section>
      <section className="home-blog-card">
        <div className="home-row">
          <div className="home-card">
            <div className="home-avatar">
              <img
                alt="Chat doodle"
                src="https://img.icons8.com/office/64/chat.png"
                className="home-avatar1"
              />
            </div>
            <div className="home-main1">
              <div className="home-content04">
                <h2 className="home-header21">Anonymously send messages to me</h2>
                <p className="home-description02">
                  <span>
                    You can send me message via 3CX client on the web client by clicking the url link that has been attached below.
                  <br></br>
                    This chat is realtime and i may not be available mostly but you can drop any number of messages you want. I will make sure to go through them.
                    If you want me to connect back to you either you can mail me or send me your prefered ID for chat.
                  </span>
                  <br></br>
                  <br></br>
                </p>
              </div>
              <a href="https://1741.3cx.cloud/asyncsunlight" target="_blank"
                  rel="noreferrer noopener" className="home-learn button">
                <span className="home-text55">
                  3CX Live Chat to Me
                </span>
                <img
                  alt="image"
                  src="/Icons/arrow.svg"
                  className="home-image13"
                />
              </a>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-avatar2">
              <img
                alt="resume"
                src="https://img.icons8.com/glyph-neue/100/resume.png"
                className="home-avatar3"
              />
            </div>
            <div className="home-main2">
              <div className="home-content05">
                <h2 className="home-header22">Interested in knowing me Professionally?</h2>
                <p className="home-description03">
                  I have attached the link to my CV so that you can check it out it may contain 
                  the same things as my LinkedIn but this would be very refined according to 
                  industry requirements and standards.
                </p>
              </div>
              <a href="/under-development" className="home-learn1 button">
                <span className="home-text56">See Resume</span>
                <img
                  alt="image"
                  src="/Icons/arrow-2.svg"
                  className="home-image14"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="home-card2">
          <div className="home-avatar4">
            <img
              alt="2 person doodle"
              src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-friends-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png"
              className="home-avatar5"
            />
          </div>
          <div className="home-row1">
            <div className="home-main3">
              <div className="home-content06">
                <h2 className="home-header23">
                  Meet &apos;Da friend polygon&apos;
                </h2>
                <p className="home-description04">
                  Here have a good look what we made in collaboration on Github.
                  You ask my personal favorite person to collab..... Well, this
                  question requires a good diplomatic answer and since I
                  won&apos;t betray any single one of them, here are all of
                  &apos;em.
                </p>
              </div>
              <Link to="/buddies#top" className="home-learn2 button">
                <span className="home-text57">My buddies</span>
                <img
                  alt="Arrow"
                  src="/Icons/arrow-2.svg"
                  className="home-image15"
                />
              </Link>
            </div>
            <img
              alt="image"
              src="/Avatars/undraw_having_fun_re_vj4h.svg"
              className="home-image16"
            />
          </div>
        </div>
      </section>
      <section className="home-faq">
        <h2 className="home-header24">I have all the answers</h2>
        <div className="home-accordion">
          <div
            data-role="accordion-container"
            className="home-element accordion"
          >
            <div className="home-content07">
              <span className="home-header25">
                Where is the banner image from ?
              </span>
              <div className="home-container4">
                <span data-role="accordion-content"
                  className="home-description05"
                >
                  <span>Since I am not good at drawing and any art related stuff, that
                  is why I did downloaded the Free illustration from
                  OpenDoodles. Further, I edited the same downloads to meet my
                  banner requirement. OpenDoodles offers free of cost and no
                  login required illustration set and compositions, you can also
                  alter their ink (outlining color), Body filled color and the
                  background color by simply going to &apos;generator&apos; page
                  in the main site. 
                  <br></br>
                  <a
                  href="https://www.opendoodles.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-learn3 button"
                >
                  <span className="home-text58">
                    <span>Link for OpenDoodles</span>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-image17"
                  />
                </a>
                </span>
                </span>
              </div>
            </div>
            <div className="home-icon-container">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon12"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon14"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element1 accordion"
          >
            <div className="home-content08">
              <span className="home-header26">
                Can you tell us the site for using free icons based on our
                interests ?
              </span>
              <div className="home-container5">
                <span data-role="accordion-content" className="home-description06">
                  <span>
                    I personally used Icons8 for few of my icons, I did so
                    because of the help of Github Student and also they provide
                    free content also. Also you can use &quot;Material
                    Designs&quot; for your requirements it is totally free to
                    use and easy to integrate to your applications.
                  <br></br>Links to both are provided below.
                  <br></br>
                  <a
                  href="https://icons8.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-learn4 button"
                >
                  <span className="home-text64">Icons from Icons8</span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-image18"
                  />
                </a>
                <a
                  href="https://m2.material.io/components"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-learn5 button"
                >
                  <span className="home-text65">
                    <span>Site link of Material Designs</span>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="/Icons/arrow.svg"
                    className="home-image19"
                  />
                </a>
                </span>
                </span>
                
              </div>
            </div>
            <div className="home-icon-container1">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon16"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon18"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element2 accordion"
          >
            <div className="home-content09">
              <span className="home-header27">
                Where did you find the other illustrations that seem to be
                pictures ?
              </span>
              <span
                data-role="accordion-content"
                className="home-description07"
              >
                <span className="home-text68">
                  Yes, you caught it right that I copied all the drawings,
                  vectors, icons etc. but for the one you are asking I used
                  Undraw. There are many other sites as well, like : Humaaans,
                  Ouch, Handz, Paper Illustrations and absurd designs.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-icon-container2">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon20"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon22"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element3 accordion"
          >
            <div className="home-content10">
              <span className="home-header28">
                Do you get paid to promote all these sites ?
              </span>
              <span
                data-role="accordion-content"
                className="home-description08"
              >
                <span>
                  Absolutely not, since I did not paid them a single penny for
                  all these stuff to make my site gorgeous, thus atleast i can
                  give them a little bit of credit to all those who contributed
                  to my development.
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-icon-container3">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon24"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon26"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <a
            href="mailto:sumitsharmakaen@gmail.com?subject=I had a question about  "
            className="home-link20 button"
          >
            Ask your questions
          </a>
        </div>
      </section>
      <section className="home-get-yours">
        <div className="home-row2">
          <div className="home-column">
            <div className="home-card3">
              <img
                alt="Athena"
                src="Characters\re-terminal_gohugo.png"
                loading="eager"
                className="home-image20"
              />
              <span className="home-text72">Re - Terminal Template</span>
            </div>
            <div className="home-card3">
              <img
                alt="Athena"
                src="Ext images\async_sunlight-blogs.png"
                loading="eager"
                className="home-image20"
              />
              <span className="home-text72">Async_Sunlight Blogs</span>
            </div>
          </div>
          <div className="home-column1">
            <div className="home-card4">
              <img
                alt="GOHUGO logo"
                src="https://avatars.githubusercontent.com/u/29385237"
                loading="eager"
                className="home-image21"
              />
            </div>
          </div>
        </div>
        <div className="home-column2">
          <div className="home-card5">
            <div className="home-content11">
              <h2 className="home-header29">Personal Blogs or Documentation Archives</h2>
              <p className="home-description09">
                <span>
                  I use Hugo templates to easily convert my markdown files
                  to the website format required. This website is very static
                  like most of the blogging sites. 
                  <br></br>
                  I currently have hosted my blog website were I do post stuff
                  (not regularly but rarely), so i would really appreciate if you
                  wanted to post your content on my website too. Also I would be 
                  glad to help you setup a similar website if you want.
                </span>
                <br></br>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </p>
            </div>
            <a
              href="mailto:sumitsharmakaen@gmail.com?subject=Regarding Hosting Blogs: "
              target="_blank"
              rel="noreferrer noopener"
              className="home-link21 button"
            >
              <span>
                <span>Send me your Blog hosting request</span>
                <br></br>
              </span>
            </a>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-main4">
          <div className="home-branding">
            <div className="home-heading09">
              <h2 className="home-logo2">
                <span className="home-text81">Async</span>
                <span>_</span>
                <span className="home-text83">Sunlight</span>
              </h2>
              <p className="home-caption8">
                <span className="home-text84">
                  Life is so short to regret anything, come together,
                </span>
                <br className="home-text85"></br>
                <span className="home-text86">
                  let us connect I shall always appreciate such connection.
                </span>
                <br className="home-text87"></br>
                <br className="home-text88"></br>
                <span className="home-text89">
                  -----
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span className="home-text90">Sumit Sharma</span>
                <br className="home-text91"></br>
              </p>
            </div>
            <div className="home-socials2">
              <a
                href="https://github.com/Su-nlight"
                target="_blank"
                rel="noreferrer noopener"
                className="social button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon28">
                  <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                </svg>
              </a>
              <a
                href='https://www.linkedin.com/in/async-sunlight/'
                target="_blank"
                rel="noreferrer noopener"
                className="social button"
              >
                <img
                  alt="image"
                  src="/Icons/linkedin.svg"
                  className="home-image22"
                />
              </a>
              <a
                href="https://www.discordapp.com/users/727073320557871137"
                target="_blank"
                rel="noreferrer noopener"
                className="social button"
              >
                <img
                  alt="image"
                  src="/Icons/discord.svg"
                  className="home-image23"
                />
              </a>
            </div>
          </div>
          <div className="home-links1">
            <div className="home-list1">
              <h3 className="home-heading10">Site</h3>
              <div className="home-items">
                <Link to="/buddies#top" className="home-link22 button-clean button">
                  My Buddies
                </Link>
                <a href="#Me" className="home-link23 button-clean button">
                  My Character
                </a>
                <a
                  href="#collection"
                  className="home-link24 button-clean button"
                >
                  Past Projects
                </a>
                <a href='https://blogs.asyncsunlight.me' 
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link25 button-clean button">
                    Blogs
                  </a>
                <a href="#top" className="home-link26 button-clean button">
                  To the page top
                </a>
              </div>
            </div>
            <div className="home-list2">
              <h3 className="home-heading11">Connections</h3>
              <div className="home-items1">
                <a
                  href="https://www.instagram.com/async_sunlight/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link27 button-clean button"
                >
                  Instagram
                </a>
                <a
                  href="https://github.com/Su-nlight"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link28 button-clean button"
                >
                  Github
                </a>
                <a
                  href="https://www.linkedin.com/in/async-sunlight/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link30 button-clean button"
                >
                  Linkedin
                </a>
                <a
                  href="https://www.discordapp.com/users/727073320557871137"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="home-link30 button-clean button"
                >
                  Discord
                </a>
                <a
                  href="mailto:sumitsharmakaen@gmail.com?subject=Reaching out to you"
                  className="home-link29 button-clean button"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
          <div className="home-socials3">
            <a
              href="https://www.linkedin.com/in/async-sunlight/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-twitter3 social button"
            >
              <img
                alt="image"
                src="/Icons/linkedin.svg"
                className="home-image24"
              />
            </a>
            <a
              href="https://www.github.com/Su-nlight/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-twitter3 social button"
            >
              <svg viewBox="0 0 1024 1024" className="home-icon28">
                  <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
                </svg>
            </a>
            <a
              href="https://www.discordapp.com/users/727073320557871137"
              target="_blank"
              rel="noreferrer noopener"
              className="home-discord3 social button"
            >
              <img
                alt="image"
                src="/Icons/discord.svg"
                className="home-image25"
              />
            </a>
          </div>
        </div>
        <span className="home-copyright">
          © 2025 Sumit Sharma (Async_Sunlight) . All Rights Reserved.
        </span>
      </footer>
      <div>
        <Script
          html={`<script>
   /* Accordion - Code Embed*/
 (function() {
    const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]');
    const accordionContents = document.querySelectorAll('[data-role="accordion-content"]');
    const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]');
    const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]');

    accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none";
    });

    accordionIconsClosed.forEach((icon) => {
      icon.style.display = "flex"
    });

    accordionIconsOpen.forEach((icon) => {
      icon.style.display = "none"
    });

    accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
        if (accordionContents[index].style.display === "flex") {
          // If the accordion is already open, close it
          accordionContents[index].style.display = "none";
          accordionIconsClosed[index].style.display = "flex";
          accordionIconsOpen[index].style.display = "none"
        } else {
          // If the accordion is closed, open it
          accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none";
          });

          accordionIconsClosed.forEach((accordionIcon) => {
            accordionIcon.style.display = "flex";
          });

          accordionIconsOpen.forEach((accordionIcon) => {
            accordionIcon.style.display = "none";
          });
          
          accordionContents[index].style.display = "flex";
          accordionIconsClosed[index].style.display = "none";
          accordionIconsOpen[index].style.display = "flex";
        }
      });
    });
  })();
</script>
`}
        ></Script>
      </div>
    </div>
  )
}

export default Home
