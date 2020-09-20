import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdenarNumerosComponent } from './ordenar-numeros.component';

describe('OrdenarNumerosComponent', () => {
  let component: OrdenarNumerosComponent;
  let fixture: ComponentFixture<OrdenarNumerosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdenarNumerosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdenarNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
