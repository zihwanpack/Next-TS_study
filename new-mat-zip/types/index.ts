import { UseFormRegister } from 'react-hook-form';

interface IFormValues {
  email: string;
  password: string;
}

interface IInputProps {
  title: string;
  register: ReturnType<UseFormRegister<IFormValues>>;
}

interface ISignUpResponse {
  success: boolean;
  message: string;
  token: string;
}

export type { IFormValues, IInputProps, ISignUpResponse };
