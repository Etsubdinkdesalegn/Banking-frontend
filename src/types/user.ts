export interface User {
  id: number;
  phoneNumber: string;
  fullName: string;
  role: 'CUSTOMER' | 'STAFF' | 'ADMIN';
  profileImage?: string;
  permissions: Permission[];
}

export interface Permission {
  id: number;
  name: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}
