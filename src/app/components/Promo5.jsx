import Image from 'next/image';
import React from 'react';

const Promo5 = () => {
    return (
        <div>
            <div className="p-[40px] flex bg-[#193959]">
                <div className="w-[100%] pr-[15px] pl-[15px] mr-auto ml-auto">
                    <div className="flex flex-col justify-center items-center">
                        <Image src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-border.webp" alt="image" width={500} height={500} className='w-[105px]' />
                        <div className="py-3 flex flex-col justify-center items-center">
                            <div className='text-[#fff] text-center text-[32px] font-medium w-[1110px] leading-9'>
                                RETAIL IS THE BIGGEST DRIVER OF APPRECIATION FOR PROPERTIES
                                AROUND THE WORLD IN MUMBAI
                            </div>
                        </div>
                    </div>

                    {/* Graphs */}
                    <div className="w-full float-left ml-14 flex flex-row-reverse ">
                        {/* left Graph */}
                        <div className="w-[50%] h-auto float-left mt-[5px] mb-[5px] mr-[10px] ml-[10px]">=
                            <Image
                                src="https://mayfairgardens.in/images/img-01.webp"
                                alt='graph1'
                                width={500}
                                height={400}
                                className='float-left p-1 bg-[#fff]'
                            />
                            <div className="w-[500px] float-left h-[100px] text-center bg-[#fff] pt-[5px] pr-0 pb-[5px] pl-0">
                                <h4 className='p-0 text-[22px] font-semibold mt-[2px] mr-0 ml-o mb-[2px]'>THE WALK, GHODBUNDER ROAD</h4>
                                <b className='font-medium'>Inflection Point</b>
                                <br />
                                Price rise from `7,000 PSF to `16,000 PSF
                            </div>
                        </div>
                        {/* Right Graph */}
                        <div className="w-[40%] float-left mt-[5px] mb-[5px] mr-[10px] ml-[10px]">=
                            <Image
                                src="https://mayfairgardens.in/images/img-02.webp"
                                alt='graph2'
                                width={500}
                                height={400}
                                className='float-left p-1 bg-[#fff]'
                            />
                            <div className="w-[500px] float-left h-[100px] text-center bg-[#fff] pt-[5px] pr-0 pb-[5px] pl-0">
                                <h4 className='p-0 text-[22px] font-semibold mt-[2px] mr-0 ml-o mb-[2px]'>LBS MARG, GHATKOPAR</h4>
                                <b className='font-medium'>Inflection Point</b>
                                <br />
                                Price rise from `11,000 PSF to `20,000 PSF
                            </div>
                        </div>
                    </div>


                    <div className="w-full float-left p-0">
                        <div className="text-center mt-[30px]">
                            <button className='text-[17px] text-white bg-[#001f33] inline-block relative pt-[13px] pr-[28px] pb-[13px] pl-[28px] border-1 border-white mx-[5px] my-[5px]'>Schedule Appointment</button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Promo5