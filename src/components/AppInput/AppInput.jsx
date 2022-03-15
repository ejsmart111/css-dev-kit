import { useState, useEffect } from 'react'
import InputStyles from './AppInput.module.css'

function AppInput({ inputType, field, label, initial, handleChange, isReadonly, readOnlyInput }) {
    const [ inputValue, setInputValue ] = useState(0)

    useEffect(() => {
        initial !== 0 && setInputValue(initial)
    }, [])

    const handleInputChange = (evt) => {
        handleChange(evt.target.value)
        setInputValue(evt.target.value)
    }
    
  return (
      <>
        <label style={{fontWeight: 'bold', display: 'block'}}>{label}</label>
        <div className={InputStyles['input-controller']} >
            <input readOnly={isReadonly} onInput={handleInputChange} className={InputStyles['main-input']} type={inputType} value={isReadonly? readOnlyInput : inputValue} />
            <div className={InputStyles['input-field']}>
                <p style={{margin: '0px'}}>{ field }</p>
            </div>
        </div>
      </>
  )
}

AppInput.defaultProps = {
    inputType: 'number',
    field: 'px',
    label: 'Base Pixel Size',
    initial: '0',
    isReadonly: false
}

export default AppInput