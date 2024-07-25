import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';

type TFormInputType = FormDataEntryValue | null;

interface IFormValues {
  email: TFormInputType;
  password: TFormInputType;
}

interface IInputProps {
  title: string;
}

interface IModalBackdropProps {
  children: React.ReactNode;
}

interface IModalProps {
  data: string;
}

interface IInputBoxProps extends IInputProps {
  type: string;
}

interface ILoginResult {
  refreshToken: string;
  accessToken: string;
}

type TAuthResult = null | boolean | ILoginResult;

interface IHeaderLink {
  href: string;
  text: string;
  isVisible: RequestCookie | boolean | undefined;
}

interface IFetchPostResult {
  latitude: string;
  longitude: string;
  color: string;
  address: string;
  title: string;
  description: string;
  date: string;
  score: number;
  imageUris: string;
}

export type {
  TFormInputType,
  IFormValues,
  IHeaderLink,
  IInputProps,
  IModalBackdropProps,
  IModalProps,
  IInputBoxProps,
  TAuthResult,
  ILoginResult,
  IFetchPostResult,
};
