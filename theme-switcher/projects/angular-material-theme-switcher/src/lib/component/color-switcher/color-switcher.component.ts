import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { AmThemeService } from '../../service/am-theme.service';

@Component({
  selector: 'am-theme-color-switcher',
  templateUrl: './color-switcher.component.html',
  styleUrls: ['./color-switcher.component.css']
})
export class ColorSwitcherComponent implements OnInit {

  @Input() colorTheme: string = '';

  @Input() themes: string[] = [];

  @Input() isUseLibraryThemes: boolean = true;

  constructor(private amThemeService: AmThemeService) { }

  ngOnInit() {
    if (this.isUseLibraryThemes) {
      this.amThemeService.themes.forEach(colorTheme => this.themes.push(colorTheme));

      if (this.colorTheme === '') {
        this.amThemeService.colorTheme$.subscribe(colorTheme => this.colorTheme = colorTheme);
      }
    } else {
      if (this.colorTheme === '') {
        this.colorTheme = this.themes[0];
      }
    }

    if (this.themes.indexOf(this.colorTheme) === -1) {
      this.themes.push(this.colorTheme);
    }

    if (this.colorTheme !== '') {
      this.amThemeService.colorTheme$.next(this.colorTheme);
    }
  }

  setColorTheme(colorTheme: string) {
    this.amThemeService.colorTheme$.next(colorTheme);
    this.colorTheme = colorTheme;
  }

}
