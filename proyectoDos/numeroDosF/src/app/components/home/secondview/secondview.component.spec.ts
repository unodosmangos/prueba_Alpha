import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondviewComponent } from './secondview.component';

describe('SecondviewComponent', () => {
  let component: SecondviewComponent;
  let fixture: ComponentFixture<SecondviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
