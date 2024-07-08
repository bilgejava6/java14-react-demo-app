import React, { useState } from 'react'
import { ISearchUser } from '../../models/ISearchUser';

function UserCard(props: any) {
  const [isClick,setIsClick] = useState(false);
  const tikla = ()=>{
    setIsClick(!isClick);
  }
  let user: ISearchUser = props.user;
  console.log('usercard render oldu');
  return (
    <>
        <div className="col-3 shadow-lg rounded m-3">
            <div className="row" style={{padding: '10px'}}>
                <img src="http://picsum.photos/100/100" alt="" style={{borderRadius: '50%'}}  />
            </div>
            <div className="row">
                <h3>{user.userName}</h3>
            </div>
            <div className="row">
                <h6>{user.email}</h6>
            </div>
            <div className="m-3">
                {
                    isClick
                    ?  <button onClick={tikla} className='btn btn-danger'>Butona Tıklandı</button>
                    : <button onClick={tikla} className='btn btn-success'>Tıkla</button>
                }
                
            </div>
        </div>
    </>
  )
}

export default UserCard;