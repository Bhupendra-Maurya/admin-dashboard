import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolesPopupModalComponent } from './roles-popup-modal.component';

describe('RolesPopupModalComponent', () => {
  let component: RolesPopupModalComponent;
  let fixture: ComponentFixture<RolesPopupModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolesPopupModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolesPopupModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
