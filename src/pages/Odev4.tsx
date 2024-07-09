import React from 'react'
import GirisForm from '../components/molecules/GirisForm';
import GuncelForm from '../components/molecules/GuncelForm';

function Odev4() {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <GirisForm />
            </div>
            <div className="col">
                <GuncelForm header='Bu başka bir başlık'/>
            </div>
            <div className="col">
                <GirisForm />
            </div>
        </div>
    </div>
  )
}

export default Odev4;