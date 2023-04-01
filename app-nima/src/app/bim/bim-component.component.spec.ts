import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BimComponentComponent } from './bim-component.component';

describe('BimComponentComponent', () => {
  let component: BimComponentComponent;
  let fixture: ComponentFixture<BimComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BimComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BimComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
