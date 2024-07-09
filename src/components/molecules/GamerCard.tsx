import React from 'react'

interface IGameProps{
    takim: string,
    renk: number
}

function GamerCard(props: IGameProps) {

    const getColour= ()=>{
        switch (props.renk) {
            case 1: return "row text-bg-primary";
            case 2: return "row text-bg-success";
            case 3: return "row text-bg-warning";
            case 4: return "row text-bg-danger";
            case 5: return "row text-bg-info";            
            default: return "row text-bg-primary";
        }
    }
  return (
    <div className='m-1 shadow'>
        <div className={getColour()}  style={{borderTopLeftRadius: '15px', borderTopRightRadius:'15px'}}>
            <h1 className='text-center'>{props.takim}</h1>
        </div>
        <div className="row mt-5">
            <h5 className='text-center'>Sayıyı tahmin et</h5>
        </div>
        <div className="row mt-4" style={{width: '50%', marginLeft:'25%'}}>
            <input type="text" className='form-control'/>
        </div>
        <div className="row mt-4 justify-content-center">
            <input type="button" className='btn btn-success' value="Tahmin Et" style={{width: '100px', height:'100px', borderRadius:'50%'}} />
        </div>
        <div className="row mt-5 mb-5"></div>
    </div>
  )
}

export default GamerCard;