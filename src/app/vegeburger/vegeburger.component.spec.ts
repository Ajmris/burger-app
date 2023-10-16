import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VegeburgerComponent } from './vegeburger.component';

describe('VegeburgerComponent', () => {
  let component: VegeburgerComponent;
  let fixture: ComponentFixture<VegeburgerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VegeburgerComponent]
    });
    fixture = TestBed.createComponent(VegeburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
