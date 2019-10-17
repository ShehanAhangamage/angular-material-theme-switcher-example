import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerDarkThemeComponent } from './container-dark-theme.component';

describe('ContainerDarkThemeComponent', () => {
  let component: ContainerDarkThemeComponent;
  let fixture: ComponentFixture<ContainerDarkThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerDarkThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerDarkThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
