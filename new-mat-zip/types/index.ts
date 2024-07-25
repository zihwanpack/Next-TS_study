interface IFormValues {
  email: string;
  password: string;
}

interface IInputProps {
  title: string;
}

type TModalBackdropProps = {
  children: React.ReactNode;
};

type TModalProps = {
  data: string;
};

type TInputBox = {
  title: string;
  type: string;
};
export type {
  IFormValues,
  IInputProps,
  TModalBackdropProps,
  TModalProps,
  TInputBox,
};
