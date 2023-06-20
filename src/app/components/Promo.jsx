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
    </div>
  );
}

export default Promo
