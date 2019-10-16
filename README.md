# Angular Material Theme Switcher

This library will help you to use multiple themes and easily switch between them in your project.

## Requirement

* Create your project with supporting to Sass (.scss / .sass)

Example : 

``` bash

ng new Example-Project --style scss

```

* Install [Angular Material](https://material.angular.io/) in your project

``` bash

ng add @angular/material

```

## How to install?

You can NPM to install this library in your project.

``` bash

npm install @sheyxneo/angular-material-theme-switcher

```

or

``` bash

npm i @sheyxneo/angular-material-theme-switcher

```

## How to use?

Firstly you have to import Library in the your module

* .module

``` javascript
import {
    AngularMaterialThemeSwitcherModule
} from '@sheyxneo/angular-material-theme-switcher';
```

Then import theme in styles.scss

* styles.scss

``` scss

@import '~@sheyxneo/angular-material-theme-switcher/am-theme'; 

```

Now you can add Theme Switchers and Theme Containers

### Theme Switchers

There are two switchers to use according to your needs- You can call these component in your component's HTML file.

#### Color Switcher

Switcher to switch color theme of your project.

* Basic use

component.html

``` html
<am-theme-color-switcher></am-theme-color-switcher>
```

* Advance Configuration

    - Configure Default Color Theme

component.html

``` html
<am-theme-color-switcher colorTheme="color-theme-name"></am-theme-color-switcher>
```

    - Provide your Color Themes

component.html

``` html
<am-theme-color-switcher [themes]="['color-theme-name']"></am-theme-color-switcher>
```

or

component.ts

``` javascript
themes = ['indigo-green'];
```

component.html

``` html
<am-theme-color-switcher [themes]="themes"></am-theme-color-switcher>
```

    - Configure Library Color Themes should use or not- Default value is 'true'

component.html

``` html
<am-theme-color-switcher [isUseLibraryThemes]="false"></am-theme-color-switcher>
```

#### Dark Switcher

Switch to Dark or Light

* Basic use

component.html

``` html
<am-theme-dark-switcher></am-theme-dark-switcher>
```

* Advance Configuration

    - Configure Theme is Dark or Not, Default value is 'false'.

component.html

``` html
<am-theme-dark-switcher [isDark]="true"></am-theme-dark-switcher>
```

### Theme Container

To apply themes to your project, you can use following directives.

You must have to add these directives to none Angular Material wrapper html element.

Exapmle : 

component.html

``` html
<div amThemeDirective>
    ...
</div>
```

#### Active Theme

To apply current Active theme.

component.html

``` html
<div amThemeActive>
    ...
</div>
```

#### Dark Theme

To apply current Active Dark theme- This container will not change with Dark Switcher.

component.html

``` html
<div amThemeDark>
    ...
</div>
```

#### Light Theme

To apply current Light theme- This container will not change with Dark Switcher.

component.html

``` html
<div amThemeLight>
    ...
</div>
```

#### Custom Theme

To apply Custom theme- You must have to provide Color Theme name- Your theme is Dark or Not is optional- Default value is 'false'- It mean, whether you will did't set value for 'isDark', your theme will be Light.

* Light Custom Theme

component.html

``` html
<div amThemeCustom colorTheme="indigo-pink">
    ...
</div>
```

* Dark Custom Theme

component.html

``` html
<div amThemeCustom colorTheme="indigo-pink" [isDark]="true">
 ...
</div>
```

#### Theme Container

Special directive to manage your theme- It is also like Active Theme, but also canfigure like Custome Theme.

* Like a Active Theme

This will use states of your Theme Switchers.

component.html

``` html
<div amThemeContainer>
    ...
</div>

* Fixed Color Theme

This will use fixed Color Theme and state of your Dark Switcher.

component.html

```html

<div amThemeContainer colorTheme="indigo-pink">
    ...
</div>
```

* Fixed Dark or Light Theme

This will use fixed Dark or Light Theme and state of your Color Switcher.

component.html

``` html
<div amThemeContainer [isDark]="true">
    ...
</div>
```

* Like Custom Theme

This will use fixed  both Color Theme and Dark or Light Theme- And don't use states of your Theme Switchers.

component.html

``` html
<div amThemeContainer colorTheme="indigo-pink" [isDark]="true">
    ...
</div>
```

## How make your Themes?

It is so easy to make your theme- You only have to pass selected colors to the theme builder in 'styles.scss' file or your custom 'theme.scss' file, but you must have to import 'theme.scss' file into 'styles.scss' file.

* Basic use

You can make theme providing primary, accent and warn color.

styles.scss

``` scss

...

@import "~@angular/material/theming"; 

@include mat-core(); 

$theme: (
  deeppurple-amber: (

    primary: mat-palette($mat-deep-purple),
    accent: mat-palette($mat-amber, A200, A100, A400),
    warn: mat-palette($mat-red)

  ), 
  indigo-pink: (

    primary: mat-palette($mat-indigo),
    accent: mat-palette($mat-pink, A200, A100, A400),
    warn: mat-palette($mat-red)

  ), 
  pink-bluegrey: (

    primary: mat-palette($mat-pink),
    accent: mat-palette($mat-blue-grey, A200, A100, A400),
    warn: mat-palette($mat-red)

  ), 
  purple-green: (

    primary: mat-palette($mat-purple),
    accent: mat-palette($mat-green, A200, A100, A400),
    warn: mat-palette($mat-red)

  )
); 

@import '~@sheyxneo/angular-material-theme-switcher/am-theme'; 

@include am-theme($theme); 

...

```

* Advance use

You can provide any of these or all of these build your Advance Themes.

* light-background

* dark-background

* light-background-status-bar

* dark-background-status-bar

* light-background-app-bar

* dark-background-app-bar

* light-background-hover

* dark-background-hover

* light-background-card

* dark-background-card

* light-background-dialog

* dark-background-dialog

* light-background-disabled-button

* dark-background-disabled-button

* light-background-raised-button

* dark-background-raised-button

* light-background-focused-button

* dark-background-focused-button

* light-background-selected-button

* dark-background-selected-button

* light-background-selected-disabled-button

* dark-background-selected-disabled-button

* light-background-disabled-button-toggle

* dark-background-disabled-button-toggle

* light-background-unselected-chip

* dark-background-unselected-chip

    

* light-background-disabled-list-option

* dark-background-disabled-list-option

* light-foreground-base

* dark-foreground-base

* light-foreground-divider

* dark-foreground-divider

* light-foreground-dividers

* dark-foreground-dividers

* light-foreground-disabled

* dark-foreground-disabled

* light-foreground-disabled-button

* dark-foreground-disabled-button

* light-foreground-disabled-text

 - dark-foreground-disabled-text

* light-foreground-elevation

* dark-foreground-elevation

* light-foreground-hint-text

* dark-foreground-hint-text

* light-foreground-secondary-text

* dark-foreground-secondary-text

* light-foreground-icon

* dark-foreground-icon

* light-foreground-icons

* dark-foreground-icons

* light-foreground-text

* dark-foreground-text

* light-foreground-slider-min

* dark-foreground-slider-min

* light-foreground-slider-off

* dark-foreground-slider-off

    

* light-foreground-slider-off-active

* dark-foreground-slider-off-active

## Additional Gift

How is nice you can use these themes for your None Angular Material html elemants- It is easy- You can use following 'css' classes to them.

* Background colors

  + primary-background 
  + accent-background 
  + warn-background 

  + status-bar-background 
  + app-bar-background 
  + background-background 
  + hover-background 
  + card-background 
  + dialog-background 
  + disabled-button-background 
  + raised-button-background 
  + focused-button-background 
  + selected-button-background 
  + selected-disabled-button-background 
  + disabled-button-toggle-background
  + unselected-chip-background 
  + disabled-list-option-background 

  

* Foreground and Text colors

  + primary-color 
  + accent-color 
  + warn-color 

  

  + base-color 
  + divider-color 
  + dividers-color 
  + disabled-color 
  + disabled-button-color 
  + disabled-text-color 
  + elevation-color 
  + hint-text-color 
  + secondary-text-color 
  + icon-color
  + icons-color 
  + text-color 
  + slider-min-color 
  + slider-off-color 
  + slider-off-active-color 

