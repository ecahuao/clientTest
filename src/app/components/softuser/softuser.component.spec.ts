import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftuserComponent } from './softuser.component';

describe('SoftuserComponent', () => {
  let component: SoftuserComponent;
  let fixture: ComponentFixture<SoftuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoftuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoftuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
