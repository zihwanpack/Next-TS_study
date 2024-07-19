import { ISignUpResponse } from '@/types';

const baseURL = 'http://localhost:3000';

const fetchSignUp = async (
  email: string,
  password: string
): Promise<ISignUpResponse | null> => {
  try {
    const res = await fetch(`${baseURL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    const result: ISignUpResponse = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const fetchLogin = async (
  emailData: string,
  passwordData: string
): Promise<any> => {
  const res = await fetch(`${baseURL}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: emailData,
      password: passwordData,
    }),
  });
  const result = await res.json();
  return result;
};

export { fetchSignUp, fetchLogin };
