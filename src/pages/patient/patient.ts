import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AdddoctorPage } from '../adddoctor/adddoctor';
import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-patient',
  templateUrl: 'patient.html'
})
export class PatientPage {

  constructor(public navCtrl: NavController) {

  }
  //添加就诊人
  openPatientPage() {
    this.navCtrl.push(AdddoctorPage);
  }
  //就诊人详情
  openJiuzhenrenPage() {
    this.navCtrl.push(DetailsPage);
  }

}
