export interface User {
    id: string;
    username: string;
    email: string;
    isActive: boolean;
    roles: string[];
  }
  
  export interface Role {
    id: string;
    name: string;
    permissions: Permission[];
  }
  
  export interface Permission {
    id: string;
    name: string;
    description: string;
  }