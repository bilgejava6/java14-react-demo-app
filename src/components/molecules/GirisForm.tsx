import React, { useState } from 'react'

interface IFormProps{
    onClick: (value:string) => void,
    isActive: boolean
}

function GirisForm(props: IFormProps ) {
    const [baslik,setBaslik] = useState('');
    const degeriAl = ()=>{
        console.log('değer....: ', baslik)
        props.onClick(baslik);
    }
  return (
    <div className='m-1 pt-5 p-2 pb-5 shadow' >
        <div className="mb-2  d-grid">
            <input type="text" className='form-input' onChange={evt=>setBaslik(evt.target.value)}/>
        </div>
        <div className="mb-2 d-grid">
             <button onClick={degeriAl} type="button" disabled={!props.isActive} className='btn btn-success'>Değiştir</button>
        </div>
       
    </div>
  )
}

export default GirisForm