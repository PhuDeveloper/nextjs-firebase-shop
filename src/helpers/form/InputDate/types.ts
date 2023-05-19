import { TextFieldProps } from '@mui/material';

export type InputDatePropsTypes = TextFieldProps & {
  control: any;
  name: string;
  readOnly?: boolean;
  placeholder?: string;
  views?: any;
};
