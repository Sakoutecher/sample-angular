import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { registerLocaleData } from '@angular/common'
import * as fr from '@angular/common/locales/fr';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { HeaderComponent } from './components/header/header.component'
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { FaceSnapDetailsComponent } from './components/face-snap-details/face-snap-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    ChangeColorDirective,
    FaceSnapListComponent,
    HeaderComponent,
    HomeComponent,
    FaceSnapDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'fr-FR'
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { 
  constructor() {
    registerLocaleData(fr.default)
  }
}
