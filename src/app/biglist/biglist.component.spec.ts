import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiglistComponent } from './biglist.component';

describe('BiglistComponent', () => {
  let component: BiglistComponent;
  let fixture: ComponentFixture<BiglistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiglistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
