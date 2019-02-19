import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotechartComponent } from './votechart.component';

describe('VotechartComponent', () => {
  let component: VotechartComponent;
  let fixture: ComponentFixture<VotechartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotechartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotechartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
