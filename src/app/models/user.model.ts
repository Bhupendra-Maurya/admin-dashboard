export interface User {
    id: string;
    username: string;
    email: string;
    status: string;
    roles: any[];
    permissions: any[];
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