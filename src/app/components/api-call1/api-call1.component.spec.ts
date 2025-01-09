import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiCall1Component } from './api-call1.component';

describe('ApiCall1Component', () => {
  let component: ApiCall1Component;
  let fixture: ComponentFixture<ApiCall1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiCall1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApiCall1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
