import ReactStars from "react-rating-stars-component";
import Image from 'next/image'
import { useState } from 'react'
import Currency from 'react-currency-formatter';
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";


const Product = ({ id, title, price, description, category, image, rating: { rate } }) => {

    const [hasPrime] = useState(Math.random() < 0.5)

    const dispatch = useDispatch();

    const handleClickAddToBasket = (id) => {
        const product = {
            id,
            title,
            price,
            description,
            category,
            image,
            rate,
            hasPrime
        }
        dispatch(addToBasket(product))
    }

    return (
        <div className="relative flex flex-col mb-5 bg-white z-30 p-10">

            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain" />

            <h4 className="my-3">{title}</h4>

            <ReactStars
                count={5}
                size={24}
                value={rate}
                edit={false}
                isHalf={true}
                emptyIcon={<i className="far fa-star"></i>}
                halfIcon={<i className="fa fa-star-half-alt"></i>}
                fullIcon={<i className="fa fa-star"></i>}
                activeColor="#ffd700"
            />

            <p className="text-xs my-2 line-clamp-2">{description}</p>

            <div className="mb-5">
                <Currency
                    quantity={price}
                    currency="EUR"
                />
            </div>

            {hasPrime && (
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt="prime-logo" />
                    <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                </div>
            )}

            <button className="mt-auto button" onClick={() => handleClickAddToBasket(id)}>Add to Basket</button>
        </div>
    )
}

export default Product
