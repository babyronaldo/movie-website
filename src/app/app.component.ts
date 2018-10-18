import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Kind} from './models/kind.model';
import {Country} from './models/country.model';
import {Store} from '@ngrx/store';
import {AppState} from './ngrx/app.state';
import {Observable} from 'rxjs';
import {BackgroundData} from './ngrx/data.model';
import {PlatformLocation} from '@angular/common';
import * as BackgroundDataActions from './ngrx/data.actions';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MovieWebsite';
  selected = 'movies';
  url: String;
  initialUrl = 'http://haintheme.com/demo/wp/buster/wp-content/uploads/2017/12/slider-bg.jpg?id=159';
  kinds: Kind[];
  countries: Country[];
  checkScroll = true;
  formSearch = new FormControl();

  constructor(private store: Store<AppState>,
              private location: PlatformLocation,
              private route: Router) {

    this.location.onPopState(() => {
      this.store.dispatch(new BackgroundDataActions.RemoveBackgroundData());
      this.store.dispatch(new BackgroundDataActions.AddBackgroundData({url: this.initialUrl}));
      this.formSearch.setValue('');

    });
  }

  ngOnInit() {
  }

  goHome() {
    this.formSearch.setValue('');
    this.store.dispatch(new BackgroundDataActions.RemoveBackgroundData());
    this.store.dispatch(new BackgroundDataActions.AddBackgroundData({url: this.initialUrl}));
    this.route.navigate(['/']);
  }

  getFilmByType(type) {
    let name: string;
    name = 'T_' + '\'' + type + '\'';
    this.route.navigate(['/genre/' + name]);
  }


  selectGenre(item: Kind) {
    let name: string;
    name = item.kind_name;
    name = 'G_' + item.id + '_' + name.split(' ').join('_');
    this.route.navigate(['/genre/' + name]);
  }

  selectCountry(item: Country) {
    let name: string;
    name = item.country_name;
    name = 'C_' + item.id + '_' + name.split(' ').join('_');
    this.route.navigate(['/genre/' + name]);
  }
  aboutUs() {
    window.scroll(9999, 9999);
  }
}
