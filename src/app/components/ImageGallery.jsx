"use client";
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Image from 'next/image';
import React from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';

const ImageGallery = () => {
    return (

        <div className="bg-[#fde3d0]">
            <div className="p-[40px] flex">
                <div className="w-[100%] pr-[15px] pl-[15px] mr-auto ml-auto">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-border-black.webp" alt="image" width={500} height={500} className='w-[105px]' />
                        <div className="py-3 flex flex-col justify-center items-center">
                            <div className='text-[#012842] text-center text-[32px] font-medium w-[1110px] leading-9'>
                                IMAGE GALLERY
                            </div>
                        </div>
                    </div>

                    {/* Carousel */}

                    <div className="justify-center mt-[10px] mr-0 ml-0 mb-[-30px] items-center flex">
                        <div className="relative overflow-hidden translate-x-6">
                            <div className="z-[1px] static transform-none w-auto top-[50%]">
                                <CCarousel controls >
                                    <CCarouselItem >
                                        <CImage className="d-block w-[100] h-[100]" src="https://mayfairgardens.in/images/gallery/mayfair-virar-gardens-the-promenade-1s.webp" alt="slide 1" />
                                    </CCarouselItem>
                                    <CCarouselItem>
                                        <CImage className="d-block w-[100] " src="https://mayfairgardens.in/images/gallery/mayfair-virar-gardens-the-promenade-2s.webp" alt="slide 2" />
                                    </CCarouselItem>
                                    <CCarouselItem>
                                        <CImage className="d-block w-[100] " src="https://mayfairgardens.in/images/gallery/mayfair-virar-gardens-the-promenade-3s.webp" alt="slide 2" />
                                    </CCarouselItem>
                                    <CCarouselItem>
                                        <CImage className="d-block w-[100] " src="https://mayfairgardens.in/images/gallery/mayfair-virar-gardens-the-promenade-4s.webp" alt="slide 2" />
                                    </CCarouselItem>
                                    <CCarouselItem>
                                        <CImage className="d-block w-[100] " src="https://mayfairgardens.in/images/gallery/mayfair-virar-gardens-the-promenade-5s.webp" alt="slide 2" />
                                    </CCarouselItem>
                                    <CCarouselItem>
                                        <CImage className="d-block w-[100] " src="https://mayfairgardens.in/images/gallery/mayfair-virar-gardens-the-promenade-6s.webp" alt="slide 2" />
                                    </CCarouselItem>
                                    <CCarouselItem>
                                        <CImage className="d-block w-[100] " src="https://mayfairgardens.in/images/gallery/mayfair-virar-gardens-the-promenade-7s.webp" alt="slide 2" />
                                    </CCarouselItem>
                                </CCarousel>

                            </div>
                        </div>
                    </div>

                    <div className="my-8 flex flex-col justify-center items-center">
                        <div className="bg-[#012842] my-4 ">
                            <div className="text-[17px] bg-[#012842] border-1 border-white text-white px-4 py-2 mx-[5px] my-[5px]">
                                Avial Virtual Tour
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ImageGallery;
