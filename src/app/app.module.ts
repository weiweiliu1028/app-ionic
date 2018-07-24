import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { PersonalPage } from '../pages/personal/personal';
import { PatientPage } from '../pages/patient/patient';
import { RegisteredPage } from '../pages/registered/registered';
import { AdddoctorPage } from '../pages/adddoctor/adddoctor';
import { UserPage } from '../pages/user/user';
import { DetailsPage } from '../pages/details/details';
import { DetailsmodalPage } from '../pages/detailsmodal/detailsmodal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    AboutPage,
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    PersonalPage,
    PatientPage,
    RegisteredPage,
    AdddoctorPage,
    UserPage,
    DetailsPage,
    DetailsmodalPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      backButtonText: '返回',
      tabsHideOnSubPages: true
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    AboutPage,
    MyApp,
    ContactPage,
    HomePage,
    TabsPage,
    PersonalPage,
    PatientPage,
    RegisteredPage,
    AdddoctorPage,
    UserPage,
    DetailsPage,
    DetailsmodalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
