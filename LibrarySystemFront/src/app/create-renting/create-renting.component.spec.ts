import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRentingComponent } from './create-renting.component';

describe('CreateRentingComponent', () => {
  let component: CreateRentingComponent;
  let fixture: ComponentFixture<CreateRentingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateRentingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRentingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
