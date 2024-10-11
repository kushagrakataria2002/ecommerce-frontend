import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card.jsx';
import hero_section_image from "../images/iphone_red.png";
import Loader from './Loader.jsx';

const Home = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [limit, setLimit] = useState(4);

  useEffect(() => {

    const fetchProducts = async (req, res) => {

      try {

        const { data } = await axios.get(`https://fakestoreapi.com/products?limit=${limit}`);

        setProducts(data);
        setLoading(false);

      } catch (error) {
        alert("Something Went Wrong"); 
        setLoading(false); 
      }

    }

    fetchProducts();

  }, [limit]);

  return (
    <>

      {
        loading ? <Loader /> :
          <>
            <section className="text-gray-600 body-font">
              <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center max-sm:flex-col-reverse ">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">

                  <h1 className="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl "><span className="text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-700 font-serif ">E-Shop</span> Scalable AI.</h1>

                  {/* </h1> */}
                  <p className="mb-8 leading-relaxed ">
                    Copper mug try-hard pitchfork pour-over freegan heirloom neutra air
                    plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk
                    tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
                    chambray.
                  </p>
                  <div className="flex justify-center">
                    <a href="#products" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Explore Products</a>
                  </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                  <img
                    className="object-cover object-center rounded"
                    alt="hero"
                    src={hero_section_image}
                  />
                </div>
              </div>
            </section>

            <div className="mx-auto max-w-screen-lg">
              <p id="products" className="text-transparent bg-clip-text bg-gradient-to-r to-red-700 from-blue-700 text-4xl text-center mb-5">Products</p>
              <hr />
              <main className="cursor-pointer grid grid-cols-2 gap-x-6 gap-y-10 px-2 pb-20 sm:grid-cols-3 sm:px-8 lg:mt-16 lg:grid-cols-4 lg:gap-x-4 lg:px-0">
                {
                  products.map((element) => (
                    <Card title={element.title} src={element.image} id={element.id} key={element.id} />
                  ))
                }
              </main>
            </div>

            <hr />

            <p className='text-center mb-5 mt-5 underline'>Results Per Page</p>

            <div className='flex justify-center items-center mb-5'>
              <button type="button" onClick={() => { setLimit(limit - 1); setLoading(true) }} disabled={limit === 4} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decrease</button>
              <button type="button" className="cursor-not-allowed text-blue-700  border-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500">{limit}</button>
              <button type="button" onClick={() => { setLimit(limit + 1); setLoading(true) }} disabled={limit >= 20} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Increase</button>
            </div>
            <div className='flex justify-center items-center'>
              <button type="button" onClick={() => { setLimit(20); setLoading(true) }} disabled={limit >= 20} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Show All Products</button>
              <button type="button" onClick={() => { setLimit(4); setLoading(true) }} disabled={limit === 4} className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Reset all filters</button>
            </div>

          </>
      }
    </>
  )
}

export default Home