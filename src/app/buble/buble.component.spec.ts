import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BubleComponent } from './buble.component';

describe('BubleComponent', () => {
  let component: BubleComponent;
  let fixture: ComponentFixture<BubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
