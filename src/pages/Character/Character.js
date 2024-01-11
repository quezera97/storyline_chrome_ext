import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import {useNavigate} from 'react-router-dom';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";

import arrowLeft from "./assets/arrow-left.svg";
import arrowRight from "./assets/arrow-right.svg";

import easy from "./assets/easy_character.jpg";
import medium from "./assets/medium_character.jpg";
import hard from "./assets/hard_character.jpg";
import hell from "./assets/hell_character.jpg";
import Background from "../../components/Background.js";
import TitleText from '../../components/Text.js';
import EerieButton from "../../components/EeerieButton.js";
import BreakLine from "../../components/BreakLine.js";

const slides = [easy, medium, hard, hell];

function Character() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if(e === 'exit'){
      navigate('/');
    }
  };

  return (
    <Background backgroundImage={require('./assets/character_backgorund.jpg')}>
      <TitleText className="White-text Eerie-text Subtitle-text" text="Choose Your Character"/>
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next",
        }}
        pagination={{
          clickable: true,
        }}
        speed={1000}
        slidesPerView={"auto"}
        centeredSlides
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index} className="slide-inner">
            <img src={slide} alt="" />
          </SwiperSlide>
        ))}
        <div className="button-prev">
          <img src={arrowLeft} alt="Left" />
        </div>
        <div className="button-next">
          <img src={arrowRight} alt="Right" />
        </div>
      </Swiper>
      <BreakLine quantity={3}/>
      <div>
        <EerieButton onClick={handleSubmit} value="save" text={'SAVE'}/>
        <EerieButton onClick={handleSubmit} value="exit" text={'EXIT'}/>
      </div>
    </Background>
  );
}

export default Character;
