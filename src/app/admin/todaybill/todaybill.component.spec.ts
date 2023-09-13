import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaybillComponent } from './todaybill.component';

describe('TodaybillComponent', () => {
  let component: TodaybillComponent;
  let fixture: ComponentFixture<TodaybillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodaybillComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaybillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
