import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import {checkmarkDoneOutline} from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
const doRegister=(event:any)=>{
    event.preventDefault();
    console.log("register")
}
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color={'success'}>
                    <IonButtons slot='start'>
                        <IonBackButton defaultHref='/'/>
                    </IonButtons>
                    <IonTitle>Create Account</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent scrollY={false} className='ion-padding'>
            <IonGrid fixed>
            <IonRow class='ion-justify-content-center'>
                <IonCol size='12' sizeMd='8' sizeXl='4'>
                <IonCard>
                    <IonCardContent>
                        <form onSubmit={doRegister}>
                            <IonInput fill='outline' labelPlacement='floating' label='Email' type='email' placeholder='sahil@gmail.com'></IonInput>
                            <IonInput className='ion-margin-top' fill='outline' labelPlacement='floating' label='Password' type='password' placeholder='****'></IonInput>
                            <IonButton type='submit' expand='block' className='ion-margin-top'>
                                Create My Account
                                <IonIcon icon={checkmarkDoneOutline} slot='end'/>
                                </IonButton>
                         
                        </form>
                    
                    </IonCardContent>
                </IonCard>
                    </IonCol>
                    </IonRow>
                    </IonGrid>
                
            </IonContent>
        </IonPage>
    );
};

export default Register;