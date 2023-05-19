import { TextFieldProps } from '@mui/material';

export type InputSearchPropsType = TextFieldProps & {
  control: any;
  name: string;
  id: string;
  loading?: boolean;
  menus: MenuInterface[];
  readOnly?: boolean;
};

interface MenuInterface {
  label: string;
  value: string;
}
