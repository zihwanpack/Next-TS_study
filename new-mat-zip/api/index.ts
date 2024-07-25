import { TFormInputType, ILoginResult, IFetchPostResult } from '@/types/index';

const baseURL = 'http://localhost:3000';

const fetchSignUp = async (
  email: TFormInputType,
  password: TFormInputType
): Promise<boolean | null> => {
  try {
    const res = await fetch(`${baseURL}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const result = res.ok;
    return result;
  } catch (err) {
    console.log(err);
    return null;
  }
};

const fetchLogin = async (
  email: TFormInputType,
  password: TFormInputType
): Promise<ILoginResult> => {
  const res = await fetch(`${baseURL}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  const result = await res.json();
  return result;
};

const fetchMyPost = async (page: string): Promise<IFetchPostResult> => {
  const res = await fetch(`${baseURL}/auth/signin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      page,
    }),
  });
  const result = await res.json();
  return result;
};

export { fetchSignUp, fetchLogin, fetchMyPost };
