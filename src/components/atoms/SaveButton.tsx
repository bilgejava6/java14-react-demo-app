import React, {useState} from 'react'

function SaveButton() {
    const [isClick, setIsClick] = useState(false);
    const saveAction = ()=>{
        setIsClick(!isClick);
    }
    const btnSave = () =>{
        if(isClick) return (
            <a onClick={saveAction} className="btn btn-success me-1">
					<i className="fa-regular fa-bookmark"></i>
			</a>
        )
        else return(
            <a onClick={saveAction} className="btn btn-outline-primary me-1">
					<i className="fa-regular fa-bookmark"></i>
			</a>
        )
    } 

  return (btnSave())
}

export default React.memo(SaveButton);