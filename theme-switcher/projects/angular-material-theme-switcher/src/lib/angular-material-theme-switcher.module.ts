import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatGridListModule,
  MatIconModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatTooltipModule
} from '@angular/material';

import { OverlayModule } from "@angular/cdk/overlay";

import { ColorSwitcherComponent } from './component/color-switcher/color-switcher.component';
import { DarkSwitcherComponent } from './component/dark-switcher/dark-switcher.component';

import { ContainerDirective } from './directive/container.directive';
import { ActiveDirective } from './directive/active.directive';
import { CustomDirective } from './directive/custom.directive';
import { DarkDirective } from './directive/dark.directive';
import { LightDirective } from './directive/light.directive';

import { AmThemeService } from './service/am-theme.service';


@NgModule({
  declarations: [
    ColorSwitcherComponent,
    DarkSwitcherComponent,
    ContainerDirective,
    ActiveDirective,
    CustomDirective,
    DarkDirective,
    LightDirective
  ],
  providers: [
    AmThemeService
  ],
  imports: [
    CommonModule,
    OverlayModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatTooltipModule
  ],
  exports: [
    ColorSwitcherComponent,
    DarkSwitcherComponent,
    ContainerDirective,
    ActiveDirective,
    CustomDirective,
    DarkDirective,
    LightDirective
  ]
})
export class AngularMaterialThemeSwitcherModule { }
