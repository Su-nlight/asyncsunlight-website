import React from 'react'

import PropTypes from 'prop-types'

import './card.css'

const Card = (props) => {
  return (
    <section className={`card-card ${props.rootClassName} `}>
      <div className="card-icon">
        <img alt={props.IconAlt} src={props.Icon} className="card-icon1" />
      </div>
      <main className="card-content">
        <h1 className="card-header">{props.Header}</h1>
        <p className="card-description">{props.Description}</p>
      </main>
    </section>
  )
}

Card.defaultProps = {
  rootClassName: '',
  IconAlt: 'image',
  Icon: 'f3bd7c7f-207c-406b-8465-16ab670c841a',
  Header: 'Sima Mosbacher',
  Description:
    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
}

Card.propTypes = {
  rootClassName: PropTypes.string,
  IconAlt: PropTypes.string,
  Icon: PropTypes.string,
  Header: PropTypes.string,
  Description: PropTypes.string,
}

export default Card
