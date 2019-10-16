import {
  Directive,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';
@Directive({
  selector: '[amThemeCustom]'
})
export class CustomDirective implements OnInit {

  oldTheme: string;

  @Input() colorTheme: string = '';

  @Input() isDark: boolean = false;

  @HostBinding('class') themeActiveCssClass;

  constructor(
    private overlayContainer: OverlayContainer
  ) { }

  ngOnInit() {
    this.setTheme(this.colorTheme, this.isDark);
  }

  setTheme(colorTheme, isDark) {
    let theme = colorTheme + (isDark ? '-dark' : '-light');

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
