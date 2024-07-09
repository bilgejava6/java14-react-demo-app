import {useState} from 'react'
import GirisForm from '../components/molecules/GirisForm';
import GuncelForm from '../components/molecules/GuncelForm';

function Odev4() {

const [header, setHeader] = useState('');
const [activeButton,setActiveButtn] = useState(1);
const degistir = (deger: string)=>{
    setHeader(deger);
    if(activeButton===1) setActiveButtn(2);
    else setActiveButtn(1);
}

  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <GirisForm onClick={value=>{degistir(value)}} isActive={activeButton===1} />
            </div>
            <div className="col">
                <GuncelForm header={header}/>
            </div>
            <div className="col">
                <GirisForm onClick={value=>{degistir(value)}} isActive={activeButton!==1}/>
            </div>
        </div>
    </div>
  )
}

export default Odev4;