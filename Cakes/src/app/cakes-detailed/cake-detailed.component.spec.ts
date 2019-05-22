import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakesDetailedComponent } from './cake-detailed.component';

describe('CakesDetailedComponent', () => {
  let component: CakesDetailedComponent;
  let fixture: ComponentFixture<CakesDetailedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakesDetailedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakesDetailedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
