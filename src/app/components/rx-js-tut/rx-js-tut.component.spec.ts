import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsTutComponent } from './rx-js-tut.component';

describe('RxJsTutComponent', () => {
  let component: RxJsTutComponent;
  let fixture: ComponentFixture<RxJsTutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsTutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxJsTutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
