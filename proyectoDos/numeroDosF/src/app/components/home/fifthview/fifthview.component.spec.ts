import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthviewComponent } from './fifthview.component';

describe('FifthviewComponent', () => {
  let component: FifthviewComponent;
  let fixture: ComponentFixture<FifthviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FifthviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FifthviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
