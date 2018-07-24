import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PatientPage } from '../patient/patient';
import { RegisteredPage } from '../registered/registered';
import { UserPage } from '../user/user';

@Component({
    selector: 'page-personal',
    templateUrl: 'personal.html'
})
export class PersonalPage {
    constructor(public navCtrl: NavController, params: NavParams) {
        // this.item = params.data.item;

    }
    //就诊人管理
    openNavDetailsPage() {
        this.navCtrl.push(PatientPage);
    }
    //挂号订单
    openRegisteredPagePage() {
        this.navCtrl.push(RegisteredPage);
    }
    //账号
    openUserPage() {
        this.navCtrl.push(UserPage);
    }
}
