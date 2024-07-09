import React, { useState } from "react";
import { dataProductList, dataProperties } from "../utils/Datas";
import ProductCard from "../components/molecules/ProductCard";
import CheckButton from "../components/atoms/CheckButton";

function ProductList() {
	const [properties, setProperties] = useState(dataProperties);
	const [productList, setProductList] = useState(dataProductList);
	const urunList = () => {
		return productList.map((urun, index) => {
			return (
				<div className="col-4" key={index}>
					<ProductCard urunBilgisi={urun} />
				</div>
			);
		});
	};
    const propList = ()=>{
        return properties.map(
            (p,index)=>{
                return (
                    <div className="col">
                        <CheckButton name={p}/>
                    </div>
                )
            }
        )
    }
	return (
		<div className="container">
			<div className="row mt-5 shadow p-2 justify-content-center">
				<div className="col-8">
					<div className="row">
						{
                            propList()
                        }
					</div>
				</div>
			</div>
			<div className="row mt-3 shadow p-2 justify-content-center">
				<div className="col-10">
					<div className="row">{urunList()}</div>
				</div>
			</div>
		</div>
	);
}

export default ProductList;
