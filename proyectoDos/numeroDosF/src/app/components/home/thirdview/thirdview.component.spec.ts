import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdviewComponent } from './thirdview.component';

describe('ThirdviewComponent', () => {
  let component: ThirdviewComponent;
  let fixture: ComponentFixture<ThirdviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThirdviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThirdviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
