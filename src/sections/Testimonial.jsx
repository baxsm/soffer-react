import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from '../component/TestimonialCard';
import { Navigation } from "swiper";

const testimonialData = [
  {
    name: 'John Doe',
    profession: 'Profession',
    imageUrl: '/images/testimonial-2.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex, odit est quis veniam amet nulla iusto doloribus.'
  },
  {
    name: 'Lena Harris',
    profession: 'Profession',
    imageUrl: '/images/testimonial-1.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex, odit est quis veniam amet nulla iusto doloribus.'
  },
  {
    name: 'Simon Cole',
    profession: 'Profession',
    imageUrl: '/images/testimonial-3.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ex, odit est quis veniam amet nulla iusto doloribus.'
  },
]

function Testimonial() {
  const styles = {
    wrapper: 'py-[6rem]',
    container: 'px-[1rem] xl:px-[6rem] flex flex-col gap-[1rem]',
    header: 'flex flex-col gap-[1rem] text-center justify-center place-items-center',
    title: 'text-[2.5rem] text-primary900 font-[700]',
    subtitle: 'lg:w-[50%] text-[#757575]',

  }

  return (
    <section id="testimonial">
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.header}>
            <h2 className={styles.title}>What Our Clients Say</h2>
            <p className={styles.subtitle}>Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit clita duo justo</p>
          </div>
          <div className="mt-8">
            <Swiper
              navigation={true}
              modules={[Navigation]}
              slidesPerView={2}
              spaceBetween={50}
            >
              {
                testimonialData.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <TestimonialCard data={item} />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial
