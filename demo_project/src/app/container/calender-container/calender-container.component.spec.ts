import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalenderContainerComponent } from './calender-container.component';

describe('CalenderContainerComponent', () => {
  let component: CalenderContainerComponent;
  let fixture: ComponentFixture<CalenderContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalenderContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalenderContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
