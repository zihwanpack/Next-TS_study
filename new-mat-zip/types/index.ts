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

export type { IFormValues, IInputProps, TModalBackdropProps };
