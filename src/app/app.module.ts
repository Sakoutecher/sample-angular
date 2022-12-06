import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './components/face-snap/face-snap.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import { registerLocaleData } from '@angular/common'
import * as fr from '@angular/common/locales/fr'

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent,
    ChangeColorDirective
  ],
  imports: [
    BrowserModule
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
