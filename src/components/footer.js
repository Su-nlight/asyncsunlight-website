import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-branding">
          <div className="footer-heading">
            <Link to="/" className="footer-logo-link">
              <h2 className="footer-logo">
                <span className="footer-text">Async</span>
                <span>_</span>
                <span className="footer-text01">Sunlight</span>
              </h2>
            </Link>
            <p className="footer-caption">
              <span className="footer-text02">
                Life is so short to regret anything, come together,
              </span>
              <br className="footer-text03"></br>
              <span className="footer-text04">
                let us connect I shall always appreciate such connection.
              </span>
              <br className="footer-text05"></br>
              <br className="footer-text06"></br>
              <span className="footer-text07">
                -----
                <span dangerouslySetInnerHTML={{ __html: ' ' }} />
              </span>
              <span className="footer-text08">Sumit Sharma</span>
              <br className="footer-text09"></br>
            </p>
          </div>
          <div className="footer-socials">
            <a href="https://github.com/Su-nlight" target="_blank" rel="noreferrer noopener" className="footer-github social button">
              <svg viewBox="0 0 1024 1024" className="footer-icon">
                <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/async-sunlight/' target="_blank" rel="noreferrer noopener" className="footer-linkedin social button">
              <img alt="image" src="/Icons/linkedin.svg" className="footer-image" />
            </a>
            <a href="https://www.discordapp.com/users/727073320557871137" target="_blank" rel="noreferrer noopener" className="footer-discord social button">
              <img alt="image" src="/Icons/discord.svg" className="footer-image01" />
            </a>
          </div>
        </div>
        <div className="footer-links">
          <div className="footer-list">
            <h3 className="footer-heading01">Site</h3>
            <div className="footer-items">
              <Link to="/" className="footer-link button-clean button">
                Home
              </Link>
              <Link to="/buddies#top" className="footer-link01 button-clean button">
                My Buddies
              </Link>
              <Link to="/#Me" className="footer-link02 button-clean button">
                My Character
              </Link>
              <Link to="/#collection" className="footer-link03 button-clean button">
                Past Projects
              </Link>
              <a href='https://blogs.asyncsunlight.me' target="_blank" rel="noreferrer noopener" className="footer-link04 button-clean button">
                Blogs
              </a>
              <a href="#top" className="footer-link05 button-clean button">
                To the page top
              </a>
            </div>
          </div>
          <div className="footer-list01">
            <h3 className="footer-heading02">Connections</h3>
            <div className="footer-items01">
              <a href="https://www.instagram.com/async_sunlight/" target="_blank" rel="noreferrer noopener" className="footer-link06 button-clean button">
                Instagram
              </a>
              <a href="https://github.com/Su-nlight" target="_blank" rel="noreferrer noopener" className="footer-link07 button-clean button">
                Github
              </a>
              <a href="https://www.linkedin.com/in/async-sunlight/" target="_blank" rel="noreferrer noopener" className="footer-link08 button-clean button">
                Linkedin
              </a>
              <a href="https://www.discordapp.com/users/727073320557871137" target="_blank" rel="noreferrer noopener" className="footer-link09 button-clean button">
                Discord
              </a>
              <a href="mailto:sumitsharmakaen@gmail.com?subject=Reaching out to you" className="footer-link10 button-clean button">
                Email
              </a>
            </div>
          </div>
        </div>
        <div className="footer-socials-mobile">
          <a href="https://www.linkedin.com/in/async-sunlight/" target="_blank" rel="noreferrer noopener" className="footer-twitter social button">
            <img alt="image" src="/Icons/linkedin.svg" className="footer-image02" />
          </a>
          <a href="https://www.github.com/Su-nlight/" target="_blank" rel="noreferrer noopener" className="footer-github-mobile social button">
            <svg viewBox="0 0 1024 1024" className="footer-icon02">
              <path d="M512.008 12.642c-282.738 0-512.008 229.218-512.008 511.998 0 226.214 146.704 418.132 350.136 485.836 25.586 4.738 34.992-11.11 34.992-24.632 0-12.204-0.48-52.542-0.696-95.324-142.448 30.976-172.504-60.41-172.504-60.41-23.282-59.176-56.848-74.916-56.848-74.916-46.452-31.778 3.51-31.124 3.51-31.124 51.4 3.61 78.476 52.766 78.476 52.766 45.672 78.27 119.776 55.64 149.004 42.558 4.588-33.086 17.852-55.68 32.506-68.464-113.73-12.942-233.276-56.85-233.276-253.032 0-55.898 20.004-101.574 52.76-137.428-5.316-12.9-22.854-64.972 4.952-135.5 0 0 43.006-13.752 140.84 52.49 40.836-11.348 84.636-17.036 128.154-17.234 43.502 0.198 87.336 5.886 128.256 17.234 97.734-66.244 140.656-52.49 140.656-52.49 27.872 70.528 10.35 122.6 5.036 135.5 32.82 35.856 52.694 81.532 52.694 137.428 0 196.654-119.778 239.95-233.79 252.624 18.364 15.89 34.724 47.046 34.724 94.812 0 68.508-0.596 123.644-0.596 140.508 0 13.628 9.222 29.594 35.172 24.566 203.322-67.776 349.842-259.626 349.842-485.768 0-282.78-229.234-511.998-511.992-511.998z"></path>
            </svg>
          </a>
          <a href="https://www.discordapp.com/users/727073320557871137" target="_blank" rel="noreferrer noopener" className="footer-discord-mobile social button">
            <img alt="image" src="/Icons/discord.svg" className="footer-image03" />
          </a>
        </div>
      </div>
      <span className="footer-copyright">
        © 2025 Sumit Sharma (Async_Sunlight) . All Rights Reserved.
      </span>
    </footer>
  )
}

export default Footer