import React from 'react'

import PropTypes from 'prop-types'

import './offer.css'

const Offer = (props) => {
  return (
    <div className={`offer-offer ${props.rootClassName} `}>
      <img alt="image" src={props.Image} className="offer-image" />
      <div className="offer-content">
        <div className="offer-details">
          <span className="offer-text">{props.Heading}</span>
          <span className="offer-text1">{props.Subheading}</span>
        </div>
        <span className="offer-text2">{props.Description}</span>
      </div>
    </div>
  )
}

Offer.defaultProps = {
  Heading: 'Crete, Greece',
  rootClassName: '',
  Description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  Subheading: '3 Local guides',
  Image: 'f8ae1ece-a597-4603-a6d6-066768a42c4c',
}

Offer.propTypes = {
  Heading: PropTypes.string,
  rootClassName: PropTypes.string,
  Description: PropTypes.string,
  Subheading: PropTypes.string,
  Image: PropTypes.string,
}

export default Offer
