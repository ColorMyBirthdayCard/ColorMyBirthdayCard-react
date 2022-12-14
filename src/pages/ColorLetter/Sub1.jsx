import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SwiperCore, { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';

import '@fonts/font.css';
import paper1 from '@images/paper1.png';
import paper2 from '@images/paper2.png';
import paper3 from '@images/paper3.png';
import paper4 from '@images/paper4.png';
import paper5 from '@images/paper5.png';
import paper6 from '@images/paper6.png';
import back1 from '@images/back1.png';
import back2 from '@images/back2.png';
import back3 from '@images/back3.png';
import back4 from '@images/back4.png';
import back5 from '@images/back5.png';
import back6 from '@images/back6.png';
import prev from '@images/icon/prev.png';
import next from '@images/icon/next.png';

import HeaderContainer from '@common/HeaderContainer';
import Button from '@common/Button';
import MobileBackgroundImage from '@images/mobilebackground.png';
import BackgroundImage from '@images/background2.png';

const Sub1 = () => {
  SwiperCore.use([Navigation]);
  const [paper, setPaper] = useState(-1);
  const [swiperSetting, setSwiperSetting] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const navigate = useNavigate();
  const owner = new URLSearchParams(window.location.search).get('id');

  const papers = [
    [paper1, back1, 1],
    [paper2, back2, 2],
    [paper3, back3, 3],
    [paper4, back4, 4],
    [paper5, back5, 5],
    [paper6, back6, 6]
  ];
  const handleNextClick = () => {
    if (paper === -1) {
      alert('편지지를 선택해주세요.');
      return;
    }
    window.localStorage.setItem('paper', `${paper}`);
    navigate(`/sub2?id=${owner}`);
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
    <Container>
      <HeaderContainer />
      <Title>Select letter paper!</Title>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
        <SwiperContainer>
          <NavigationButton ref={prevRef}>
            <SwiperButtonImage src={prev} alt='prev' />
          </NavigationButton>
          {swiperSetting && (
            <MySwiper
              {...swiperSetting}
              slidesPerView={1}
              onMySlideChange={e => setPaper(e.activeIndex)}
              onBeforeInit={swiper => {
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
              }}
            >
              {papers.map((elem, index) => (
                <MySlide
                  onClick={() => {
                    setPaper(index);
                  }}
                >
                  {paper === index ? <Select>select</Select> : <></>}
                  <Paper src={elem[0]} />
                  <Paper src={elem[1]} />
                </MySlide>
              ))}
            </MySwiper>
          )}
          <NavigationButton ref={nextRef}>
            <SwiperButtonImage src={next} alt='next' />
          </NavigationButton>
        </SwiperContainer>
        <Button title='Next' onClick={handleNextClick} width='15rem' style={{ marginTop: '15px' }} />
      </div>
    </Container>
  );
};
export default Sub1;

const Container = styled.div`
  position: fixed;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  @media (max-width: 768px) {
    background-image: url(${MobileBackgroundImage});
  }
`;
const SwiperContainer = styled.div`
  width: 700px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;

  .swiper {
    &-button-disabled {
      visibility: hidden;
    }
  }

  @media (max-width: 1024px) {
    width: 500px;
    height: 285px;
  }
  @media (max-width: 768px) {
    width: 400px;
    height: 230px;
  }
`;
const Title = styled.div`
  font-family: PatrickHand-Regular, NotoSansKR_Medium, serif;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  margin-top: 4rem;
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
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;
const Select = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 50%);
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: PatrickHand-Regular, serif;
  color: white;
`;
const Paper = styled.img`
  width: 50%;
  height: 100%;
`;
const NavigationButton = styled.button`
  width: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  padding: 0;
  background: none;
  cursor: pointer;
`;
const SwiperButtonImage = styled.img`
  width: 1rem;
  height: 2rem;
`;
