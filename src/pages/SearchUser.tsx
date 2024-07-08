import React, { useState } from 'react'
import { ISearchUser } from '../models/ISearchUser';
import { searchUsers } from '../utils/RestActions';
import UserCard from '../components/molecules/UserCard';

function SearchUser() {

  const [searchText,setSearchText] = useState('');
  const [userList,setUserList] = useState<ISearchUser[]>([]);  // any[]
  const findUserList = ()=>{
    searchUsers(searchText).then(data=> setUserList(data));
  }
  console.log('SEARCH USER render oldu');
  return (
    <>
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-10">
               
                <div className="mb-3 d-grid">
                    <input onChange={evt=>setSearchText(evt.target.value)} type="text" className="form-control" placeholder="ara" />
                    <button onClick={findUserList} className='btn btn-success mt-2' type="button">Ara</button>
                </div>
                <div className="mb-3">
                   <div className='row'>
                    {
                        userList.map((user,index)=>{
                            return(
                                <UserCard key={index} user={user} />
                            )
                        })
                    }
                        
                   </div>
                </div>
                          
            </div>
        </div>
    </div>
</>
  )
}

export default SearchUser;