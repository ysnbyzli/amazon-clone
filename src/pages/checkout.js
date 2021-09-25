import Head from "next/head";
import Image from "next/image"
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";
import { useEffect, useState } from "react";
import Currency from 'react-currency-formatter';

import Header from '../components/Header'
import CheckoutProduct from "../components/CheckoutProduct";

const checkout = () => {

    const [count, setCount] = useState(0);
    const [total, setTotal] = useState(0);
    const basketItems = useSelector(selectItems);

    console.log(basketItems)

    useEffect(() => {
        setCount(
            basketItems.reduce((count, product) => count += product.count, 0)
        )
        setTotal(
            basketItems.reduce((total, item) => total += item.product.price * item.count, 0)
        )
    }, [basketItems])

    return (
        <div className="bg-gray-100" style={{ minHeight: "100vh" }}>
            <Head>
                <title>Checkout</title>
                <link rel="shortcut icon" href="https://iconarchive.com/download/i94399/bokehlicia/captiva/web-amazon.ico" />
            </Head>
            <Header />
            <main className="lg:flex max-w-screen-2xl mx-auto">
                {/* LEFT SIDE */}
                <div className="shadow-sm m-5 lg:flex-grow" >
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />
                    <div className="flex flex-col space-y-10 bg-white pl-2" >
                        <h1 className="text-3xl border-b py-4">{
                            basketItems.length === 0 ? "Your Amazon Basket is empty." : "Your Shopping Basket"
                        }</h1>

                        {basketItems.map((_, i) => (
                            <CheckoutProduct
                                key={_.product.id}
                                product={_.product}
                                count={_.count}
                            />
                        ))}
                        {
                            basketItems.length > 0 && (
                                <div className="flex justify-items-end">
                                    <span className="ml-auto pr-5 mb-5">
                                        Subtotal ({count} product{count > 1 ? "s" : null}):
                                        <span className="font-extrabold">
                                            {" "}
                                            <Currency
                                                quantity={total}
                                                currency="EUR"
                                            />
                                        </span>
                                    </span>
                                </div>
                            )
                        }

                    </div>
                </div>
                {/* RIGHT SIDE */}
                {basketItems.length > 0 && (
                    <div className="bg-white m-5 flex flex-col lg:min-w-[300px] max-h-44 space-y-4 p-3 pb-5">
                        {total > 100 && (
                            <p className="text-xs">
                                <span className="text-free">Your order is covered by <b>FREE Shipping. </b></span>
                                Select this option at the checkout step.
                            </p>
                        )}
                        <p>
                            Subtotal ({count} product{count > 1 ? "s" : null}):
                            <span className="font-extrabold">
                                {" "}
                                <Currency
                                    quantity={total}
                                    currency="EUR"
                                />
                            </span>
                        </p>
                        <button className="mt-auto button w-full rounded-lg">Complate The Shopping</button>
                    </div>
                )}

            </main>
        </div>
    )
}

export default checkout
