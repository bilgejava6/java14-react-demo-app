import React, { useState } from 'react'

function Register() {
  const [userName,setUserName] = useState('');
  const [password,setPassword] = useState('');
  const [rePassword,setRePassword] = useState('');
  const [email,setEmail] = useState('');
  const [isEmpty,setIsEmpty] = useState(false);
  
  const register = ()=>{
      if(userName === '' || password === '' || email === '')
        setIsEmpty(true);
      else{
        setIsEmpty(false);
      }
  };

  return (
    <>
    <div className="container">
        <div className="row justify-content-center mt-5">
            <div className="col-4">
                {
                    isEmpty ?
                    <div className="alert alert-warning" role="alert">
                        <h4 className="alert-heading">Uyarı</h4>                            
                        <hr />
                        <p className="mb-0">Kullanıcı adı ve Şifre boş geçilemez</p>
                    </div>
                    : null
                }
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">UserName</label>
                    <input onChange={evt=>setUserName(evt.target.value)} type="text" className="form-control" id="username" placeholder="username" />
                    
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input onChange={evt=>setPassword(evt.target.value)} type="password" className="form-control" id="password" placeholder="password" />
                </div>
                <div className="mb-3 d-grid">
                    <input onClick={register} type="button" value="Register" className="btn btn-success" />    
                </div>   
                <div className="mb-3 text-center d-grid">
                    <a className="btn btn-outline-warning" href="/login">login</a>
                </div>                     
            </div>
        </div>
    </div>
</>
  )
}

export default Register;