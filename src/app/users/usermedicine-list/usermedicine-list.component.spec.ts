import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermedicineListComponent } from './usermedicine-list.component';

describe('UsermedicineListComponent', () => {
  let component: UsermedicineListComponent;
  let fixture: ComponentFixture<UsermedicineListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsermedicineListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsermedicineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
