import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActiveThemeComponent } from './component/active-theme/active-theme.component';
import { DarkThemeComponent } from './component/dark-theme/dark-theme.component';
import { LightThemeComponent } from './component/light-theme/light-theme.component';
import { CustomThemeComponent } from './component/custom-theme/custom-theme.component';
import { ContainerThemeComponent } from './component/container-theme/container-theme.component';
import { ContainerLightThemeComponent } from './component/container-light-theme/container-light-theme.component';
import { ContainerDarkThemeComponent } from './component/container-dark-theme/container-dark-theme.component';
import { ContainerCustomThemeComponent } from './component/container-custom-theme/container-custom-theme.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'active',
    pathMatch: 'full'
  },
  {
    path: 'active',
    component: ActiveThemeComponent
  },
  {
    path: 'dark',
    component: DarkThemeComponent
  },
  {
    path: 'light',
    component: LightThemeComponent
  },
  {
    path: 'custom',
    component: CustomThemeComponent
  },
  {
    path: 'container',
    component: ContainerThemeComponent
  },
  {
    path: 'container-light',
    component: ContainerLightThemeComponent
  },
  {
    path: 'container-dark',
    component: ContainerDarkThemeComponent
  },
  {
    path: 'container-custom',
    component: ContainerCustomThemeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
