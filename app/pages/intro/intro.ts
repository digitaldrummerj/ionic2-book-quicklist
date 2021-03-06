import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HomePage} from '../home/home';

/*
  Generated class for the IntroPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/intro/intro.html',
})
export class IntroPage {

  constructor(public nav: NavController) {

  }

  goToHome(): void {
    this.nav.setRoot(HomePage);
  }

}
