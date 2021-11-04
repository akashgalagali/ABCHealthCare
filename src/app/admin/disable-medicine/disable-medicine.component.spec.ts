import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableMedicineComponent } from './disable-medicine.component';

describe('DisableMedicineComponent', () => {
  let component: DisableMedicineComponent;
  let fixture: ComponentFixture<DisableMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableMedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisableMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
