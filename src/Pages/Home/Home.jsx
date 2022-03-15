import BoxShadow from '../BoxShadow/BoxShadow'
import PxToEm from '../PxToEm/PxToEm'
import HomeStyles from './Home.module.css'
import Header from '../../components/Header/Header'

function Home() {
  return (
    <div className={HomeStyles.home}>
        <Header /><br></br><br></br>
        <div className={HomeStyles['flex-container']}>
            <div className={HomeStyles['flex-body']}>
                <div className={HomeStyles['box-shadow']}>
                    <div style={{padding: '20px 30px'}}>
                        <h3>Box Shadow</h3>
                    </div>
                    <BoxShadow />
                    <div style={{padding: '20px 30px'}}>
                        <h3>PX to EM</h3>
                    </div>
                    <PxToEm />
                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home