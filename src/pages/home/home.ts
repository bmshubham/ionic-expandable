import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  education: any = {};
  interest: any = {};
  itemExpandHeight: number = 200;

  constructor(public navCtrl: NavController) {
    this.education = {expanded: false};
    this.interest = {expanded: false};
  }

  expandItem(item) {
    console.log(item.expanded);
    item.expanded = !item.expanded;
  }

}
