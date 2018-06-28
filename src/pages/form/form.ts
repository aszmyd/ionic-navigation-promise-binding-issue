import { ChangeDetectorRef, Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from "../home/home";

@Component({
    selector: 'page-form',
    templateUrl: 'form.html'
})
export class FormPage {

    public testModel: string;

    constructor(private navCtrl: NavController,
                private changeDetectorRef: ChangeDetectorRef) {

    }

    goHome() {
        this.navCtrl.setRoot(HomePage);
    }

    getFromMemory() {
        alert(`Current testModel: "${this.testModel}"`);
    }

    forceRefresh() {
        this.changeDetectorRef.detectChanges();
    }

}
