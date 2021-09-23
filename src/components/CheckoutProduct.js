import React from 'react'
import Image from 'next/image'
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import ReactStars from "react-rating-stars-component";
import { Select } from 'antd';
const { Option } = Select;

import { changeCountToProduct, removeFromBasket } from '../slices/basketSlice';

const CheckoutProduct = ({ product: { id, title, price, rate, description, image, hasPrime }, count }) => {

    const dispatch = useDispatch();

    const handleClickRemoveFromBasket = (id) => {
        dispatch(removeFromBasket(id))
    }

    function handleChange(value) {
        dispatch(changeCountToProduct({ id, value }))
    }

    return (
        <div className="flex border-b mr-3 pb-2">
            <div className="min-w-[180px]">
                <Image
                    src={image}
                    width={180}
                    height={180}
                    objectFit="contain"
                />
            </div>
            <div className="flex-grow ml-5">
                <div className="flex items-center">
                    <h2 className="text-sm font-semibold lg:text-base">{title}</h2>
                    <span className="ml-auto text-xs lg:text-lg font-bold whitespace-nowrap">
                        <Currency
                            quantity={price}
                            currency="EUR"
                        />
                    </span>
                </div>
                <div>
                    <span className="-mt-5 text-xs">
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
                    </span>
                    <p className="line-clamp-3 text-sm mt-3">
                        {description}
                    </p>
                </div>
                <div className="flex items-center space-x-2 mt-1">
                    <div className="slash">
                        <Select defaultValue={count} style={{ width: 80, backgroundColor: "#f0f2f2" }} onChange={handleChange}>
                            {Array(10).fill().map((_, i) => (
                                <Option key={i} value={i + 1}>{i + 1}</Option>
                            ))}
                        </Select>
                    </div>
                    <button className="focus:outline-none text-xs text-blue-700" onClick={() => handleClickRemoveFromBasket(id)}>Delete</button>
                </div>
                {hasPrime && (
                    <div className="flex items-center space-x-2">
                        <img className="w-12" src="https://links.papareact.com/fdw" alt="prime-logo" />
                        <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default CheckoutProduct
