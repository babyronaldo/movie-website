import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {reducer} from './ngrx/data.reducer';
import {StoreModule} from '@ngrx/store';
import {RouterModule, Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';

const routes: Routes = [
  // { path: '', component : HomeComponent },
  // { path: 'genre/:id', component: GenreComponent},
  // { path: 'search/:name', component: SearchComponent},
  // { path: 'film/:id', component: FilmComponent},
  // { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    MatIconModule,
    BrowserModule,
    StoreModule.forRoot({
      tutorial: reducer
    }),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
