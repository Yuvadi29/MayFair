import Image from 'next/image'
import React from 'react'
import { AiOutlineRightCircle } from 'react-icons/ai'

const Promo4 = () => {
    return (
        // light pink : #eeefff
        // dark blue : #012842
        // light blue : #0563a2
        // Skin : #fde3d0

        <div className="bg-[#875f35]">
            <div className="pt-[40px] flex flex-col justify-center items-center">
                {/* top seciton */}
                <div className="flex flex-col justify-center items-center">
                    <Image src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-border.webp" alt="image" width={500} height={500} className='w-[105px]' />
                    <div className="py-3 flex flex-col justify-center items-center">
                        <div className='text-[#fff] text-center text-[32px] font-medium w-[1110px] leading-9'>
                            EXCLUSIVE AND FEATURE-RICH
                        </div>
                    </div>
                </div>
                {/* Middle section  */}
                <div className="border-4 border-white">
                    <Image src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-full-img.webp" alt="" width={500} height={500} className="w-[1005px]" />
                </div>
                <div className="text-white mt-2">
                    <div className="text-[24px] text-center">
                        THE MOST PREMIUM HIGH STREET CLUSTER.
                    </div>
                    <div className="text-[17px] text-center mt-2">
                        Virar’s best-selling 22-acre mega ‘In-city’ township now comes with a premium lifestyle.
                    </div>
                </div>
                {/* button  */}
                <div className="my-8 flex flex-col justify-center items-center">
                    <div className="bg-[#422303] ">
                        <div className="text-[17px] bg-[#422303] border-1 border-white text-white px-4 py-2 mx-[5px] my-[5px]">
                            Avial Final Quote
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo4
