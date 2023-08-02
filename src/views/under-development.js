import React from 'react'
import { Link } from 'react-router-dom'

import { Helmet } from 'react-helmet'

import './under-development.css'

const UnderDevelopment = (props) => {
  return (
    <div className="under-development-container">
      <Helmet>
        <title>under-development - Character NFT template</title>
        <meta
          property="og:title"
          content="under-development - Character NFT template"
        />
      </Helmet>
      <h1 className="under-development-text">
        <span>This area is under development</span>
        <br></br>
        <span>Thank you</span>
        <br></br>
      </h1>
      <div className="under-development-container1">
        <Link to="/buddies" className="under-development-navlink button">
          <span className="under-development-text05">
            <span>Back to Buddies</span>
            <br></br>
          </span>
        </Link>
        <Link to="/" className="under-development-navlink1 button">
          <span className="under-development-text08">
            <span>Back to Home</span>
            <br></br>
          </span>
        </Link>
        <Link
          to="/projects-workings"
          className="under-development-navlink2 button"
        >
          <span className="under-development-text11">
            <span>Back to Projects</span>
            <br></br>
          </span>
        </Link>
      </div>
    </div>
  )
}

export default UnderDevelopment
