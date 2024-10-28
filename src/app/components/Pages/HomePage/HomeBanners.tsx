"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import { Pathnames } from '@/i18n/routing';
import Button from '../../common/Button';
import { Pagination } from 'swiper/modules';
import { useState } from 'react';
import { useLanguageDirection } from '@/app/utils/Contexts/LanguageDirectionContext';

import 'swiper/css';
import 'swiper/css/scrollbar';
import "swiper/css/pagination";


type SliderBannersType = {
  title: string,
  image: string,
  imageAlt: string,
  isButtonAvailable?: boolean,
  buttonText?: string,
  buttonPath?: Pathnames,
}

function HomeBanners(): React.ReactElement<SliderBannersType> {
  const { currentDirection } = useLanguageDirection();
  const imageUrl: string = '/images/slider-banner-1.jpg';
  const [sliderBanners, setSliderBanners] = useState<SliderBannersType[]>([
    {
      title: 'Your Comprehensive Aviation Services Partner',
      image: imageUrl,
      imageAlt: 'Banner Image',
      isButtonAvailable: true,
      buttonText: 'Discover More',
      buttonPath: '/',
    },
    {
      title: 'Your Comprehensive Aviation Services Partner',
      image: imageUrl,
      imageAlt: 'Banner Image',
      isButtonAvailable: true,
      buttonText: 'Discover More',
      buttonPath: '/',
    },
    {
      title: 'Your Comprehensive Aviation Services Partner',
      image: imageUrl,
      imageAlt: 'Banner Image',
      isButtonAvailable: true,
      buttonText: 'Discover More',
      buttonPath: '/',
    },
    {
      title: 'Your Comprehensive Aviation Services Partner',
      image: imageUrl,
      imageAlt: 'Banner Image',
      isButtonAvailable: true,
      buttonText: 'Discover More',
      buttonPath: '/',
    },
  ]);
  
  return <section className='home-banner-section'>
    <Swiper
      dir='ltr'
      className='home-swiper-slider'
      autoplay={{ delay: 500, disableOnInteraction: false, }}
      slidesPerView={1}
      pagination={{ type: "progressbar" }}
      modules={[Pagination]}>
      {
        sliderBanners.map((banner, index) => (
          <SwiperSlide key={index} className='home-swiper-slider__slide'>
            <div className="slide-image">
              <Image src={banner.image} alt={banner.imageAlt} fill={true} priority={true} />
            </div>
            <div className="slider-content">
              <div className="container">
                <div className="slider-content__text" dir={currentDirection}>
                  <h2 className='title merriweather fw-700'>
                    {banner.title}
                  </h2>
                  {banner.isButtonAvailable && (
                    <Button
                      type='link'
                      path={banner.buttonPath}
                      label={banner.buttonText}
                      icon='arrow-right'
                      iconPosition='after'
                      color='accent' />
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))
      }
    </Swiper>
  </section>
}

export default HomeBanners