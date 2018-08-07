import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-cards',
  templateUrl: 'cards.html'
})
export class CardsPage {
  cardItems: any[];

  constructor(public navCtrl: NavController) {
    this.cardItems = [
      {
        user: {
          avatar: 'assets/img/otLogo.png',
          name: 'Dr. Gibbs'
        },
        date: 'November 5, 2017',
        image: 'assets/img/twoBabies.jpeg',
        content: 'Wait a minute. Wait a minute, Doc. Uhhh... ',
      },
      {
        user: {
          avatar: 'assets/img/otLogo.png',
          name: 'Sarah Connor'
        },
        date: 'May 12, 2018',
        image: 'assets/img/babies.jpeg',
        content: 'I face the unknown future, with a sense of hope. Because if a machine, a Terminator, can learn the value of human life, maybe we can too.'
      },
      {
        user: {
          avatar: 'assets/img/otLogo.png',
          name: 'Dr. Ian Malcolm'
        },
        date: 'June 28, 2018',
        image: 'assets/img/photo boyMom.jpeg',
        content: 'Your child stops and seeks stimulation.'
      }
    ];

  }
}
