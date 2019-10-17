import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCustomThemeComponent } from './container-custom-theme.component';

describe('ContainerCustomThemeComponent', () => {
  let component: ContainerCustomThemeComponent;
  let fixture: ComponentFixture<ContainerCustomThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerCustomThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerCustomThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
