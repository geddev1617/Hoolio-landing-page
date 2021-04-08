import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HooliopageComponent } from './hooliopage.component';

describe('HooliopageComponent', () => {
  let component: HooliopageComponent;
  let fixture: ComponentFixture<HooliopageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HooliopageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HooliopageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
