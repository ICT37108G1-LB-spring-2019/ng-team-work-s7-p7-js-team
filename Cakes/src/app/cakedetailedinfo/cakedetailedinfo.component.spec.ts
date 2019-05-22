import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakedetailedinfoComponent } from './cakedetailedinfo.component';

describe('CakedetailedinfoComponent', () => {
  let component: CakedetailedinfoComponent;
  let fixture: ComponentFixture<CakedetailedinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakedetailedinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakedetailedinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
