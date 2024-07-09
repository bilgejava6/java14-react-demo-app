import React from 'react'

function GirisForm() {
  return (
    <div className='m-1 pt-5 p-2 pb-5 shadow' >
        <div className="mb-2  d-grid">
            <input type="text" className='form-input' />
        </div>
        <div className="mb-2 d-grid">
             <button type="button" className='btn btn-success'>Değiştir</button>
        </div>
       
    </div>
  )
}

export default GirisForm