import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./index.module.scss";
import {FiArrowLeft, FiArrowRight} from "react-icons/fi";
import Bulldog from "../../../assets/Race1";
import Doberman from "../../../assets/Race2";
import Dachshund from "../../../assets/Race3";
import Poodle from "../../../assets/Race4";
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
              <p>Adult</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Doberman />
              <p>Puppies</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Poodle />
              <p>Female</p>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <Dachshund />
              <p>Stud</p>
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
