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

import Background from "../../components/Background.js";
import TitleText from '../../components/Text.js';
import EerieButton from "../../components/EeerieButton.js";
import BreakLine from "../../components/BreakLine.js";

import joyBoy from "./assets/joyBoy.jpg";
import theSister1 from "./assets/theSister1.jpg";
import theExecutioner from "./assets/theExecutioner.jpg";
import theSister2 from "./assets/theSister2.jpg";

const slides = [joyBoy, theSister1, theExecutioner, theSister2];

function Character() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    if(e === 'choose') {
      console.log('choose luh');  
    }
    
    navigate('/');
  };

  return (
    <Background backgroundImage={require('./assets/character_backgorund.jpg')}>
      <BreakLine quantity={3}/>
      <TitleText className="White-text Eerie-text Subtitle-text" text="Choose Your Caharcter's Story"/>
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
        <EerieButton onClick={handleSubmit} value="choose" text={'CHOOSE'}/>
        <EerieButton onClick={handleSubmit} value="exit" text={'EXIT'}/>
      </div>
    </Background>
  );
}

export default Character;
