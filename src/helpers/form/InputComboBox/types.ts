import { TextFieldProps } from '@mui/material';

export type InputComboBoxPropsType = TextFieldProps & {
  control: any;
  name: string;
  id: string;
  loading?: boolean;
  width?: number | string;
  menus: MenuInterface[];
  onClickLabel?: (val: string) => void;
  readOnly?: boolean;
  freeSolo?: boolean;
};

export interface MenuInterface {
  label: string;
  value: string;
}
