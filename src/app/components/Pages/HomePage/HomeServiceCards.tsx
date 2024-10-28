'use client'
import { Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import Button from '../../common/Button';
import Image from 'next/image';
import { useLanguageDirection } from '@/app/utils/Contexts/LanguageDirectionContext';
import { Pathnames } from '@/i18n/routing';

export type cardProps = {
  image: string,
  imageAlt: string,
  path: string,
  title: string,
  description: string
}

export default function HomeServiceCards( { data }: { data: cardProps[] }): React.ReactElement {
  const { currentDirection } = useLanguageDirection();
  const imageUrl: string = '/images/home-service-image-1.png';
  return (
    <>
      <Swiper
        dir='ltr'
        freeMode={true}
        spaceBetween={30}
        pagination={{ type: "progressbar" }}
        grabCursor={true}
        slidesPerView={'auto'}
        modules={[ Pagination]}
        className="home-service-cards-swiper"
      >
        {
          data.map((card: cardProps, index:number): React.ReactElement => {
            return <SwiperSlide className="home-service-card" key={index}>
              <div className="card-image">
                <Image src={card.image} alt={card.imageAlt} fill priority />
              </div>
              <div className="card-body" dir={currentDirection}>
                <div className="card-title">
                  <h3 className='merriweather fw-700'>{card.title}</h3>
                </div>
                <div className="card-content">
                  <div className="card-content-text-wrapper">
                    <div className="text">{ card.description }</div>
                    <Button
                      type='link'
                      path={card.path as Pathnames}
                      label='Know More'
                      icon='angle-right'
                      iconPosition='after'
                      color='accent' />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          })
        }
      </Swiper>
    </>
  )
}
        // <SwiperSlide className="home-service-card">
        //   <div className="card-image">
        //     <Image src={imageUrl} alt='Ground Handling' fill priority />
        //   </div>
        //   <div className="card-body" dir={currentDirection}>
        //     <div className="card-title">
        //       <h3 className='merriweather fw-700'>Ground Handling</h3>
        //     </div>
        //     <div className="card-content">
        //       <div className="card-content-text-wrapper">
        //         <div className="text">
        //           NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....
        //         </div>
        //         <Button type='link' path='/' label='Know More' icon='angle-right' iconPosition='after' color='accent' />
        //       </div>
        //     </div>
        //   </div>
        // </SwiperSlide>
        // <SwiperSlide className="home-service-card">
        //   <div className="card-image">
        //     <Image src={imageUrl} alt='Ground Handling' fill priority />
        //   </div>
        //   <div className="card-body" dir={currentDirection}>
        //     <div className="card-title">
        //       <h3 className='merriweather fw-700'>Ground Handling</h3>
        //     </div>
        //     <div className="card-content">
        //       <div className="card-content-text-wrapper">
        //         <div className="text">
        //           NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....
        //         </div>
        //         <Button type='link' path='/' label='Know More' icon='angle-right' iconPosition='after' color='accent' />
        //       </div>
        //     </div>
        //   </div>
        // </SwiperSlide>
        // <SwiperSlide className="home-service-card">
        //   <div className="card-image">
        //     <Image src={imageUrl} alt='Ground Handling' fill priority />
        //   </div>
        //   <div className="card-body" dir={currentDirection}>
        //     <div className="card-title">
        //       <h3 className='merriweather fw-700'>Ground Handling</h3>
        //     </div>
        //     <div className="card-content">
        //       <div className="card-content-text-wrapper">
        //         <div className="text">
        //           NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....
        //         </div>
        //         <Button type='link' path='/' label='Know More' icon='angle-right' iconPosition='after' color='accent' />
        //       </div>
        //     </div>
        //   </div>
        // </SwiperSlide>
        // <SwiperSlide className="home-service-card">
        //   <div className="card-image">
        //     <Image src={imageUrl} alt='Ground Handling' fill priority />
        //   </div>
        //   <div className="card-body" dir={currentDirection}>
        //     <div className="card-title">
        //       <h3 className='merriweather fw-700'>Ground Handling</h3>
        //     </div>
        //     <div className="card-content">
        //       <div className="card-content-text-wrapper">
        //         <div className="text">
        //           NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....
        //         </div>
        //         <Button type='link' path='/' label='Know More' icon='angle-right' iconPosition='after' color='accent' />
        //       </div>
        //     </div>
        //   </div>
        // </SwiperSlide>
        // <SwiperSlide className="home-service-card">
        //   <div className="card-image">
        //     <Image src={imageUrl} alt='Ground Handling' fill priority />
        //   </div>
        //   <div className="card-body" dir={currentDirection}>
        //     <div className="card-title">
        //       <h3 className='merriweather fw-700'>Ground Handling</h3>
        //     </div>
        //     <div className="card-content">
        //       <div className="card-content-text-wrapper">
        //         <div className="text">
        //           NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....
        //         </div>
        //         <Button type='link' path='/' label='Know More' icon='angle-right' iconPosition='after' color='accent' />
        //       </div>
        //     </div>
        //   </div>
        // </SwiperSlide>
        // <SwiperSlide className="home-service-card">
        //   <div className="card-image">
        //     <Image src={imageUrl} alt='Ground Handling' fill priority />
        //   </div>
        //   <div className="card-body" dir={currentDirection}>
        //     <div className="card-title">
        //       <h3 className='merriweather fw-700'>Ground Handling</h3>
        //     </div>
        //     <div className="card-content">
        //       <div className="card-content-text-wrapper">
        //         <div className="text">
        //           NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....
        //         </div>
        //         <Button type='link' path='/' label='Know More' icon='angle-right' iconPosition='after' color='accent' />
        //       </div>
        //     </div>
        //   </div>
        // </SwiperSlide>
        // <SwiperSlide className="home-service-card">
        //   <div className="card-image">
        //     <Image src={imageUrl} alt='Ground Handling' fill priority />
        //   </div>
        //   <div className="card-body" dir={currentDirection}>
        //     <div className="card-title">
        //       <h3 className='merriweather fw-700'>Ground Handling</h3>
        //     </div>
        //     <div className="card-content">
        //       <div className="card-content-text-wrapper">
        //         <div className="text">
        //           NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....
        //         </div>
        //         <Button type='link' path='/' label='Know More' icon='angle-right' iconPosition='after' color='accent' />
        //       </div>
        //     </div>
        //   </div>
        // </SwiperSlide>
        // <SwiperSlide className="home-service-card">
        //   <div className="card-image">
        //     <Image src={imageUrl} alt='Ground Handling' fill priority />
        //   </div>
        //   <div className="card-body" dir={currentDirection}>
        //     <div className="card-title">
        //       <h3 className='merriweather fw-700'>Ground Handling</h3>
        //     </div>
        //     <div className="card-content">
        //       <div className="card-content-text-wrapper">
        //         <div className="text">
        //           NSAS’s 23 years of experience in the field of aviation services, we managed to build a network of resources that provide the aircraft with all the necessary ramp equipment according to the aircraft type and flight purpose....
        //         </div>
        //         <Button type='link' path='/' label='Know More' icon='angle-right' iconPosition='after' color='accent' />
        //       </div>
        //     </div>
        //   </div>
        // </SwiperSlide>