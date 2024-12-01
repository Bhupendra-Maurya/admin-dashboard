import { Component, OnChanges, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleService } from '../../services/role.service';
import { Role } from '../../models/user.model';

@Component({
  selector: 'app-role-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './role-list.component.html',
})
export class RoleListComponent implements OnInit, OnChanges {
  roles: Role[] = [];

  constructor(private roleService: RoleService) {}

  ngOnInit() {
    this.loadRoles();
  }
  ngOnChanges() {
    this.loadRoles();
  }

  loadRoles() {
    this.roleService.getRoles().subscribe((roles) => {
      this.roles = roles;
    });
  }

  editRole(role: Role) {
    // To be implemented
  }

  deleteRole(id: string) {
    this.roleService.deleteRole(id).subscribe(() => {
      this.loadRoles();
    });
  }
  trackByRoleId(index: number, role: Role): string {
    return role.id;
  }
}
