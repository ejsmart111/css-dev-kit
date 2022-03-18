import ColorStyles from './Color.module.css'
import { useState, useEffect } from 'react'

function Color({ handleColor , initial}) {
  const [color, setColor] = useState('#cccccc')

  const handleColorChange = (evt) => {
    handleColor(evt.target.value)
    setColor(evt.target.value)
  }

  useEffect(() => {
    setColor(initial)
  }, [initial])
  
  return (
    <>
      <div className={ColorStyles.overall}>
        <input value={color} onInput={handleColorChange} className={ColorStyles.color} type="color" />
        <div>
          <label className={ColorStyles.label}>or</label>
          <input value={color} onInput={handleColorChange} type={'text'} className={ColorStyles.input} />
        </div>
      </div>
    </>
  )
}

Color.defaultProps = {
  initial: '#f27373'
}

export default Color