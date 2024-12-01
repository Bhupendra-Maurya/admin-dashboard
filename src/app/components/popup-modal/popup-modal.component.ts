import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.model';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-popup-modal',
  imports:[FormsModule,NgIf],
  templateUrl: './popup-modal.component.html',
  styleUrl: './popup-modal.component.css'
})
export class PopupModalComponent implements OnChanges{
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
