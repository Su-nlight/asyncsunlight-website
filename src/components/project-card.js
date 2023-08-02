import React from 'react'

import PropTypes from 'prop-types'

import './project-card.css'

const ProjectCard = (props) => {
  return (
    <div className={`project-card-card-1 ${props.rootClassName} `}>
      <div className="project-card-image-container">
        <img
          alt={props.Image_alt}
          src={props.Image_src}
          className="project-card-image"
        />
        <div className="project-card-read-more-container">
          <span className="project-card-hint">{props.Hint}</span>
          <svg viewBox="0 0 1024 1024" className="project-card-icon">
            <path
              d="M621.254 877.254l320-320c24.994-24.992 24.994-65.516 0-90.51l-320-320c-24.994-24.992-65.516-24.992-90.51 0-24.994 24.994-24.994 65.516 0 90.51l210.746 210.746h-613.49c-35.346 0-64 28.654-64 64s28.654 64 64 64h613.49l-210.746 210.746c-12.496 12.496-18.744 28.876-18.744 45.254s6.248 32.758 18.744 45.254c24.994 24.994 65.516 24.994 90.51 0z"
              className=""
            ></path>
          </svg>
        </div>
      </div>
      <div className="project-card-content">
        <span className="project-card-caption">{props.Name}</span>
        <h3 className="project-card-title">{props.Description}</h3>
      </div>
    </div>
  )
}

ProjectCard.defaultProps = {
  Name: 'Name of the project',
  Image_src: 'https://img.icons8.com/stickers/250/project-management.png',
  image_alt: 'image',
  image_src: '18a61f9f-f131-45a7-ae77-2151545e52d6',
  Description: 'short project description',
  Image_alt: 'image',
  Hint: 'Read More',
  rootClassName: '',
}

ProjectCard.propTypes = {
  Name: PropTypes.string,
  Image_src: PropTypes.string,
  image_alt: PropTypes.string,
  image_src: PropTypes.string,
  Description: PropTypes.string,
  Image_alt: PropTypes.string,
  Hint: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default ProjectCard
