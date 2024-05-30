import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanClasePage } from './plan-clase.page';

describe('PlanClasePage', () => {
  let component: PlanClasePage;
  let fixture: ComponentFixture<PlanClasePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanClasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
