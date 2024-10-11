import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import Loader from './Loader.jsx';

const ProductDetails = () => {

    const param = useParams();

    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchProductDetails = async (req, res) => {

            try {

                const { data } = await axios.get(`https://fakestoreapi.com/products/${param.id}`);

                setProductDetail(data);
                setLoading(false);

            } catch (error) {
                alert("something Went Wrong"); 
                setLoading(false); 
            }

        }

        fetchProductDetails();

    }, []);

    return (
        <>

            {
                loading ? <Loader /> :
                    <>
                        <div className="bg-gray-100 mt-24">
                            <div className="container mx-auto px-4 py-8">
                                <div className="flex flex-wrap -mx-4">
                                    {/* Product Images */}
                                    <div className="w-full md:w-1/3 px-4 mb-8">
                                        <img
                                            src={productDetail.image}
                                            alt="Product"
                                            className="w-full h-auto rounded-lg shadow-md mb-4"
                                            id="mainImage"
                                        />
                                        {/* <div className="flex gap-4 py-4 justify-center overflow-x-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxMnx8aGVhZHBob25lfGVufDB8MHx8fDE3MjEzMDM2OTB8MA&ixlib=rb-4.0.3&q=80&w=1080"
                                    alt="Thumbnail 1"
                                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onclick="changeImage(this.src)"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1484704849700-f032a568e944?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw0fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                                    alt="Thumbnail 2"
                                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onclick="changeImage(this.src)"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1496957961599-e35b69ef5d7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                                    alt="Thumbnail 3"
                                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onclick="changeImage(this.src)"
                                />
                                <img
                                    src="https://images.unsplash.com/photo-1528148343865-51218c4a13e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwzfHxoZWFkcGhvbmV8ZW58MHwwfHx8MTcyMTMwMzY5MHww&ixlib=rb-4.0.3&q=80&w=1080"
                                    alt="Thumbnail 4"
                                    className="size-16 sm:size-20 object-cover rounded-md cursor-pointer opacity-60 hover:opacity-100 transition duration-300"
                                    onclick="changeImage(this.src)"
                                />
                            </div> */}
                                    </div>
                                    {/* Product Details */}
                                    <div className="w-full md:w-1/2 px-4">
                                        <h2 className="text-3xl font-bold mb-2">{productDetail.title}</h2>
                                        <p className="text-gray-600 mb-4">{productDetail.category}</p>
                                        <div className="mb-4">
                                            <span className="text-2xl font-bold mr-2">${productDetail.price}</span>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <span className="text-gray-600">{productDetail.rating.count} Reviews</span>
                                        </div>
                                        <p className="text-gray-700 mb-6">{productDetail.description}</p>
                                        <div className="flex space-x-4 mb-6">
                                            <button className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                                Buy Now
                                            </button>
                                            <button className="bg-gray-200 flex gap-2 items-center  text-gray-800 px-6 py-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2">
                                                Add to Cart
                                            </button>
                                        </div>
                                        {/* <div>
                                <h3 className="text-lg font-semibold mb-2">Key Features:</h3>
                                <ul className="list-disc list-inside text-gray-700">
                                    <li>Industry-leading noise cancellation</li>
                                    <li>30-hour battery life</li>
                                    <li>Touch sensor controls</li>
                                    <li>Speak-to-chat technology</li>
                                </ul>
                            </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
            }

        </>
    )
}

export default ProductDetails