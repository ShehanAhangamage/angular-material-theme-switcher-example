import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerThemeComponent } from './container-theme.component';

describe('ContainerThemeComponent', () => {
  let component: ContainerThemeComponent;
  let fixture: ComponentFixture<ContainerThemeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerThemeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
