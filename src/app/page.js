"use client";

import Image from "next/image";
import styles from "./page.module.css";
import diamondIcon from "../../public/diamond.svg";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.header__content}>
          <div className={styles.container__burger}>
            <div className={styles.content__burger}>
              <div className={styles.burgerMenu}>
                <div className={styles.burgerMenu__line}></div>
                <div className={styles.burgerMenu__line}></div>
                <div className={styles.burgerMenu__line}></div>
              </div>
              <nav className={styles.menu}>
                <ul className={styles.menu__list}>
                  <li className={styles.menu__item}>
                    <a href="#" className={styles.link}>
                      Главная
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className={styles.container__logo}>
            <div className={styles.content__logo}>
              <Image
                className={styles.logo}
                src={diamondIcon}
                alt="Diamond"
                width={18}
                height={15}
              />
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.container__title}>
          <div className={styles.content__title}>
            <h1 className={styles.title}>Закончились кредиты?</h1>
          </div>
        </div>
        <div className={styles.container__offers}>
          <div className={styles.content__offers}>
            <Swiper
              modules={[Pagination]}
              slidesPerView={1}
              onSwiper={(swiper) => console.log(swiper)}
              navigation
              pagination={{
                clickable: true,
              }}
              scrollbar={{ draggable: true }}
            >
              <SwiperSlide>
                <div className={styles.card__offers}>
                  <div className={styles.offer__container}>
                    <p className={styles.offer__text}>One time offer!</p>
                  </div>
                  <p className={styles.card__text}>
                    50 <span className={styles.card__credit}>CR</span>/$5
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>Slide 2</SwiperSlide>
              <SwiperSlide>Slide 3</SwiperSlide>
              <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>

            <button className={styles.btn__offers}>Try now</button>
            <div className={styles.checkbox__content}>
              <label htmlFor="terms">
                <input type="checkbox" name="terms" />
                By clicking Checkbox you agree and accept our{" "}
                <a className={styles.link} href="#">
                  Privacy Policy
                </a>
                , and{" "}
                <a className={styles.link} href="#">
                  Terms of use
                </a>
              </label>
            </div>
          </div>
        </div>
        <div className={styles.container__premium}>
          <div className={styles.content__premium}>
            <div className={styles.content__logo}>
              <Image
                className={styles.logo}
                src={diamondIcon}
                width={81}
                height={67}
              />
            </div>
            <div className={styles.btns__container}>
              <div className={styles.btn__content}>
                <div className={styles.btn}>
                  <div className={styles.icon}>
                    <Image src={""} width={16} height={16} />
                  </div>
                  <p className={styles.btn__label}>Отправлять сообщения</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
