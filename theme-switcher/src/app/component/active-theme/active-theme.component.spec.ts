import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveThemeComponent } from './active-theme.component';

describe('ActiveThemeComponent', () => {
  let component: ActiveThemeComponent;
  let fixture: ComponentFixture<ActiveThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
