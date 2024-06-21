import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/virtual';
import 'swiper/css/autoplay';
import carouselItems from './carousel-items';
import carouselOptions from './carousel-options';

const HomeCarousel = () => {
  return (
    <Swiper
      {...carouselOptions}
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {carouselItems.map((item, index) => {
        return (
          <SwiperSlide className="bg-secondary" key={index}>
            <div className="max-sm:h-[100px]  sm:h-[150px] lg:h-[200px] flex items-center justify-center glass">
              <img
                src={item.image}
                className="object-scale-down max-w-full max-h-full swiper-lazy"
                loading="lazy"
                alt={item.alt}
              />
              <div className="swiper-lazy-preloader "></div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default HomeCarousel;
