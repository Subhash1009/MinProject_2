import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlybillsComponent } from './monthlybills.component';

describe('MonthlybillsComponent', () => {
  let component: MonthlybillsComponent;
  let fixture: ComponentFixture<MonthlybillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlybillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlybillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
