import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./index.module.scss";
import {FiArrowLeft, FiArrowRight} from "react-icons/fi";
import Bulldog from "../../../assets/Bulldog";
import Doberman from "../../../assets/Doberman";
import Dachshund from "../../../assets/Dachshund";
import Poodle from "../../../assets/Poodle";
import Container from "../../Container/Container";

export default function HeroSlider() {
  return (
    <div className={styles.slider}>
      <Container>
        <button className={`swiper-button-prev ${styles.arrow}`}>
          <FiArrowLeft />
        </button>
        <div className={styles.wrapper}>
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={40}
            slidesPerView={4}
            breakpoints={{
              320: {slidesPerView: 2},
              640: {slidesPerView: 3},
              1024: {slidesPerView: 4},
            }}
            className={styles.slider}>
            <SwiperSlide className={styles.slide}>
              <Bulldog />
              <p>Bulldog</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Doberman />
              <p>Doberman</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Poodle />
              <p>Poodle</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Dachshund />
              <p>Dachshund</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Dachshund />
              <p>Dachshund</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Dachshund />
              <p>Dachshund</p>
            </SwiperSlide>
          </Swiper>
        </div>
        <button
          className={`swiper-button-next ${styles.arrow} ${styles.right}`}>
          <FiArrowRight />
        </button>
      </Container>
    </div>
  );
}
