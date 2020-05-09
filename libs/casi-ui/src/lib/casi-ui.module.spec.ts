import { async, TestBed } from '@angular/core/testing';
import { CasiUiModule } from './casi-ui.module';

describe('CasiUiModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CasiUiModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CasiUiModule).toBeDefined();
  });
});
