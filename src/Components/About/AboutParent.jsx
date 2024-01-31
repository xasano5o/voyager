import Footer from '../footer/Footer'
import Busisnes from './Busisnes'
import CaruselNav from './Carusel'
import EXPERIENCE from './EXPERIENCE '
import Logoes from './Logoes'
import OurSer from './OurSer'

const AboutCom = () => {
  return (
    <div className='container mx-auto'>
      <CaruselNav />
      <EXPERIENCE />
      <OurSer />
      <Busisnes />
      <Logoes/>
      <Footer/>
    </div>
  )
}

export default AboutCom