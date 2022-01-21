import {Swiper, Navigation, Pagination, Parallax } from 'swiper';
import 'swiper/css/bundle';

Swiper.use([Navigation, Pagination, Parallax]);

const swiper = () => {
    return () => new Swiper('.swiper', {
        speed: 100,
        spaceBetween: 150,
        // slidesPerView: 6,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        observer: true, 
        observeParents: true,
        parallax:true,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 4,
            },
            1024: {
                slidesPerView: 6,
            }
        }
    });
}

export default swiper
