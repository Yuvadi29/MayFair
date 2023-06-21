import Image from 'next/image'
import React from 'react'

const Footer = () => {
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
                            CONTACT US
                        </div>
                    </div>
                    {/* Middle section  */}
                    <div className="py-4 text-white flex justify-center items-center">
                        <div className="w-[350px] h-[237px] flex flex-col justify-center items-center">
                            <Image src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-address.webp" alt="image" width={500} height={500} className='w-[112px]' />
                            <div className="text-[24px] font-bold">
                                ADDRESS
                            </div>
                            <div className="text-[17px] ">
                                Bolinj, Virar
                            </div>
                        </div>
                        <div className="w-[350px] h-[237px] border-x-2 border-white flex flex-col justify-center items-center">
                            <Image src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-phone.webp" alt="image" width={500} height={500} className='w-[112px]' />
                            <div className="text-[24px] font-bold">
                                MOBILE
                            </div>
                            <div className="text-[17px] ">
                                +91 9860949793
                            </div>
                        </div>
                        <div className="w-[350px] h-[237px] flex flex-col justify-center items-center">
                            <Image src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-email.webp" alt="image" width={500} height={500} className='w-[112px]' />
                            <div className="text-[24px] font-bold">
                                EMAIL
                            </div>
                            <div className="text-[17px] ">
                                info@mayfairgardens.in
                            </div>
                        </div>
                    </div>
                    {/* button */}
                    <div className="my-8 flex flex-col justify-center items-center">
                        <div className="bg-[#422303] ">
                            <div className="text-[17px] bg-[#422303] border-1 border-white text-white px-4 py-2 mx-[5px] my-[5px]">
                                Avial Driving Direction
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
