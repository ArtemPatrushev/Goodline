import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, {
    Mousewheel, Navigation
} from 'swiper/core';
import './SwiperStyles.css';

import sliderPhoto from '../../../../assets/img/slider_photo.png';

import style from './SliderPage.module.scss';

SwiperCore.use([Mousewheel, Navigation]);

const SliderPage = () => (

    <div className={style.sliderPage}>
        <p>Отзывы</p>
        <Swiper
            direction={'vertical'}
            slidesPerView={3}
            spaceBetween={30}
            mousewheel={true}
            navigation={true}
            className="mySwiper"
            centeredSlides={1}
        >
            <SwiperSlide>
                <div className={style.imgRoundBig}>
                    <div className={style.imgRoundMiddle}>
                        <div className={style.imgRoundSmall}>
                            <img src={sliderPhoto} alt='png' />
                        </div>
                    </div>
                </div>
                <div className={style.swiperSlide__reviews}>
                    <p className={style.swiperSlide__reviews__header}>Алексей Гоно</p>
                    <p className={style.swiperSlide__reviews__text}>Отличное и удобное приложение. Классные возможности, отзывчивая поддержка.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.imgRoundBig}>
                    <div className={style.imgRoundMiddle}>
                        <div className={style.imgRoundSmall}>
                            <img src={sliderPhoto} alt='png' />
                        </div>
                    </div>
                </div>
                <div className={style.swiperSlide__reviews}>
                    <p className={style.swiperSlide__reviews__header}>Алексей Гоно</p>
                    <p className={style.swiperSlide__reviews__text}>Отличное и удобное приложение. Классные возможности, отзывчивая поддержка.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.imgRoundBig}>
                    <div className={style.imgRoundMiddle}>
                        <div className={style.imgRoundSmall}>
                            <img src={sliderPhoto} alt='png' />
                        </div>
                    </div>
                </div>
                <div className={style.swiperSlide__reviews}>
                    <p className={style.swiperSlide__reviews__header}>Алексей Гоно</p>
                    <p className={style.swiperSlide__reviews__text}>Отличное и удобное приложение. Классные возможности, отзывчивая поддержка.</p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className={style.imgRoundBig}>
                    <div className={style.imgRoundMiddle}>
                        <div className={style.imgRoundSmall}>
                            <img src={sliderPhoto} alt='png' />
                        </div>
                    </div>
                </div>
                <div className={style.swiperSlide__reviews}>
                    <p className={style.swiperSlide__reviews__header}>Алексей Гоно</p>
                    <p className={style.swiperSlide__reviews__text}>Отличное и удобное приложение. Классные возможности, отзывчивая поддержка.</p>
                </div>
            </SwiperSlide>
        </Swiper>
    </div>
);

export default SliderPage;
