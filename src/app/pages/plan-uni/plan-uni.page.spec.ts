import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlanUniPage } from './plan-uni.page';

describe('PlanUniPage', () => {
  let component: PlanUniPage;
  let fixture: ComponentFixture<PlanUniPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanUniPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
