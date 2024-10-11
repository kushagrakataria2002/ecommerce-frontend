import React from 'react'; 
import {Link} from "react-router-dom"; 

const Card = ({ title, src, id }) => {
    return (
        <>
            <Link to={`/product/${id}`}>
            <article className="relative">
                <div className="aspect-square overflow-hidden transition-all duration-700 hover:scale-110">
                    <img
                        className="h-full w-full object-contain transition-all duration-300 group-hover:scale-125 p-8"
                        src={src}
                        alt={title}
                    />
                </div>
                <div className="mt-4 flex items-start justify-between">
                    <div className="">
                        <h3 className="text-xs font-semibold sm:text-sm md:text-base text-center ">
                            <Link href="" title="" className="">
                                {title}
                                <span className="absolute" aria-hidden="true" />
                            </Link>
                        </h3>
                        <div className="mt-2 flex items-center">

                        </div>
                    </div>
                    <div className="text-right">
                    </div>
                </div>
            </article>
            </Link>
        </>
    )
}

export default Card