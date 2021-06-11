import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargesComponent } from './recharges.component';

describe('RechargesComponent', () => {
  let component: RechargesComponent;
  let fixture: ComponentFixture<RechargesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechargesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
