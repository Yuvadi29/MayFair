"use client";
import '@coreui/coreui/dist/css/coreui.min.css';
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image';
import React from 'react';

const FlooPlan = () => {
    return (
        <div>
            <div className="p-[40px] flex bg-[#193959]">
                <div className="w-[100%] pr-[15px] pl-[15px] mr-auto ml-auto">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-border.webp" alt="image" width={500} height={500} className='w-[105px]' />
                        <div className="py-3 flex flex-col justify-center items-center">
                            <div className='text-[#fff] text-center text-[32px] font-medium w-[1110px] leading-9'>
                                FLOOR PLANS
                            </div>
                        </div>
                    </div>

                    {/* Carousel */}

                    <div className="justify-center mt-[10px] mr-0 ml-0 mb-[-30px] items-center flex">
                        <div className="relative overflow-hidden translate-x-6">
                            <div className="z-[1px] static transform-none w-auto top-[50%]">
                                <CCarousel controls >
                                    <CCarouselItem >
                                        <CImage className="d-block w-[100]" src="https://mayfairgardens.in/images/floor-plan/mayfair-virar-gardens-the-promenade-floor-plan-1.webp" alt="slide 1" />
                                    </CCarouselItem>
                                    <CCarouselItem>
                                        <CImage className="d-block w-[100] " src="https://mayfairgardens.in/images/floor-plan/mayfair-virar-gardens-the-promenade-floor-plan-2.webp" alt="slide 2" />
                                    </CCarouselItem>
                                    <CCarouselItem>
                                        <CImage className="d-block w-[100] " src="https://mayfairgardens.in/images/floor-plan/mayfair-virar-gardens-the-promenade-floor-plan-2.webp" alt="slide 2" />
                                    </CCarouselItem>
                                    <CCarouselItem>
                                        <CImage className="d-block w-[100] " src="https://mayfairgardens.in/images/floor-plan/mayfair-virar-gardens-the-promenade-floor-plan-3.webp" alt="slide 2" />
                                    </CCarouselItem>
                                </CCarousel>

                            </div>
                        </div>
                    </div>

                    <div className="w-full float-left p-0">
                        <div className="text-center mt-[40px] ">
                            <div className='text-[17px] text-white bg-[#001f33] inline-block relative pt-[13px] pr-[28px] pb-[13px] pl-[28px] border-1 border-white mx-[5px] my-[5px]'>Avail Sample Flat Video</div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default FlooPlan