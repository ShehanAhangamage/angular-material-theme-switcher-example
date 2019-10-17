import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerLightThemeComponent } from './container-light-theme.component';

describe('ContainerLightThemeComponent', () => {
  let component: ContainerLightThemeComponent;
  let fixture: ComponentFixture<ContainerLightThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerLightThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerLightThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
