import React from 'react'; 
import {Link} from "react-router-dom"; 

const Footer = () => {
    return (
        <>
        <hr />
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <span className="ml-3 text-xl">E-Shop</span>
                    </Link>
                    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        © 2024 E-Shop —
                        <Link
                            href="https://twitter.com/knyttneve"
                            className="text-gray-600 ml-1"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            @All Rights Reserved
                        </Link>
                    </p>
                </div>
            </footer>

        </>
    )
}

export default Footer