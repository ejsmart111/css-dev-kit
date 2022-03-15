import { useState } from 'react'
import AppInput from '../../components/AppInput/AppInput'
import pxStyles from './PxToEm.module.css'

function PxToEm() {
    const [ base, setBase ] = useState(16)
    const [ pxToEm, setPxToEm] = useState(0)
    const [ emToPx, setEmToPx] = useState(0)
    const [ final, setFinal ] = useState(0)
    const [ unit, setUnit ] = useState('em')

    const handleBaseChange = (payload) => {
        setBase(payload)
        setFinal(0)
    }

    const handlePxChange = payload => {
        setPxToEm(payload)
        setFinal(payload/base)
        setUnit('em')
    }

    const handleEmChange = payload => {
        setEmToPx(payload)
        setFinal(payload*base)
        setUnit('px')
    }


    
  return (
    <div style={{padding: '0 30px'}}>
        <AppInput handleChange={payload => handleBaseChange(payload) }  initial={16} />
        <div className={pxStyles.equation}>
            <div>
                <AppInput handleChange={payload => handlePxChange(payload) } initial={pxToEm} label={'Px to Em'} />
            </div>
            <div>
                <AppInput handleChange={payload => handleEmChange(payload) } initial={emToPx} field={'em'} label={'Em to Px'} />
            </div>
            <div>
                <AppInput readOnlyInput={final} isReadonly={true} initial={final} field={unit} inputType={'text'} label="Final Result" />
            </div>
        </div>
    </div>
  )
}

export default PxToEm