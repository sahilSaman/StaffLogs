import { IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar, useIonLoading, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import {logInOutline, personCircleOutline} from 'ionicons/icons'
import Intro from '../components/Intro';
import {Preferences} from '@capacitor/preferences'
import Logo from '../assets/logo.png'
const INTRO_KEY='intro-seen'
const Login: React.FC = () => {
    const router=useIonRouter()
const [introSeen,setIntroSeen]=useState(false)
const [present,dismiss]=useIonLoading()
useEffect(()=>{
    const checkStorage=async()=>{
        const seen =await Preferences.get({key:INTRO_KEY})
        setIntroSeen(seen.value==='true')
    }
    checkStorage()
},[])
const doLogin=async(event:any)=>{
event.preventDefault();
await present("Logging In ..")
setTimeout(() => {
    dismiss()
    router.push('/app','root')
}, 2000);

}

const finishIntro=async()=>{
    setIntroSeen(true)
    Preferences.set({key:INTRO_KEY,value:"true"})
}
    return (
        <>
       {!introSeen ? (
        <Intro onFinish={finishIntro}/>
       ):<IonPage>
       <IonHeader>
           <IonToolbar color={'success'}>
               <IonTitle>Login</IonTitle>
           </IonToolbar>
       </IonHeader>
       <IonContent className='ion-padding' scrollY={false} >
        <IonGrid fixed>
            <IonRow class='ion-justify-content-center'>
                <IonCol size='12' sizeMd='8' sizeXl='4'>
                    <div className='ion-text-center ion-padding'>
                        <img src={Logo} alt="" width={'50%'} />
                    </div>
                </IonCol>
            </IonRow>
            <IonRow class='ion-justify-content-center'>
                <IonCol size='12' sizeMd='8' sizeXl='4'>
                <IonCard>
               <IonCardContent>
                   <form onSubmit={doLogin}>
                       <IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='sahil@gmail.com'></IonInput>
                       <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password' placeholder='****'></IonInput>
                       <IonButton type='submit' expand='block' className='ion-margin-top'>
                         Login
                           <IonIcon icon={logInOutline} slot='end'/>
                           </IonButton>
                       <IonButton routerLink='/register' color={'secondary'} type='button' expand='block' className='ion-margin-top'>Create Account <IonIcon icon={personCircleOutline} slot='end'/></IonButton>
                   </form>
               
               </IonCardContent>
           </IonCard>
                    </IonCol>
                    </IonRow>
        </IonGrid>
           
       </IonContent>
   </IonPage>}
        
        </>
    );
};

export default Login;