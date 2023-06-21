import Image from 'next/image';
import React from 'react';
import { HiRefresh } from 'react-icons/hi';
import MapImage from '../../../public/map-image.png';

const Promo7 = () => {
    return (
        <div className="bg-[#001933] flex justify-center items-center">
            <div className="w-[60%]">
                <Image src={MapImage} alt="" width={500} height={500} className="w-[1005px]" />
            </div>
            <div className="ml-10 w-[40%]">
                <div className="pb-3 text-white text-[35px]">
                    ENQUIRE NOW
                </div>
                <div className="text-white">
                    <div className="pb-3 flex flex-col justify-center items-start">
                        <label htmlFor="" className='pb-2'>Name *</label>
                        <input type="text" placeholder="Enter Name *" className="px-1 py-1 w-[390px] text-[#000] bg-[#d7efff]" />
                    </div>
                    <div className="pb-3 flex flex-col justify-center items-start">
                        <label htmlFor="" className='pb-2'>Mobile *</label>
                        <input type="tel" placeholder="Enter Mobile Number *" className="px-1 py-1 w-[390px] text-[#000] bg-[#d7efff]" />
                    </div>
                    <div className="pb-3 flex flex-col justify-center items-start">
                        <label htmlFor="" className='pb-2'>Captcha *</label>
                        <div className="flex justify-between items-center">
                            <Image src="https://mayfairgardens.in/demo_captcha.php?_=1687335041523" alt="" width={500} height={500} className="w-[90px]" />
                            <HiRefresh className='ml-3 text-[30px]' />
                            <input type="number" placeholder="Enter Captcha *" className="ml-3 px-1 py-1 w-[200px] text-[#000] bg-[#d7efff]" />
                        </div>
                    </div>
                    <div className="text-[12px]">
                        By clicking on Submit, you accept our <span className='text-[#76b3f3]'>Disclaimer & Privacy Policy</span>
                    </div>
                    <div className="mt-2 w-[100px] text-center bg-[#3571ae] px-4 py-2">
                        Submit
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Promo7
