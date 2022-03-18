import Color from '../../components/Color/Color'
import Slider from '../../components/Slider/Slider'
import BoxShadowStyles from './BoxShadow.module.css'
import { useState } from 'react'
import hexOpacity from '../../config'

function BoxShadow() {
    const [horizontal, setHorizontal] = useState(0)
    const [vertical, setVertical] = useState(0)
    const [boxColor, setBoxColor] = useState('#f27373')
    const [shadowColor, setShadowColor] = useState('#cccccc')
    const [blurRadius, setBlurRadius] = useState(0)
    const [spreadRadius, setSpreadRadius] = useState(0)
    const [opacityColor, setOpacityColor] = useState(1)
    const [inset, setInset] = useState(false)

    const handleChange = (value, setMethod) => {
        setMethod(value)
    }

    const handleSelectChange = () => {
        setInset(!inset)
    }

    const isInset = inset ? 'inset' : ''

    const getOpacityHexCode = (code) => {
        return hexOpacity[code.toString()]
    }

    const opacity = getOpacityHexCode(opacityColor) === '00'? null :(shadowColor+getOpacityHexCode(opacityColor))

    const boxShadowStyle = {
        backgroundColor: boxColor,
        boxShadow: `${horizontal}px ${vertical}px ${blurRadius}px ${spreadRadius}px ${opacity} ${isInset}`
    }

  return (
    <div className={BoxShadowStyles.container}>
        <div className={BoxShadowStyles.example}>
            <div style={boxShadowStyle} className={BoxShadowStyles['example-div']}>
                <div className={BoxShadowStyles.code}>
                    <pre>div {'{'} </pre>
                    <pre className={BoxShadowStyles.indents}>background-color: {boxShadowStyle.backgroundColor};</pre>
                    <pre className={BoxShadowStyles.indents}>box-shadow: {boxShadowStyle.boxShadow};</pre>
                    <pre>{'}'} </pre> <br></br>
                </div>
            </div>
        </div>
        <div className={BoxShadowStyles['settings']}>
            <div className={BoxShadowStyles.control}>
                <label>Box Color</label>
                <Color initial={boxColor} handleColor={color => handleChange(color, setBoxColor)} />
            </div>
            <div className={BoxShadowStyles.control}>
                <label>Horizontal Shadow Length</label>
                <Slider handleInput={payload => handleChange(payload, setHorizontal)} />
            </div>
            <div className={BoxShadowStyles.control}>
                <label>Vertical Shadow Length</label>
                <Slider handleInput={payload => handleChange(payload, setVertical)} />
            </div>
            <div className={BoxShadowStyles.control}>
                <label>Blur Radius</label>
                <Slider handleInput={payload => handleChange(payload, setBlurRadius)} />
            </div>
            <div className={BoxShadowStyles.control}>
                <label>Spread Radius</label>
                <Slider handleInput={payload => handleChange(payload, setSpreadRadius)} />
            </div>
            <div className={BoxShadowStyles.control}>
                <label>Shadow Color</label>
                <Color initial={shadowColor} handleColor={payload => handleChange(payload, setShadowColor)}/>
            </div>
            <div className={BoxShadowStyles.control}>
                <label>Shadow Color Opacity</label>
                <Slider min={'0.1'} max={'1'} step={'0.1'} handleInput={payload => handleChange(payload, setOpacityColor)} />
            </div>
            <div className={BoxShadowStyles.control}>
                <label>Inset</label>
                <label className={BoxShadowStyles.containers}>
                    <input value={inset} onChange={handleSelectChange} type="checkbox" />
                    <span className={`slider ${BoxShadowStyles.checkmark}`}></span>
                </label>
            </div>
        </div>
    </div>
  )
}

export default BoxShadow