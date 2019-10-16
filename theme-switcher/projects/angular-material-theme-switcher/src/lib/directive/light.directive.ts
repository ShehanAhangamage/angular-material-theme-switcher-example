import {
  Directive,
  HostBinding,
  OnInit
} from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';

import { AmThemeService } from '../service/am-theme.service';

@Directive({
  selector: '[amThemeLight]'
})
export class LightDirective implements OnInit {

  oldTheme: string;

  @HostBinding('class') themeActiveCssClass;

  constructor(
    private overlayContainer: OverlayContainer,
    private amThemeService: AmThemeService
  ) { }

  ngOnInit() {
    this.amThemeService.colorTheme$.subscribe((colorTheme) => {
      this.setTheme(colorTheme);
    });
  }

  setTheme(colorTheme) {
    let theme = colorTheme + '-light';

    this.themeActiveCssClass = theme;

    const overlayClassList = this.overlayContainer.getContainerElement().classList
    if (overlayClassList.contains(this.oldTheme)) {
      overlayClassList.replace(this.oldTheme, theme)
    }
    else {
      overlayClassList.add(theme)
    }

    this.oldTheme = theme;
  }

}
