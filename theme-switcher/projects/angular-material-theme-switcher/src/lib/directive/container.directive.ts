import {
  Directive,
  HostBinding,
  Input,
  OnInit
} from '@angular/core';

import { OverlayContainer } from '@angular/cdk/overlay';

import { AmThemeService } from '../service/am-theme.service';

@Directive({
  selector: '[amThemeContainer]'
})
export class ContainerDirective implements OnInit {

  oldTheme: string;

  @Input() colorTheme: string = '';

  @Input() isDark: boolean;

  @HostBinding('class') themeActiveCssClass;

  constructor(
    private overlayContainer: OverlayContainer,
    private amThemeService: AmThemeService
  ) { }

  ngOnInit() {
    if (this.colorTheme !== '') {
      if (typeof this.isDark !== 'undefined') {
        this.setTheme(this.colorTheme, this.isDark);
      } else {
        this.amThemeService.isDark$.subscribe((isDark) => {
          this.setTheme(this.colorTheme, isDark);
        });
      }
    } else {
      this.amThemeService.colorTheme$.subscribe((colorTheme) => {
        if (typeof this.isDark !== 'undefined') {
          this.setTheme(colorTheme, this.isDark);
        } else {
          this.amThemeService.isDark$.subscribe((isDark) => {
            this.setTheme(colorTheme, isDark);
          });
        }
      });
    }
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
