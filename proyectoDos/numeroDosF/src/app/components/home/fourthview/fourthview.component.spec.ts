import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthviewComponent } from './fourthview.component';

describe('FourthviewComponent', () => {
  let component: FourthviewComponent;
  let fixture: ComponentFixture<FourthviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourthviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FourthviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
