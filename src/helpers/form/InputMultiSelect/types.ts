import { SelectProps } from '@mui/material';

export type InputMultiSelectPropsTypes = SelectProps & {
  name: string;
  control: any;
  menus: MenuInterface[];
  width?: string;
  placeholder?: string;
  multiple?: boolean;
  currValue?: string[];
};

interface MenuInterface {
  value: string | number;
  content: string;
}
