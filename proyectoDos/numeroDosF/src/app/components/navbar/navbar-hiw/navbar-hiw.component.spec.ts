import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarHiwComponent } from './navbar-hiw.component';

describe('NavbarHiwComponent', () => {
  let component: NavbarHiwComponent;
  let fixture: ComponentFixture<NavbarHiwComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarHiwComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarHiwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
