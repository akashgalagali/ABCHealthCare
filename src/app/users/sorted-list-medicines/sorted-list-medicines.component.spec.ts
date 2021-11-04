import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortedListMedicinesComponent } from './sorted-list-medicines.component';

describe('SortedListMedicinesComponent', () => {
  let component: SortedListMedicinesComponent;
  let fixture: ComponentFixture<SortedListMedicinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortedListMedicinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortedListMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
