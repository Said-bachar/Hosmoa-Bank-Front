import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFormComponent } from './transfer-form.component';

describe('TransferFormComponent', () => {
  let component: TransferFormComponent;
  let fixture: ComponentFixture<TransferFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
