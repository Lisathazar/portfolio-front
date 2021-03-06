import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizationComponent } from './realization.component';

describe('RealizationComponent', () => {
  let component: RealizationComponent;
  let fixture: ComponentFixture<RealizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
