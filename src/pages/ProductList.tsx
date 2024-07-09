import React, { useState } from 'react'
import { dataProductList, dataProperties } from '../utils/Datas';

function ProductList() {
    const [properties,setProperties] = useState(dataProperties);
    const [productList,setProductList] = useState(dataProductList);
    const [isLike,setIsLike] = useState(false);
    const likeAction = ()=>{
        setIsLike(!isLike);
    }
  return (
    <div className="container">
        <div className="row mt-5 shadow p-2 justify-content-center">
            <div className="col-8">
                <div className="row">
                    <div className="col">
                        <div className="form-check">
                            <input className='form-check-input' type="checkbox" />
                            <label className="form-check-label">Ana Kart</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-check">
                            <input className='form-check-input' type="checkbox" />
                            <label className="form-check-label">İşlemci</label>
                        </div>
                    </div>
                    <div className="col">
                         <div className="form-check">
                            <input className='form-check-input' type="checkbox" />
                            <label className="form-check-label">Ram</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-check">
                            <input className='form-check-input' type="checkbox" />
                            <label className="form-check-label">Harddisk</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-check">
                            <input className='form-check-input' type="checkbox" />
                            <label className="form-check-label">Monitör</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row mt-3 shadow p-2 justify-content-center">
            <div className="col-10">
                <div className="row">
                        {
                            productList.map((urun,index)=>{
                                return(
                                    <div className="col-4" key={index}>
                                        <div className="card m-2 shadow">
                                            <img src={urun.image} className="card-img-top p-5"/>
                                            <div className="card-body">
                                                <h5 className="card-title">{urun.tur}</h5>
                                                <p className="card-text">{urun.ad}</p>
                                                <p className="card-text">{urun.fiyat} ₺</p>
                                                {
                                                    isLike
                                                    ? <a href="#" onClick={likeAction} className="btn btn-success me-1"><i className="fa-regular fa-heart "></i></a>
                                                    : <a href="#" onClick={likeAction} className="btn btn-outline-primary me-1"><i className="fa-regular fa-heart "></i></a>
                                                }
                                                
                                                <a href="#" className="btn btn-outline-primary me-1"><i className="fa-regular fa-bookmark"></i></a>
                                                <a href="#" className="btn btn-outline-primary me-1"><i className="fa-regular fa-comment"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductList;