import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailsmodalPage } from '../detailsmodal/detailsmodal';
@Component({
  selector: 'page-details',
  templateUrl: 'details.html'
})
export class DetailsPage {

  constructor(public navCtrl: NavController) {

  }
  openPeUserPage() {
    this.navCtrl.push(DetailsmodalPage);
  }

}
