import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Image from 'next/image'
import axios from 'axios';
import ReactStars from "react-rating-stars-component";
import Currency from 'react-currency-formatter';

import Header from '../../components/Header';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../slices/basketSlice';


const Details = () => {

    const [product, setProduct] = useState({})
    const dispatch = useDispatch();

    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        fetchProductById(id);
    }, [id])

    const fetchProductById = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        setProduct(response.data)
    }

    const { title, description, price, category, rating, image } = product;

    const handleClickAddToCart = () => {
        dispatch(addToBasket(product))
    }

    return (
        <>
            <Header />
            <main className="max-w-screen-2xl mx-auto py-10 md:flex md:pt-20">
                <div>
                    {product.image && (
                        <>
                            <Image
                                src={image}
                                width={800}
                                height={500}
                                objectFit="contain"
                            />
                        </>
                    )}
                </div>
                <div className="mt-4 md:mt-0 px-8 relative">
                    <h1 className="font-semibold text-lg pr-20">{title}</h1>
                    <span className="absolute top-1 right-8">{category}</span>
                    <span>
                        {rating && <ReactStars
                            count={5}
                            size={24}
                            value={rating.rate}
                            edit={false}
                            isHalf={true}
                            emptyIcon={<i className="far fa-star"></i>}
                            halfIcon={<i className="fa fa-star-half-alt"></i>}
                            fullIcon={<i className="fa fa-star"></i>}
                            activeColor="#ffd700"
                        />}
                    </span>
                    <p>
                        {description}
                    </p>
                    <div className="my-3 font-bold ">
                        <Currency
                            quantity={price}
                            currency="EUR"
                        />
                    </div>
                    <div className="flex">
                        <button className="button w-64 mx-auto" onClick={handleClickAddToCart}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Details

