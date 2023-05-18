import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRentingComponent } from './update-renting.component';

describe('UpdateRentingComponent', () => {
  let component: UpdateRentingComponent;
  let fixture: ComponentFixture<UpdateRentingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRentingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
