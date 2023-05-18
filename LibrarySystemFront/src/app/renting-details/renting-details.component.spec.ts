import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentingDetailsComponent } from './renting-details.component';

describe('RentingDetailsComponent', () => {
  let component: RentingDetailsComponent;
  let fixture: ComponentFixture<RentingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
