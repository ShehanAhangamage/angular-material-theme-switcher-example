import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AmThemeService {

  themes: string[] = [
    'deeppurple-amber',
    'indigo-pink',
    'pink-bluegrey',
    'purple-green',
  ];

  colorTheme$ = new BehaviorSubject<string>('indigo-pink');
  isDark$ = new BehaviorSubject<boolean>(false);

  constructor() { }

}
