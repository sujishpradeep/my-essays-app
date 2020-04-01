import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoeditorComponent } from './kendoeditor.component';

describe('KendoeditorComponent', () => {
  let component: KendoeditorComponent;
  let fixture: ComponentFixture<KendoeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KendoeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KendoeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
