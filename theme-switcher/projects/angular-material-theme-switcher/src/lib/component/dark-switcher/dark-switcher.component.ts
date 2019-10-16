import {
  Component,
  Input,
  OnInit
} from '@angular/core';

import { AmThemeService } from '../../service/am-theme.service';

@Component({
  selector: 'am-theme-dark-switcher',
  templateUrl: './dark-switcher.component.html',
  styleUrls: ['./dark-switcher.component.css']
})
export class DarkSwitcherComponent implements OnInit {

  @Input() isDark: boolean = false;

  constructor(private amThemeService: AmThemeService) { }

  ngOnInit() {
    this.amThemeService.isDark$.next(this.isDark);
  }

  toggleIsDark(isDark: boolean) {
    this.amThemeService.isDark$.next(isDark);
  }

}
