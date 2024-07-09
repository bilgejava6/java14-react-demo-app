import {useState} from "react";
import LikeButton from "../atoms/LikeButton";
import SaveButton from "../atoms/SaveButton";
import CommentButton from "../atoms/CommentButton";

function ProductCard(props:any) {
    const urun = props.urunBilgisi;

	return (
		<div className="card m-2 shadow">
			<img src={urun.image} className="card-img-top p-5" />
			<div className="card-body">
				<h5 className="card-title">{urun.tur}</h5>
				<p className="card-text">{urun.ad}</p>
				<p className="card-text">{urun.fiyat} ₺</p>
                <LikeButton />
                <SaveButton />
                <CommentButton />
			</div>
		</div>
	);
}

export default ProductCard;
