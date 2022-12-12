import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import '@fonts/font.css';
import prev from '@images/icon/prev.png';
import next from '@images/icon/next.png';
import icon10 from '@images/icon/icon10@2x.png';
import icon2 from '@images/icon/icon2@2x.png';
import icon3 from '@images/icon/icon3@2x.png';
import icon4 from '@images/icon/icon4@2x.png';
import icon5 from '@images/icon/icon5@2x.png';
import icon6 from '@images/icon/icon6@2x.png';
import icon7 from '@images/icon/icon7@2x.png';
import icon8 from '@images/icon/icon8@2x.png';
import icon9 from '@images/icon/icon9@2x.png';
import LetterModal from '@pages/ColorLetter/LetterModal';
import Button from '@common/Button';
import { useUserState } from '@contexts/UserContext';

const Letter = ({ letters }) => {
  SwiperCore.use([Navigation]);
  const [swiperSetting, setSwiperSetting] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});
  const { isLogged } = useUserState();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const icons = [icon10, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9];

  const modalToggle = () => {
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    if (!swiperSetting) {
      setSwiperSetting({
        spaceBetween: 5,
        centeredSlides: true,
        slidesPerView: 1,
        pagination: {
          clickable: true
        },
        navigation: {
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }
      });
    }
  }, [swiperSetting]);
  return (
    <>
      <SwiperContainer>
        <NavigationButton ref={prevRef}>
          <SwiperButtonImage src={prev} alt='prev' />
        </NavigationButton>
        {swiperSetting && (
          <MySwiper
            {...swiperSetting}
            onBeforeInit={(swiper) => {
              setTimeout(() => {
                if (typeof swiper.params.navigation !== 'boolean') {
                  if (swiper.params.navigation) {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }
                }
                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();
              });
            }}>
            {letters.map((arr, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <MySlide key={index}>
                <SlideContainer>
                  {arr.map(({ letterIndex, cakeIndex, writerId, content }) => (
                    <IconContainer onClick={() => {
                      setModalData({
                        'paper': letterIndex,
                        content
                      });
                      modalToggle();
                    }}>
                      <img src={icons[cakeIndex]} className='icon' alt={writerId} />
                      <div className='writer'>{writerId}</div>
                    </IconContainer>
                  ))}
                </SlideContainer>
              </MySlide>
            ))}
          </MySwiper>)}
        <NavigationButton ref={nextRef}>
          <SwiperButtonImage src={next} alt='next' />
        </NavigationButton>
      </SwiperContainer>
      {modalOpen && isLogged ? (
        <Background>
          <ModalContainer>
            <LetterModal paper={modalData.paper} content={modalData.content} />
            <Button onClick={() => {
              modalToggle();
            }} style={{ marginTop: '2rem' }} title='close' />
          </ModalContainer>
        </Background>
      ) : null}
    </>
  );
};
export default Letter;

const DisplayCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SwiperContainer = styled.div`
  ${DisplayCenter};

  .swiper {
    &-button-disabled {
      visibility: hidden;
    }
  }
`;
const MySwiper = styled(Swiper)`
  width: 500px;
  @media (max-width: 1024px) {
    width: 400px;
  }
  @media (max-width: 768px) {
    width: 300px;
  }
`;
const MySlide = styled(SwiperSlide)`
  ${DisplayCenter};
  flex-direction: row;
`;
const SlideContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "icon . icon"
    ". icon icon";
  grid-column-gap: 60px;
  grid-row-gap: 100px;
  @media (max-width: 1024px) {
    grid-column-gap: 30px;
    grid-row-gap: 50px;
  }
`;
const NavigationButton = styled.button`
  ${DisplayCenter};
  width: 1rem;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
`;
const SwiperButtonImage = styled.img`
  width: 1rem;
  height: 2rem;
`;
const IconContainer = styled.div`
  ${DisplayCenter};
  flex-direction: column;

  .icon {
    width: 70px;
    height: 70px;
    @media (max-width: 768px) {
      width: 25px;
      height: 25px;
    }
  }

  .writer {
    font-family: PatrickHand-Regular, NotoSansKR_Medium;
    font-size: 0.85rem;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 200;
`;
const ModalContainer = styled.div`
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
