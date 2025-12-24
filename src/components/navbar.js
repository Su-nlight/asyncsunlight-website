import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <header data-thq="thq-navbar" className="navbar">
      <Link to="/" className="navbar-logo">
        <span className="navbar-text">Async</span>
        <span className="navbar-text01">_</span>
        <span>Sunlight</span>
      </Link>
      <div data-thq="thq-navbar-nav" data-role="Nav" className="navbar-desktop-menu">
        <nav data-thq="thq-navbar-nav-links" data-role="Nav" className="navbar-nav">
          <Link to="/#Me" className="navbar-link button-clean button">
            Character
          </Link>
          <Link to="/#collection" className="navbar-link01 button-clean button">
            Projects
          </Link>
          <Link to="/buddies#top" className="navbar-navlink button-clean button">
            Buddies
          </Link>
          <a 
            href='https://blogs.asyncsunlight.me' 
            target="_blank"
            rel="noreferrer noopener"
            className="navbar-navlink1 button-clean button">
            Blogs
          </a>
        </nav>
      </div>
      <div data-thq="thq-navbar-btn-group" className="navbar-btn-group">
        <div className="navbar-socials">
          <button className="social button">
            <a href="mailto:sumitsharmakaen@gmail.com?subject=">
              <svg viewBox="0 0 1024 1024" className="navbar-icon">
                <path d="M854 256q34 0 59 26t25 60v512q0 34-25 59t-59 25h-684q-34 0-59-25t-25-59v-512q0-34 25-60t59-26h86v-256h342v170h-256v342h84v-256h428z"></path>
              </svg>
            </a>
          </button>
          <button className="social button">
            <a href="https://github.com/Su-nlight" target="_blank" rel="noreferrer noopener">
              <svg viewBox="0 0 877.7142857142857 1024" className="navbar-icon02">
                <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
              </svg>
            </a>
          </button>
          <button className="social button">
            <a href='https://www.linkedin.com/in/async-sunlight/' target="_blank" rel="noreferrer noopener">
              <img alt="image" src="/Icons/linkedin.svg" className="navbar-image" />
            </a>
          </button>
          <button className="social button">
            <a href="https://www.discordapp.com/users/727073320557871137" target="_blank" rel="noreferrer noopener">
              <img alt="image" src="/Icons/discord.svg" className="navbar-image01" />
            </a>
          </button>
        </div>
        <a href="https://www.instagram.com/async_sunlight/" target="_blank" rel="noreferrer noopener" className="navbar-view button">
          Follow on Instagram
        </a>
      </div>
      <div data-thq="thq-burger-menu" className="navbar-burger-menu">
        <button className="button navbar-button">
          <svg viewBox="0 0 1024 1024" className="navbar-icon04">
            <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
          </svg>
        </button>
      </div>
      <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
        <div data-thq="thq-mobile-menu-nav" data-role="Nav" className="navbar-nav1">
          <div className="navbar-container1">
            <Link to="/" className="navbar-logo1">
              <span className="navbar-text03">Async</span>
              <span className="navbar-text04">_</span>
              <span className="navbar-text05">Sunlight</span>
            </Link>
            <div data-thq="thq-close-menu" className="navbar-menu-close">
              <svg viewBox="0 0 1024 1024" className="navbar-icon06">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <nav data-thq="thq-mobile-menu-nav-links" data-role="Nav" className="navbar-nav2">
            <Link to="/#Me" className="navbar-link05 button-clean button">
              Character
            </Link>
            <Link to="/#collection" className="navbar-link06 button-clean button">
              Projects
            </Link>
            <Link to="/buddies#top" className="navbar-navlink2 button-clean button">
              Buddies
            </Link>
            <a 
              href='https://blogs.asyncsunlight.me' 
              target="_blank"
              rel="noreferrer noopener"
              className="navbar-navlink3 button-clean button">
              Blogs
            </a>
          </nav>
          <div className="navbar-container2">
            <a href="https://www.instagram.com/async_sunlight/" target="_blank" rel="noreferrer noopener" className="navbar-login button">
              Follow on instagram
            </a>
          </div>
          <div className="navbar-socials1">
            <button className="social button">
              <a href="mailto:sumitsharmakaen@gmail.com?subject=">
                <svg viewBox="0 0 1024 1024" className="navbar-icon08">
                  <path d="M854 256q34 0 59 26t25 60v512q0 34-25 59t-59 25h-684q-34 0-59-25t-25-59v-512q0-34 25-60t59-26h86v-256h342v170h-256v342h84v-256h428z"></path>
                </svg>
              </a>
            </button>
            <button className="social button">
              <a href="https://github.com/Su-nlight" target="_blank" rel="noreferrer noopener">
                <svg viewBox="0 0 877.7142857142857 1024" className="navbar-icon10">
                  <path d="M438.857 73.143c242.286 0 438.857 196.571 438.857 438.857 0 193.714-125.714 358.286-300 416.571-22.286 4-30.286-9.714-30.286-21.143 0-14.286 0.571-61.714 0.571-120.571 0-41.143-13.714-67.429-29.714-81.143 97.714-10.857 200.571-48 200.571-216.571 0-48-17.143-86.857-45.143-117.714 4.571-11.429 19.429-56-4.571-116.571-36.571-11.429-120.571 45.143-120.571 45.143-34.857-9.714-72.571-14.857-109.714-14.857s-74.857 5.143-109.714 14.857c0 0-84-56.571-120.571-45.143-24 60.571-9.143 105.143-4.571 116.571-28 30.857-45.143 69.714-45.143 117.714 0 168 102.286 205.714 200 216.571-12.571 11.429-24 30.857-28 58.857-25.143 11.429-89.143 30.857-127.429-36.571-24-41.714-67.429-45.143-67.429-45.143-42.857-0.571-2.857 26.857-2.857 26.857 28.571 13.143 48.571 64 48.571 64 25.714 78.286 148 52 148 52 0 36.571 0.571 70.857 0.571 81.714 0 11.429-8 25.143-30.286 21.143-174.286-58.286-300-222.857-300-416.571 0-242.286 196.571-438.857 438.857-438.857zM166.286 703.429c1.143-2.286-0.571-5.143-4-6.857-3.429-1.143-6.286-0.571-7.429 1.143-1.143 2.286 0.571 5.143 4 6.857 2.857 1.714 6.286 1.143 7.429-1.143zM184 722.857c2.286-1.714 1.714-5.714-1.143-9.143-2.857-2.857-6.857-4-9.143-1.714-2.286 1.714-1.714 5.714 1.143 9.143 2.857 2.857 6.857 4 9.143 1.714zM201.143 748.571c2.857-2.286 2.857-6.857 0-10.857-2.286-4-6.857-5.714-9.714-3.429-2.857 1.714-2.857 6.286 0 10.286s7.429 5.714 9.714 4zM225.143 772.571c2.286-2.286 1.143-7.429-2.286-10.857-4-4-9.143-4.571-11.429-1.714-2.857 2.286-1.714 7.429 2.286 10.857 4 4 9.143 4.571 11.429 1.714zM257.714 786.857c1.143-3.429-2.286-7.429-7.429-9.143-4.571-1.143-9.714 0.571-10.857 4s2.286 7.429 7.429 8.571c4.571 1.714 9.714 0 10.857-3.429zM293.714 789.714c0-4-4.571-6.857-9.714-6.286-5.143 0-9.143 2.857-9.143 6.286 0 4 4 6.857 9.714 6.286 5.143 0 9.143-2.857 9.143-6.286zM326.857 784c-0.571-3.429-5.143-5.714-10.286-5.143-5.143 1.143-8.571 4.571-8 8.571 0.571 3.429 5.143 5.714 10.286 4.571s8.571-4.571 8-8z"></path>
                </svg>
              </a>
            </button>
            <button className="social button">
              <a href='https://www.linkedin.com/in/async-sunlight/' target="_blank" rel="noreferrer noopener">
                <img alt="image" src="/Icons/linkedin.svg" className="navbar-image2" />
              </a>
            </button>
            <button className="social button">
              <a href="https://www.discordapp.com/users/727073320557871137" target="_blank" rel="noreferrer noopener">
                <img alt="image" src="/Icons/discord.svg" className="navbar-image3" />
              </a>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar