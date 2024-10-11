import React from 'react';
import mongo from '../images/mongo.png'; 
import express from '../images/expressJs.png';
import react from '../images/react.png';
import node from '../images/nodeJs.png';

const About = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container py-32 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">
                            Hii Myself Kushagra Kataria
                        </h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Currently in the final year of engineering from IP University Delhi
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-evenly items-center -mt-5">
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-60 w-80 object-center flex flex-col justify-center items-center text-center mb-8">
                                <img
                                    alt="team"
                                    className="flex-shrink-0 rounded-lg  mb-4"
                                    src={mongo}
                                />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">
                                        Mongo DB
                                    </h2>
                                    <p className="mb-4">
                                        No SQL Database
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-60 w-80 object-center flex flex-col justify-center items-center text-center mb-8">
                                <img
                                    alt="team"
                                    className="flex-shrink-0 rounded-lg mb-4"
                                    src={express}
                                />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">
                                        Express
                                    </h2>
                                    <p className="mb-4">
                                        Framework of Node JS for Server Side Development
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-60 w-80 object-center flex flex-col justify-center items-center text-center mb-8">
                                <img
                                    alt="team"
                                    className="flex-shrink-0 rounded-lg mb-4"
                                    src={react}
                                />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">
                                        React JS
                                    </h2>
                                    
                                    <p className="mb-4">
                                        Javascript Framework for Frontend Development
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 lg:w-1/4 md:w-1/2">
                            <div className="h-60 w-80 object-center flex flex-col justify-center items-center text-center mb-8">
                                <img
                                    alt="team"
                                    className="flex-shrink-0 rounded-lg  mb-4"
                                    src={node}
                                />
                                <div className="w-full">
                                    <h2 className="title-font font-medium text-lg text-gray-900">
                                        Node JS
                                    </h2>
                                
                                    <p className="mb-4">
                                        Used for Running Javascript Outside Browser
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default About