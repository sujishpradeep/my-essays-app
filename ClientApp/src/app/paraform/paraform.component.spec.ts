import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParaformComponent } from './paraform.component';

describe('ParaformComponent', () => {
  let component: ParaformComponent;
  let fixture: ComponentFixture<ParaformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParaformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
