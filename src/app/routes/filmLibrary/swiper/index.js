import {Swiper, Navigation, Pagination, Parallax } from 'swiper';
import 'swiper/css/bundle';

Swiper.use([Navigation, Pagination, Parallax]);

const swiper = () => {
    return () => new Swiper('.swiper', {
        speed: 100,
        spaceBetween: 150,
        slidesPerView: 6,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        observer: true, 
        observeParents: true,
        parallax:true,
    });
}

export default swiper
