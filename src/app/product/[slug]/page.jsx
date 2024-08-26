"use client";
import React from 'react'
import { useEffect, useState } from "react";
function ProductDetails({ params }) {
    const { slug } = params;
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('/data/products.json');
            let data = await response.json();
            data = await data.find(product => product.id == slug)
            setProduct(data);
        };

        fetchProducts();
    }, [slug]);
    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Check out this product!',
                    text: 'I found this amazing product on the Sri impex.',
                    url: window.location.href,  // Share the current URL
                });
                console.log('Successfully shared');
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            alert('Web Share API is not supported in your browser.');
        }
    };
    return (
        <div className='min-h-screen p-4 py-20 px-1'>
            <section class="relative ">
                <div class="w-full mx-auto px-0 sm:px-6 lg:px-0">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 mx-auto max-md:px-2 ">
                        <div class="img">
                            <div class="img-box h-full max-lg:mx-auto ">
                                <img src={product.imgUrl}
                                    class="max-lg:mx-auto lg:ml-auto h-full rounded-lg" />
                            </div>
                        </div>
                        <div
                            class="data w-full lg:pr-8 pr-0 xl:justify-start justify-center flex items-center max-lg:pb-10 xl:my-2 lg:my-5 my-0">
                            <div class="data w-full max-w-xl">
                                <p class="text-sm sm:text-lg font-medium leading-8 text-gray-600 mb-1 sm:mb-4">
                                </p>
                                <h2 class="font-manrope font-bold text-2xl leading-10 text-gray-900 mb-2 capitalize">{product.name}</h2>

                                <p class="text-gray-500 text-base font-normal mb-5">
                                    {product.description}
                                </p>
                                {/* <ul class="grid gap-y-4 mb-8">
                                    <li class="flex items-center gap-3">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="26" height="26" rx="13" fill="#244F36" />
                                            <path
                                                d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                                stroke="white" stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                        <span class="font-normal text-base text-gray-900 ">Branded shirt</span>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="26" height="26" rx="13" fill="#244F36" />
                                            <path
                                                d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                                stroke="white" stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                        <span class="font-normal text-base text-gray-900 ">3 color shirt</span>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="26" height="26" rx="13" fill="#244F36" />
                                            <path
                                                d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                                stroke="white" stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                        <span class="font-normal text-base text-gray-900 ">Pure Cotton Shirt with 60% as
                                            40%</span>
                                    </li>
                                    <li class="flex items-center gap-3">
                                        <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <rect width="26" height="26" rx="13" fill="#244F36" />
                                            <path
                                                d="M7.66669 12.629L10.4289 15.3913C10.8734 15.8357 11.0956 16.0579 11.3718 16.0579C11.6479 16.0579 11.8701 15.8357 12.3146 15.3913L18.334 9.37183"
                                                stroke="white" stroke-width="1.6" stroke-linecap="round" />
                                        </svg>
                                        <span class="font-normal text-base text-gray-900 ">all size is available</span>
                                    </li>
                                </ul>
                                <p class="text-gray-900 text-lg leading-8 font-medium mb-4">Size</p>
                                <div class="w-full pb-8 border-b border-gray-100 flex-wrap">
                                    <div class="grid grid-cols-3 min-[400px]:grid-cols-5 gap-3 max-w-md">
                                        <button
                                            class="bg-white text-center py-1 px-4 w-full font-semibold text-sm leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">S</button>
                                        <button
                                            class="bg-white text-center py-1 px-4 w-full font-semibold text-sm leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">M</button>
                                        <button
                                            class="bg-white text-center py-1 px-4 w-full font-semibold text-sm leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">L</button>
                                        <button
                                            class="bg-white text-center py-1 px-4 w-full font-semibold text-sm leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">XL</button>
                                        <button
                                            class="bg-white text-center py-1 px-4 w-full font-semibold text-sm leading-8 text-gray-900 border border-gray-200 flex items-center rounded-full justify-center transition-all duration-300 hover:bg-gray-50 hover:shadow-sm hover:shadow-gray-100 hover:border-gray-300 visited:border-gray-300 visited:bg-gray-50">XXL</button>
                                    </div>
                                </div> */}
                                <div class="flex items-center gap-3">
                                    <button
                                        onClick={handleShare}
                                        className="group transition-all flex duration-500 text-sm p-2 px-3 rounded-full bg-indigo-50 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4 mr-2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
                                        </svg>

                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default ProductDetails
