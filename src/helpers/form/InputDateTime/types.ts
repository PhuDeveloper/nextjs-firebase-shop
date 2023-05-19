import { TextFieldProps } from '@mui/material';

export type InputDateTimePropsTypes = TextFieldProps & {
  control: any;
  name: string;
  readOnly?: boolean;
  placeholder?: string;
};
