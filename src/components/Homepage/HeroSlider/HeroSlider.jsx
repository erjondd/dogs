import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./index.module.scss";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import Bulldog from "../../../assets/Race1";
import Doberman from "../../../assets/Race2";
import Dachshund from "../../../assets/Race3";
import Poodle from "../../../assets/Race4";
import Container from "../../Container/Container";
import { NavLink } from "react-router-dom";

export default function HeroSlider() {
  return (
    <div className={styles.slider}>
      <Container>
        <button className={`swiper-button-prev ${styles.arrow}`}>
          <FiArrowLeft />
        </button>
        <div className={styles.wrapper}>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            spaceBetween={40}
            slidesPerView={4}
            autoplay={true}
            loop={true}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            className={styles.slider}
          >
            <SwiperSlide className={styles.slide}>
              <NavLink to="/dogs">
                <Bulldog />
                <p>For sale</p>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <NavLink to="/adoption">
                <Doberman />
                <p>Adoption</p>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <NavLink to="/parents/females">
                <Poodle />
                <p>Females</p>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide className={styles.slide}>
              <NavLink to="/parent/studs">
                <Dachshund />
                <p>Studs</p>
              </NavLink>
            </SwiperSlide>
          </Swiper>
        </div>
        <button
          className={`swiper-button-next ${styles.arrow} ${styles.right}`}
        >
          <FiArrowRight />
        </button>
      </Container>
    </div>
  );
}
