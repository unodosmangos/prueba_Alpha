import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthviewComponent } from './sixthview.component';

describe('SixthviewComponent', () => {
  let component: SixthviewComponent;
  let fixture: ComponentFixture<SixthviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SixthviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SixthviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
