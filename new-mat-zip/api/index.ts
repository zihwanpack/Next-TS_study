import { cookies } from 'next/headers';

import { TFormInputType, ILoginResult, IFetchPostResult } from '@/types/index';
import { error } from 'console';

const baseURL = 'http://localhost:3000';

const fetchSignUp = async (
  email: TFormInputType,
  password: TFormInputType
): Promise<boolean> => {
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
    throw error;
  }
};

const fetchLogin = async (
  email: TFormInputType,
  password: TFormInputType
): Promise<ILoginResult> => {
  try {
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
  } catch (err) {
    console.log(err);
    throw error;
  }
};

const getMyPost = async (page: string): Promise<IFetchPostResult> => {
  try {
    const res = await fetch(`${baseURL}/posts/my`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        page,
      }),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw error;
  }
};

const createMyPost = async (data: IFetchPostResult) => {
  const {
    latitude,
    longitude,
    color,
    address,
    title,
    description,
    date,
    score,
    imageUris,
  } = data;

  const myRefreshCookie = cookies().get('myRefreshCookie')?.value;

  if (!myRefreshCookie) {
    throw new Error('쿠기가 없다!');
  }

  try {
    const res = await fetch(`${baseURL}/posts`, {
      method: 'POST',
      headers: {
        Authorization: myRefreshCookie,
        'Content-Type': 'application/json',
      },

      body: JSON.stringify({
        latitude,
        longitude,
        color,
        address,
        title,
        description,
        date,
        score,
        imageUris,
      }),
    });
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
const fetchLogout = async () => {
  try {
    const res = await fetch(`${baseURL}/auth/logout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return await res.json();
  } catch (err) {
    console.log('Logout error:', err);
    throw err;
  }
};

export { fetchSignUp, fetchLogin, createMyPost, getMyPost, fetchLogout };
