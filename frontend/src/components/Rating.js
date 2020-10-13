import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color, maxValue }) => {

  const stars = [...new Array(maxValue) ].map((x, index) => {
    const newIndex = index + 1
    return (
      <span key={newIndex}>
        <i style={{ color }}
          className={
            value >= newIndex
              ? 'fas fa-star'
              : value >= newIndex - .5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }
        ></i>
      </span>
    )
  })

  return (
    <div className="rating">
      {stars}

      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  value: 0,
  maxValue: 5,
  color: '#f8e825',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  maxValue: PropTypes.number,
}

export default Rating
