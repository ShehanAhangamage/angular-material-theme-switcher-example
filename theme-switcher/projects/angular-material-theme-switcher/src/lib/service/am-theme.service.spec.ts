import { TestBed } from '@angular/core/testing';

import { AmThemeService } from './am-theme.service';

describe('AmThemeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AmThemeService = TestBed.get(AmThemeService);
    expect(service).toBeTruthy();
  });
});
