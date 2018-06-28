import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
    selector: 'page-form',
    templateUrl: 'form.html'
})
export class FormPage {

    constructor(public navCtrl: NavController) {

    }

    goHome() {
        this.navCtrl.setRoot(HomePage);
    }

}
