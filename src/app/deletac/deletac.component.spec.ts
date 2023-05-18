import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletacComponent } from './deletac.component';

describe('DeletacComponent', () => {
  let component: DeletacComponent;
  let fixture: ComponentFixture<DeletacComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletacComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
