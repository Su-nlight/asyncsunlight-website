import React from 'react'

import PropTypes from 'prop-types'

import OutlineButton from './outline-button'
import './person-card.css'

const PersonCard = (props) => {
  return (
    <div className={`person-card-container ${props.rootClassName} `}>
      <div className="person-card-image-container">
        <img
          alt={props.image_alt}
          src={props.image}
          className="person-card-image"
        />
        <div className="person-card-read-more-container">
          <span className="person-card-hint">{props.Hint}</span>
          <svg viewBox="0 0 1024 1024" className="person-card-icon">
            <path
              d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="person-card-container1">
        <span className="person-card-text">{props.Person}</span>
        <span className="person-card-text1">{props.description}</span>
        <a
          href={props.social_link}
          target="_blank"
          rel="noreferrer noopener"
          className="person-card-link"
        >
          <OutlineButton
            button1="Link For Social"
            className="person-card-component"
          ></OutlineButton>
        </a>
      </div>
    </div>
  )
}

PersonCard.defaultProps = {
  image_alt: 'image',
  rootClassName: '',
  social_link: 'https://www.instagram.com/',
  Hint: 'Explore Profile',
  image:
    'https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=300',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
  Person: 'Persona',
}

PersonCard.propTypes = {
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
  social_link: PropTypes.string,
  Hint: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  Person: PropTypes.string,
}

export default PersonCard
