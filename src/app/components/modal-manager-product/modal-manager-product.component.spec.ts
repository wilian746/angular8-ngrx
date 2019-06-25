import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalManagerProductComponent } from './modal-manager-product.component';

describe('ModalManagerProductComponent', () => {
  let component: ModalManagerProductComponent;
  let fixture: ComponentFixture<ModalManagerProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalManagerProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalManagerProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
