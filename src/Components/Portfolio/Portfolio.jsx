import React from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Lotto from '../../img/lotto.jpeg';
import Elem from '../../img/elem.png';
import Run from '../../img/run.png';
import Poke from '../../img/poke.png';
import Sone from '../../img/port4.png';
import 'swiper/css';
import { useContext } from 'react';
import { themeContext } from '../../Context';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className="portfolio" id="Portfolio">
            {/* heading */}
            <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
            <span>Portfolio</span>

            {/* slider */}
            <Swiper spaceBetween={30} slidesPerView={3} grabCursor={true} className="portfolio-slider">
                <SwiperSlide>
                    <img src={Lotto} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Elem} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Sone} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Poke} alt="" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={Run} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Portfolio;
