import { TextFieldProps } from '@mui/material';

export type InputCheckBoxsPropsTypes = TextFieldProps & {
  placeholder?: string;
  name: string;
  control: any;
  id: string;
  limitTags?: number;
  listData: {
    id: string;
    content: string;
  }[];
};
