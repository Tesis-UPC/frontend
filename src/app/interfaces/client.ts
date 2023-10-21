export interface ClientRegister{
  email:string;
  firstName: string;
  lastName: string;
  address: string;
  password: string;
}

export interface ClientLogin{
  email:string;
  password: string;
}
