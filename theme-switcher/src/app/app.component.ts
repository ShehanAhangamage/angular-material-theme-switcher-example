import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'theme-switcher';

  links = [
    {
      path: 'active',
      label: 'Active Theme'
    },
    {
      path: 'dark',
      label: 'Dark Theme'
    },
    {
      path: 'light',
      label: 'Light Theme'
    },
    {
      path: 'custom',
      label: 'Custome Theme'
    },
    {
      path: 'container',
      label: 'Container Theme'
    },
    {
      path: 'container-light',
      label: 'Container Light Theme'
    },
    {
      path: 'container-dark',
      label: 'Container Dark Theme'
    },
    {
      path: 'container-custom',
      label: 'Container Custom Theme'
    }
  ];
  activeLink = this.links[0].path;
}
