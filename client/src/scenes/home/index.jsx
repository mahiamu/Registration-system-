import React from "react";
import FlexBetween from "../../components/FlexBetween";
import Header from "../../components/Header";
import {  tokens } from "../../theme";
import {
  LockOutlined,
  } from "@mui/icons-material";
import {
  Box,
  Button,
  useTheme,
  

} from "@mui/material";
import { useValue } from '../../context/ContextProvider';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectCoverflow,  Zoom } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
//import 'swiper/css/lazy';
import 'swiper/css/zoom';
import './swiper.css';
import logo1 from './logo123.png'
import logo2 from './logo2.jpg'
import logo3 from './logo3.jpg'
import logo4 from './logo4.jpg'

const logo =[logo1, logo2, logo3, logo4];


const Home = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
 
  const {
    state: { currentUser }, dispatch
  } = useValue();
  
 
  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="HOME" subtitle="Welcome to your Homepage" />

      {/*  {!currentUser ? (<Box>
          <Button
            sx={{
              backgroundColor: colors.greenAccent[400],
              color: colors.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
            onClick={() => dispatch({ type: 'OPEN_LOGIN' })}
          >
            <LockOutlined sx={{ mr: "10px" }} />
            Login to check your status
          </Button>
        </Box>):(<Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.background.alt,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            Ehio Talent
          </Button>
        </Box>)} */}
      </FlexBetween>
      <Box m='2'>
        <Swiper
          modules={[Navigation, Autoplay, EffectCoverflow,  Zoom]}
          centeredSlides
          slidesPerView={2}
          grabCursor
          navigation
          autoplay
         // lazy
          zoom
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
        >
         
          {logo.map((url)=>(  <SwiperSlide  key={url}>
              <div className="swiper-zoom-container">
                <img src={url} alt="Logo" />
              </div>
            </SwiperSlide>))}
      </Swiper>
      </Box>
     
    </Box>
  );
};

export default Home;