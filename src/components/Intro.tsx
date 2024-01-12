import { IonButton, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Swiper,SwiperSlide,useSwiper } from 'swiper/react'
import 'swiper/css'
interface ContainerProps {
    onFinish:()=>void;
}
const Intro: React.FC<ContainerProps> = ({onFinish}) => {
const SwiperButtonNext=({children}:any)=>{
    const swiper=useSwiper()
    return <IonButton onClick={()=>swiper.slideNext()}>{children}</IonButton>
}
    return (
        <Swiper>
          <SwiperSlide>
            <IonText><h3>This is first page</h3></IonText>
            <SwiperButtonNext>Next</SwiperButtonNext>
          </SwiperSlide>
          <SwiperSlide>
            <IonText><h3>This is second page</h3></IonText>
            <SwiperButtonNext>Next</SwiperButtonNext>
          </SwiperSlide>
          <SwiperSlide>
            <IonText><h3>This is third page</h3></IonText>
            <IonButton onClick={()=>onFinish()}>Finish</IonButton>
          </SwiperSlide>
        </Swiper>
    );
};

export default Intro;