import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-registered',
  templateUrl: 'registered.html'
})
export class RegisteredPage {
  gender: string = "f";
  constructor(public navCtrl: NavController) {

  }

  stpSelect() {
    console.log('STP selected');
  }

}
