import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { TextField, Autocomplete } from '@mui/material';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useController } from 'react-hook-form';
import { InputCheckBoxsPropsTypes } from './types';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function InputMultiCheckBox(props: InputCheckBoxsPropsTypes) {
  const { name, control, listData, id, placeholder, limitTags, ...rest } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name: name, control: control });

  const size = rest.size || 'small';
  return (
    <Autocomplete
      onChange={(e: React.SyntheticEvent<Element, Event>, value) => {
        field.onChange(value);
      }}
      multiple
      limitTags={limitTags ? limitTags : 1}
      id={id}
      value={field.value}
      onBlur={field.onBlur}
      options={listData}
      isOptionEqualToValue={(option, value) => {
        return option.id === value.id;
      }}
      disableCloseOnSelect
      getOptionLabel={(option) => option.content}
      renderOption={(props, option, { selected }) => {
        return (
          <li {...props}>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option.content}
          </li>
        );
      }}
      renderInput={(params) => {
        return (
          <TextField
            sx={{
              marginBottom: 0,
              marginTop: 0,
              paddingTop: 0,
              paddingBottom: 0,
            }}
            margin="dense"
            {...params}
            {...rest}
            size={size}
            placeholder={placeholder}
            error={error ? !!error : false}
            helperText={error ? error.message : null}
            className="rat-input-checkbox-list"
            name={field.name}
            inputRef={field.ref}
          />
        );
      }}
    />
  );
}
