import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-user-popup-modal',
  imports:[FormsModule,NgIf],
  templateUrl: './user-popup-modal.component.html',
})
export class UserPopupModalComponent implements OnChanges{
  @Input() user!: User;
  @Input() isOpen = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveUser = new EventEmitter<User>();

  ngOnChanges(): void {
      console.log(this.user)
  }
  
  close() {
    this.closeModal.emit();
  }

  onSubmit() {
    this.saveUser.emit(this.user);
  }
}
