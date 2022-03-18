import SliderStyles from './Slider.module.css'
import propTypes from 'prop-types'
import { useState, useEffect } from 'react'

function Slider ({handleInput, min, max, step, initial}) {
  const [inputValue, setInputValue] = useState(0)

  useEffect(() => {
    setInputValue(initial)
  }, [initial])

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
    handleInput(e.target.value)
  }
  
  return (
    <>
      <input min={min} max={max} step={step} value={inputValue} type="range" onInput={handleInputChange} className={SliderStyles.range} />  
    </>
  )
  
}

Slider.defaultProps = {
  min: '0',
  max: '200',
  step: '1',
  initial: '1'
}

Slider.propTypes = {
  min: propTypes.string,
  max: propTypes.string,
  step: propTypes.string
}

export default Slider
