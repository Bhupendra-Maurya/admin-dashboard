import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Role, Permission } from '../../models/user.model'; // Ensure Permission type is imported
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-role-popup-modal',
  imports:[FormsModule,NgIf],
  templateUrl: './roles-popup-modal.component.html',
  styleUrls: ['./roles-popup-modal.component.css'],
})
export class RolesPopupModalComponent {
  @Input() role: Role | null = null;
  @Input() isOpen: boolean = false;
  @Output() closeModal = new EventEmitter<void>();
  @Output() saveRole = new EventEmitter<Role>();

  // Local variables
  roleName: string = '';
  rolePermissions: string = '';

  ngOnChanges() {
    if (this.role) {
      this.roleName = this.role.name;
      this.rolePermissions = this.role.permissions.map(p => p.name).join(', '); // Convert Permission[] to string
    }
  }

  close() {
    this.closeModal.emit();
  }

  save() {
    if (this.role) {
      this.role.name = this.roleName;
      // Convert string back to Permission[]
      this.role.permissions = this.rolePermissions.split(',')
        .map(pName => ({ name: pName.trim() }) as Permission);
      
      this.saveRole.emit(this.role);
    }
  }
}
