import gradientStyles from './LinearGradieint.module.css'
import { useState, useEffect } from 'react'
import Color from '../../components/Color/Color'
import Slider from '../../components/Slider/Slider'
import hexOpacity from '../../config'

function LinearGradient() {
    const [ colors, setColors ] = useState([
        {
            id: 1,
            color: '#3f3f80',
            colorName: 'Color 1',
            opacity: '1',
            section: '40'
        },
        {
            id: 2,
            color: '#bc3867',
            colorName: 'Color 2',
            opacity: '1',
            section: '48'
        },
    ])

    const [ selectedColor, setSelectedColor ] = useState({
        id: 1,
        color: '#3f3f80',
        colorName: 'Color 1',
        opacity: '1',
        section: '20'
    })
    
    const [ gradientType, setGradientType] = useState('linear')

    function getColor(c) {
        c = c.substring(1)
        const rgb = parseInt(c, 16);
        const r = (rgb >> 16) & 0xff;
        const g = (rgb >>  8) & 0xff;
        const b = (rgb >>  0) & 0xff;

        const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;
      
        return luma < 128 ? '#fff': '#000'
    }

    const handleChanges = (value, prop) => {
        const v = {}
        v[prop] = value
        setSelectedColor({...selectedColor, ...v})
        setColors(colors.map(u => u.id === selectedColor.id ? {...u, ...v}: u))
    }

    const handleClick = (col) => {
        setSelectedColor({...selectedColor, ...col})
    }

    const pushToColors = () => {
        const number = colors.length + 1
        const sectionOfLastItem = (colors[(colors.length) - 1])
        const condition = ( sectionOfLastItem + 10 ) > 100
        setColors([...colors, {
            id: number,
            color: '#000000',
            colorName: 'Color '+ number,
            opacity: '1',
            section: condition ? 100 : parseInt(sectionOfLastItem.section) + 10
        }])
    }

    const getOpacityHexCode = (code) => {
        return hexOpacity[code.toString()]
    }

    const removeColor = () => {
        if (colors.length > 2)
            setColors(colors.filter(x => x.id !== selectedColor.id))
    }

    const generateGradient = () => {
        gradientType === 'linear' ? setGradientType('radial'): setGradientType('linear')
    }

    const backgroundGradient = () => {
        const x = gradientType === 'linear'? '0deg, ' : 'circle, '
        const gradient=[x]
        colors.forEach((col, index) => {
            if (index === (colors.length-1)) {
                gradient.push(`${col.color}${getOpacityHexCode(col.opacity)} ${col.section}%`)
                return
            }
            gradient.push(`${col.color} ${col.section}%, `)
        })
        console.log(gradient.join(''))
        return gradient.join('')
    }
    
  return (
    <div className={gradientStyles.container}>
        <div style={{background: `${gradientType}-gradient(${backgroundGradient()})`}} className={gradientStyles.example}>
            
        </div>
        <div className={gradientStyles['settings']}>
            <div>
                <h3 className={gradientStyles.hh}>{selectedColor.colorName}</h3>
                <div className={gradientStyles['overall']}>
                    <div  style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div>
                            <button onClick={generateGradient} className={gradientStyles.butt}>Generate {gradientType === 'linear'?'radial':'linear'} gradient</button>
                        </div>
                        <div>
                            {
                                colors.length > 2 && <div onClick={removeColor} style={{textAlign: 'right', marginTop: '5px', fontSize: '20px', cursor: 'pointer'}}>&#x2715;</div>
                            }
                        </div>
                    </div>
                    <div className={gradientStyles['control-containers']}>
                        <label className={gradientStyles.labels}>Gradient Color</label><br></br><br></br>
                        <Color handleColor={(value) => handleChanges(value, 'color')} initial={selectedColor.color} />
                    </div>
                    <div className={gradientStyles['control-containers']}>
                        <label className={gradientStyles.labels}>Color Opacity</label><br></br>
                        <div style={{display: 'flex'}}>
                            <Slider handleInput={value => handleChanges(value, 'opacity')} initial={selectedColor.color} min={'0'} max={'1'} step={'0.1'} initial={selectedColor.opacity} />
                            <span style={{marginLeft: '10px'}}>{selectedColor.opacity}</span>
                        </div>
                    </div>
                    <div className={gradientStyles['control-containers']}>
                        <label className={gradientStyles.labels}>% Color Proportion</label><br></br>
                        <div style={{display: 'flex'}}>
                            <Slider handleInput={value => handleChanges(value, 'section')} min={'0'} max={'100'} step={'1'} initial={selectedColor.section} />
                            <span style={{marginLeft: '10px'}}>{selectedColor.section}%</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={gradientStyles['selected-colors']}>
                <div onClick={pushToColors} style={{color: '#000', background: '#e3e3e3'}} className={`${gradientStyles.color}`}>
                    <p>+ Add Color</p>
                </div>
                {
                    colors.map((color, index) => {
                        return (
                            <div onClick={() => handleClick(color)} key={color.colorName} style={{
                                background: color.color, 
                                color: getColor(color.color),
                            }} className={`${color.id === selectedColor.id && gradientStyles.active} ${gradientStyles.color}`}>
                                <p>{color.colorName}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default LinearGradient
