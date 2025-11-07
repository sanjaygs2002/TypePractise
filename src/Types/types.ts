// This concept called module export here and then import wherever to access this interface.

export interface LoginForm {
  email: string;
  password: string;
}

export interface User {
  id: number;

   username: string;
  email: string;
}


export interface CheckoutFormData {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  cardNumber: string;
}

