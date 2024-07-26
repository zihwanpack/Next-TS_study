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
  isVisible: string | undefined | boolean;
}

interface IFetchPostResult {
  latitude: TFormInputType;
  longitude: TFormInputType;
  color: TFormInputType;
  address: TFormInputType;
  title: TFormInputType;
  description: TFormInputType;
  date: TFormInputType;
  score: number | null;
  imageUris: TFormInputType[] | null;
}

interface ILabelInputProps {
  label: string;
  name: string;
  placeholder: string;
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
  ILabelInputProps,
};
