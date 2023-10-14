import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablelineComponent } from './tableline.component';

describe('TablelineComponent', () => {
  let component: TablelineComponent;
  let fixture: ComponentFixture<TablelineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablelineComponent]
    });
    fixture = TestBed.createComponent(TablelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
