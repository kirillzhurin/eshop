import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color }) => {
  const stars = [];
  const maxValue = 5

  for (let index = 1; index <= maxValue; index++) {
    stars.push(
      <span key={index}>
        <i style={{ color }}
          className={
            value >= index
              ? 'fas fa-star'
              : value >= index - .5
                ? 'fas fa-star-half-alt'
                : 'far fa-star'
          }
        ></i>
      </span>
    )
  }

  return (
    <div className="rating">
      {stars}

      <span>{text && text}</span>
    </div>
  )
}

Rating.defaultProps = {
  color: '#f8e825',
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Rating
