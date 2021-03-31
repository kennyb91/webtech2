import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LakasokComponent } from './lakasok.component';

describe('LakasokComponent', () => {
  let component: LakasokComponent;
  let fixture: ComponentFixture<LakasokComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LakasokComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LakasokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
