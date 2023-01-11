import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTaskPageComponent } from './form-task-page.component';

describe('FormTaskPageComponent', () => {
  let component: FormTaskPageComponent;
  let fixture: ComponentFixture<FormTaskPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormTaskPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTaskPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
