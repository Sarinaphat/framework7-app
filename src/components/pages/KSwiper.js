import React from 'react';
import {Page, ContentBlock, Navbar, Swiper, SwiperSlide} from 'framework7-react';

export const KSwiper = () => {
    return (
        <Page>
            <Navbar title="About" backLink="Back" sliding />
            <Swiper>
              <SwiperSlide>Slide 1</SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </Page>
    );
};
