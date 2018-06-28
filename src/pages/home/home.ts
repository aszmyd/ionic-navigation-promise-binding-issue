import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormPage } from '../form/form';

import { Promise as ShimmedPromise } from 'es6-promise';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

    constructor(public navCtrl: NavController) {

    }

    goDirectly() {
        this.navCtrl.setRoot(FormPage);
    }

    goAfterNativePromise() {
        Promise.resolve().then(() => {
            this.navCtrl.setRoot(FormPage);
        });
    }

    goAfterShimmedPromise() {
        ShimmedPromise.resolve().then(() => {
            this.navCtrl.setRoot(FormPage);
        });
    }
}
