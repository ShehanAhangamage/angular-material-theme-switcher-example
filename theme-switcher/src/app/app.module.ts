import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from "@angular/flex-layout";

import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatTabsModule,
  MatToolbarModule
} from '@angular/material';

//import { AngularMaterialThemeSwitcherModule } from 'angular-material-theme-switcher';
import { AngularMaterialThemeSwitcherModule } from '@sheyxneo/angular-material-theme-switcher';

import { AppComponent } from './app.component';

import { ActiveThemeComponent } from './component/active-theme/active-theme.component';
import { DarkThemeComponent } from './component/dark-theme/dark-theme.component';
import { LightThemeComponent } from './component/light-theme/light-theme.component';
import { CustomThemeComponent } from './component/custom-theme/custom-theme.component';
import { ContainerThemeComponent } from './component/container-theme/container-theme.component';
import { ContainerLightThemeComponent } from './component/container-light-theme/container-light-theme.component';
import { ContainerDarkThemeComponent } from './component/container-dark-theme/container-dark-theme.component';
import { ContainerCustomThemeComponent } from './component/container-custom-theme/container-custom-theme.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ActiveThemeComponent,
    DarkThemeComponent,
    LightThemeComponent,
    CustomThemeComponent,
    ContainerThemeComponent,
    ContainerLightThemeComponent,
    ContainerDarkThemeComponent,
    ContainerCustomThemeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    AngularMaterialThemeSwitcherModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
