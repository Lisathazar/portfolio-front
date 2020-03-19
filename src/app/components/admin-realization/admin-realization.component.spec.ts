import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminRealizationComponent } from './admin-realization.component';

describe('AdminRealizationComponent', () => {
  let component: AdminRealizationComponent;
  let fixture: ComponentFixture<AdminRealizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminRealizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminRealizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
