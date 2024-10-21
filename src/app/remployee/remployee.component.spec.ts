import { ComponentFixture, TestBed } from '@angular/core/testing';

import { REmployeeComponent } from './remployee.component';

describe('REmployeeComponent', () => {
  let component: REmployeeComponent;
  let fixture: ComponentFixture<REmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [REmployeeComponent]
    });
    fixture = TestBed.createComponent(REmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
