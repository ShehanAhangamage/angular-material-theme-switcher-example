import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSwitcherComponent } from './dark-switcher.component';

describe('DarkSwitcherComponent', () => {
  let component: DarkSwitcherComponent;
  let fixture: ComponentFixture<DarkSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DarkSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DarkSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
