export type TLoginResponse = {
  success: boolean;
  message: string;
  result: {
    id: number;
    name: string;
    email: string;
    phone: string;
    email_verified_at: null;
    created_at: string;
    updated_at: string;
  };
  token: string;
  errors: any[];
  status: number;
};
