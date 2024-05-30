import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RevCalenPage } from './rev-calen.page';

describe('RevCalenPage', () => {
  let component: RevCalenPage;
  let fixture: ComponentFixture<RevCalenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RevCalenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
