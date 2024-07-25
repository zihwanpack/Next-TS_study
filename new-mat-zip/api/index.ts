const baseURL = 'http://localhost:3000';

const fetchSignUp = async (
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null
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
  email: FormDataEntryValue | null,
  password: FormDataEntryValue | null
): Promise<any> => {
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
  console.log(result);
  return result;
};

export { fetchSignUp, fetchLogin };
