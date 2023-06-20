import Image from 'next/image';
import React from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';

const Promo3 = () => {
    return (
        // light pink : #eeefff
        // dark blue : #012842
        // light blue : #0563a2
        // Skin : #fde3d0

        <div className="bg-[#fde3d0]">
            <div className="pt-[40px] flex flex-col justify-center items-center">
                {/* top seciton */}
                <div className="flex flex-col justify-center items-center">
                    <Image src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-border-black.webp" alt="image" width={500} height={500} className='w-[105px]' />
                    <div className="py-4 flex flex-col justify-center items-center">
                        <div className='text-[#012842] text-center text-[32px] font-medium w-[1110px] leading-9'>
                            SPACIOUS HOMES THAT MATCH
                            <br />
                            THE HIGH STREET LIFE
                        </div>
                    </div>
                </div>
                {/* Middle section  */}
                <div className="flex justify-center items-center">
                    <div className="border-4 border-white">
                        <Image src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-01.webp" alt="" width={500} height={500} />
                    </div>
                    {/* bullets points container  */}
                    <div className="ml-3 flex flex-col justify-start items-center">
                        <div className="text-[14px] flex flex-col justify-center items-start">
                            <div className="pb-2 font-bold text-[20px] text-[#012842]">
                                10% larger than the average 1 Bed homes in Virar*
                            </div>
                            <div className="flex justify-center items-center">
                                <AiOutlineRightCircle className="text-[27px] font-thin" />
                                <span className="ml-1">Large Rectangular Living Rooms</span>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiOutlineRightCircle className="text-[27px]" />
                                <span className="ml-1">Large Balconies in Every Home</span>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiOutlineRightCircle className="text-[27px]" />
                                <span className="ml-1">Dual bathrooms in every home for the utility of a 2 BHK</span>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiOutlineRightCircle className="text-[27px]" />
                                <span className="ml-1">Elegantly designed Master Bedroom</span>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiOutlineRightCircle className="text-[27px]" />
                                <span className="ml-1">Wardrobe niche for effcient use of space</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* button  */}
                <div className="my-8 flex flex-col justify-center items-center">
                    <div className="bg-[#012842] ">
                        <div className="text-[17px] bg-[#012842] border-1 border-white text-white px-4 py-2 mx-[5px] my-[5px]">
                            Avial Home Pick / Drop
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo3
