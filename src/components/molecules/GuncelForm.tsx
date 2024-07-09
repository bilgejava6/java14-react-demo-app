import React from 'react'

function GuncelForm(props:{header:string}) {
  return (
    <div className='mb-5 m-1 shadow '
    style={{minHeight:'200px', borderRadius: '20px', 
            backgroundColor: 'green', alignContent: 'center',
            textAlign: 'center'
            }}>
        <div className="m-3 ">
            <label className="form-label">{props.header}</label>
        </div>
    </div>
  )
}

export default GuncelForm;