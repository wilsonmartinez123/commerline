import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { AboutPage } from '../about/about';
import { MapPage } from '../map/map';
import { OffersPage } from '../offers/offers';
import { BusinessPage } from '../business/business';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = OffersPage;
  tab2Root: any = CategoriesPage;
  tab3Root: any = BusinessPage;
  tab4Root: any = MapPage;
  tab5Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
