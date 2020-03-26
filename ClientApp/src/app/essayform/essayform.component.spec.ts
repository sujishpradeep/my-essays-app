import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EssayformComponent } from './essayform.component';

describe('EssayformComponent', () => {
  let component: EssayformComponent;
  let fixture: ComponentFixture<EssayformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EssayformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EssayformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
