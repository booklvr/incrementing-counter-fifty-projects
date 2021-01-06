import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const IncrementingCounter = ({ data }) => {
  const { icon, target, title } = data
  const [value, setValue] = useState(0)

  useEffect(() => {
    const increment = target / 200

    setTimeout(() => {
      if (value < target) {
        setValue(Math.ceil(value + increment))
      } else {
        setValue(target)
      }
    }, 1)
  }, [value])

  return (
    <div className='counter-container'>
      <i className={`fab ${icon} fa-3x`}></i>
      <div className='counter'>{value}</div>
      <span>{title}</span>
    </div>
  )
}

IncrementingCounter.propTypes = {
  data: PropTypes.object.isRequired,
}

export default IncrementingCounter
