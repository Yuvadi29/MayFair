"use client";
import React from 'react';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';

const Promo = () => {
  return (
    <div>
      <CCarousel controls>
        <CCarouselItem>
          <CImage className="d-block w-100" src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-slide1.webp" alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="d-block w-100" src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-slide2.webp" alt="slide 2" />
        </CCarouselItem>
      </CCarousel>

      {/* color */}
      {/* light pink : #eeefff */}
      {/* dark blue : #012842 */}
      {/* light blue : #0563a2 */}

      <div className="bg-[#eeefff]">
        <div className="pt-[40px] flex flex-col justify-center items-center">
          {/* top seciton */}
          <div className="flex flex-col justify-center items-center">
            <img src="https://mayfairgardens.in/images/mayfair-virar-gardens-the-promenade-border-black.webp" alt="image" className='w-[105px]' />
            <div className="flex flex-col justify-center items-center">
              <div className='text-[#012842] text-center text-[2.5rem]'>
                MAYFAIR VIRAR GARDENS THE PROMENADE
              </div>
              <div className="text-[17px]  w-[1110px] text-center">
                New York has 5th Avenue. London has Bond Street. Delhi has Connaught Palace. Mumbai has Kalaghoda. Its's time, Virar has it's own landmark. Presenting, The Promenade at Mayfair Gardens Virar. BOOK you home TODAY.
              </div>
            </div>
          </div>
          {/* middle seciton  */}
          <div className="my-4 flex justify-center items-center">
            <div className="">
              {/* top container */}
              <div className="border-2 border-[#012842] bg-white flex justify-center items-center">
                <div className="text-[36px] text-[#0563a2] font-bold px-4">
                  Spacious 1 BHK
                </div>
              </div>
              {/* bottom container  */}
              <div className="border-2 border-[#012842] bg-[#012842] flex justify-center items-center">
                <div className="text-[36px] text-[#fff]">
                  39.9+ Lakhs
                </div>
              </div>
            </div>
          </div>
          {/* text  */}
          <div className="mb-4 text-[17px]  w-[1110px] text-center">
          For Site Visit, Appointment Compulsory. Call Us On +91 9860949793 For Brochure, Floor Plan, Location, Appointment, Site Visit, Price, Address, Sample Flat Video, Reviews.
          </div>
          {/* button  */}
          <div className="mb-4 flex flex-col justify-center items-center">
              <div className="bg-[#012842] ">
                <div className="text-[17px] bg-[#012842] border-1 border-white text-white px-4 py-2 mx-[5px] my-[5px]">
                  Avial Digital Brochure
                </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Promo
