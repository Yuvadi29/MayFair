import autoprefixer from 'autoprefixer'
import Image from 'next/image'
import React from 'react'

const Promo2 = () => {
    return (
        // {/* color */}
        //   {/* light pink : #eeefff */}
        //   {/* dark blue : #012842 */}
        //   {/* light blue : #0563a2 */}

        <div className="bg-[#193959]">
            <div className="pt-[40px] flex flex-col justify-center items-center">
                {/* top seciton */}
                <div className="flex flex-col justify-center items-center">
                    <Image src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-border.webp" alt="image" width={500} height={500} className='w-[105px]' />
                    <div className="flex flex-col justify-center items-center">
                        <div className='text-[#fff] text-center text-[32px] font-medium w-[1110px] leading-9'>
                            THE ONLY OPPORTUNITY TO OWN A HOME IN VIRAR&apos;S 1ST HIGH STREET LIFESTYLE DESTINATION
                        </div>
                        <div className="text-[17px]  w-[300px] text-center flex justify-center items-center py-4">
                            <Image src="https://mayfairgardens.in/images/hight-logo.webp" alt="" width={500} height={500} />
                        </div>
                    </div>
                </div>
                {/* middle seciton  */}
                <div className="my-4 flex justify-center items-center">
                    <div className="text-[#fff] flex justify-center items-center">
                        <div className="w-[162px] h-[201px] flex flex-col justify-start items-center">
                            <div className="">
                                <Image src="https://mayfairgardens.in/images/main-icon-01.webp" alt="" width={500} height={500} className="w-[105px]" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="font-bold text-center">
                                    High Street Fashion
                                </div>
                                <div className="text-center">
                                    The world’s best fashion and sportswear brands
                                </div>
                            </div>
                        </div>
                        <div className="w-[162px] h-[201px] flex flex-col justify-start items-center">
                            <div className="">
                                <Image src="https://mayfairgardens.in/images/main-icon-02.webp" alt="" width={500} height={500} className="w-[105px]" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="font-bold text-center">
                                    Luxe
                                </div>
                                <div className="text-center">
                                    Premium jewellers, accessories and more
                                </div>
                            </div>
                        </div>
                        <div className="w-[162px] h-[201px] flex flex-col justify-start items-center">
                            <div className="">
                                <Image src="https://mayfairgardens.in/images/main-icon-03.webp" alt="" width={500} height={500} className="w-[105px]" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="font-bold text-center">
                                    Global Cuisines
                                </div>
                                <div className="text-center">
                                    Choose from gourmet to fast food
                                </div>
                            </div>
                        </div>
                        <div className="w-[162px] h-[201px] flex flex-col justify-start items-center">
                            <div className="">
                                <Image src="https://mayfairgardens.in/images/main-icon-04.webp" alt="" width={500} height={500} className="w-[105px]" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="font-bold text-center">
                                    Leisure
                                </div>
                                <div className="text-center">
                                    Street-life on the grand central promenade
                                </div>
                            </div>
                        </div>
                        <div className="w-[162px] h-[201px] flex flex-col justify-start items-center">
                            <div className="">
                                <Image src="https://mayfairgardens.in/images/main-icon-05.webp" alt="" width={500} height={500} className="w-[105px]" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="font-bold text-center">
                                    Beauty and Health
                                </div>
                                <div className="text-center">
                                    Salons and 24/7 pharmacies
                                </div>
                            </div>
                        </div>
                        <div className="w-[162px] h-[201px] flex flex-col justify-start items-center">
                            <div className="">
                                <Image src="https://mayfairgardens.in/images/main-icon-06.webp" alt="" width={500} height={500} className="w-[105px]" />
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <div className="font-bold text-center">
                                    Home
                                </div>
                                <div className="text-center">
                                    Groceries, furniture and appliances
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* button  */}
                <div className="mb-4 flex flex-col justify-center items-center">
                    <div className="bg-[#012842] ">
                        <div className="text-[17px] bg-[#012842] border-1 border-white text-white px-4 py-2 mx-[5px] my-[5px]">
                            Avial Final Quote
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo2
