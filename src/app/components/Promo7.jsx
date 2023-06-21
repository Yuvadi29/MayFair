import Image from 'next/image'
import React from 'react'
import { AiOutlineRightCircle } from 'react-icons/ai'

const Promo7 = () => {
    return (

        <div className="bg-[#875f35]">
            <div className="pt-[40px] flex flex-col justify-center items-center">
                {/* top seciton */}
                <div className="flex flex-col justify-center items-center">
                    <Image src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-border.webp" alt="image" width={500} height={500} className='w-[105px]' />
                    <div className="py-3 flex flex-col justify-center items-center">
                        <div className='text-[#fff] text-center text-[32px] font-medium w-[1110px] leading-9'>
                            VIRAR, THE BIGGEST GROWTH NODE OF WESTERN MUMBAI, IS POISED FOR TRANSFORMATION
                        </div>
                    </div>
                </div>
                {/* Middle section  */}
                <div className="flex justify-center items-center w-[1110px]">
                    <div className="border-4 border-white ">
                        <Image src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-04.webp" alt="" width={500} height={500} className='w-[540px]' />
                    </div>
                    {/* bullets points container  */}
                    <div className="ml-3 flex flex-col justify-start items-center text-white w-[540px]">
                        <div className="text-[14px] flex flex-col justify-center items-start">
                            <div className="text-[20px] mb-[10px] block font-bold">
                                5 MAJOR INFRASTRUCTURE PROJECTS WITH INVESTMENT
                                WORTH `10,00,000+ CRORES* ARE REDEFINING VIRAR
                            </div>
                            <div className="flex justify-center items-center">
                                <AiOutlineRightCircle className="text-[27px] font-thin" />
                                <span className="ml-1 text-[16px]">Lively Coastline Close to beautiful beaches & resorts
                                </span>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiOutlineRightCircle className="text-[27px]" />
                                <span className="ml-1 text-[16px]">Easy Access Well connected to all parts of Mumbai & India
                                </span>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiOutlineRightCircle className="text-[27px]" />
                                <span className="ml-1 text-[16px]">Evolving City Life Rapidly evolving & driven by visionary developers like Mayfair Housing
                                </span>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiOutlineRightCircle className="text-[27px]" />
                                <span className="ml-1 text-[16px]">Infrastructure development places Virar at the centre of all the action
                                </span>
                            </div>
                            <div className="flex justify-center items-center">
                                <AiOutlineRightCircle className="text-[27px]" />
                                <span className="ml-1 text-[16px]">Virar has seen 121%* price appreciation in the last ten years</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="my-8 flex flex-col justify-center items-center">
                    <div className="bg-[#422303] ">
                        <div className="text-[17px] bg-[#422303] border-1 border-white text-white px-4 py-2 mx-[5px] my-[5px]">
                            Avial Home Pick / Drop
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Promo7;
