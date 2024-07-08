import swal from "sweetalert";
import { IUser } from "../models/IUser";
import EndPoints from "./RestApis";

export const register = (userName: string, password:string, rePassword:string,email:string)=>{
    fetch(EndPoints.register,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({            
          userName, 
          password,
          rePassword,
          email
        })
      }).then(data=> data.json())
      .then(data=>{
        swal('Başarılı','Register işlemi başarı ile tamamlanmıştır','success');
      })
};

export const alternateRegister = (user: IUser)=>{
    fetch(EndPoints.register,{
        method: 'POST',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({            
          'userName': user.userName, 
          'password': user.password,
          'rePassword': user.rePassword,
          'email': user.email
        })
      }).then(data=> data.json())
      .then(data=>{
        console.log(data);
      })
};

