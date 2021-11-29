import Swiper from 'swiper';
import 'swiper/css';

const swiper = () => {
    return () => new Swiper('.swiper', {
        speed: 400,
        spaceBetween: 100,
        slidesPerView: 6,
        observer: true
    });
}

export default swiper
