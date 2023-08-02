import React from 'react'

import PropTypes from 'prop-types'

import './feature.css'

const Feature = (props) => {
  return (
    <div className="feature-feature">
      <div className="feature-heading">
        <img alt="image" src={props.Icon} className="feature-icon" />
        <h3 className="feature-header">{props.Header}</h3>
      </div>
      <p className="feature-description">{props.Description}</p>
    </div>
  )
}

Feature.defaultProps = {
  Icon: '/external/thumbs-up.svg',
  Description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  Header: 'Hand Picked Guides',
}

Feature.propTypes = {
  Icon: PropTypes.string,
  Description: PropTypes.string,
  Header: PropTypes.string,
}

export default Feature
