import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ActionComponent } from './action/action.component';
import { OptionsComponent } from './options/options.component';
import { AddOptionComponent } from './options/add-option/add-option.component';
import { OptionComponent } from './options/option/option.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OptionsService } from './options/options.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ActionComponent,
    OptionsComponent,
    AddOptionComponent,
    OptionComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [OptionsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
