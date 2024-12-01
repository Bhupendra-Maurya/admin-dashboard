import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPopupModalComponent } from './user-popup-modal.component';

describe('UserPopupModalComponent', () => {
  let component: UserPopupModalComponent;
  let fixture: ComponentFixture<UserPopupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserPopupModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
