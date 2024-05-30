import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListadoPlanPage } from './listado-plan.page';

describe('ListadoPlanPage', () => {
  let component: ListadoPlanPage;
  let fixture: ComponentFixture<ListadoPlanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
