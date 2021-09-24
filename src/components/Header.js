import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
} from '@heroicons/react/outline'

import { signIn, signOut, useSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { selectItems } from '../slices/basketSlice'
import { search } from '../slices/productSlice'
const Header = () => {

    const [count, setCount] = useState(0);

    const [session] = useSession();
    const router = useRouter();

    const basketItems = useSelector(selectItems)
    const searchItems = useSelector(state => state.products.searchItems)
    const dispatch = useDispatch();

    useEffect(() => {
        setCount(
            basketItems.reduce((count, product) => count += product.count, 0)
        )
    }, [basketItems])

    const handleChangeSearch = (e) => {
        const value = e.target.value;
        if (!(value == "") || !(value == null)) {
            if (value.length > 2) {
                dispatch(search(value))
            }
        }
    }
    return (
        <header>
            {/* TOP NAV */}
            <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
                <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
                    <Image
                        onClick={() => router.push("/")}
                        src="https://links.papareact.com/f90"
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                    />
                </div>
                {/* SEARCH */}
                <div className={`hidden sm:flex items-center h-10 flex-grow rounded-t-md rounded-b-md cursor-pointer bg-yellow-400 hover:bg-yellow-500 focus-within:border-yellow-500 ${searchItems ? null : "focus-within:border-2"} relative z-50`}>
                    <input
                        type="text"
                        className={`flex-grow flex-shrink ${searchItems.length > 0 ? "rounded-tl-md" : "rounded-l-md"} h-full p-2 px-4 focus:outline-none`}
                        onChange={handleChangeSearch}
                    />
                    <SearchIcon className="h-12 p-4" />
                    {searchItems.length > 0 && (<div>
                        <ul className="bg-white absolute top-9 left-0 w-full z-40 rounded-b-md p-2 px-4">
                            {searchItems.map(item => (
                                <li>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>)}

                </div>
                {/* RIGHT */}
                <div className="text-white text-xs flex items-center space-x-6 mx-6 whitespace-nowrap">
                    <div onClick={!session ? signIn : signOut} className="link">
                        <p>Hello, {session ? ` ${session.user.name}` : " please login"}</p>
                        <p className="font-extrabold md:text-sm">Account & List</p>
                    </div>
                    <div className="link">
                        <p>Returns</p>
                        <p className="font-extrabold md:text-sm">& Orders</p>
                    </div>
                    <div className="link flex relative items-center" onClick={() => router.push("/checkout")}>
                        <ShoppingCartIcon className="h-9" />
                        <p className="hidden md:inline font-extrabold md:text-sm self-end">Basket</p>
                        <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">{count}</span>
                    </div>
                </div>
            </div>
            {/* BOTTOM NAV */}
            <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                <p className="link flex items-center">
                    <MenuIcon className="h-6 mr-1" /> All
                </p>
                <p className="link">Prime Vide</p>
                <p className="link">Amazon Businne</p>
                <p className="link">Today's Deal</p>
                <p className="link hidden lg:inline-flex">Electronic</p>
                <p className="link hidden lg:inline-flex">Food $ Grocery</p>
                <p className="link hidden lg:inline-flex">Prime</p>
                <p className="link hidden lg:inline-flex">Buy Again</p>
                <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                <p className="link hidden lg:inline-flex">Helath & Personal Care</p>
            </div>

        </header>
    )
}

export default Header


