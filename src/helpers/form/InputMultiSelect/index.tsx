import {
  Checkbox,
  FormControl,
  FormHelperText,
  ListItemText,
  MenuItem,
  OutlinedInput,
  Select,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useController } from 'react-hook-form';
import { InputMultiSelectPropsTypes } from './types';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const InputMultiSelect = (props: InputMultiSelectPropsTypes) => {
  const { value, name, control, menus, width, placeholder, currValue, ...rest } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name: name, control: control });

  const size = rest.size || 'small';

  const hasError = !!error && !rest.readOnly;
  const errorMessage = error?.message;

  return (
    <FormControl sx={{ width: '100%', m: 0 }}>
      <Select
        multiple
        size={size}
        name={field.name}
        inputRef={field.ref}
        onBlur={field.onBlur}
        value={field.value}
        displayEmpty
        onChange={(e) => {
          const newItem = e?.target?.value?.pop();
          const newItemIndex = menus.findIndex(
            (item) => item.value.toString() === newItem,
          );

          const newItemFormat = {
            value: newItem,
            content: newItemIndex > -1 ? menus[newItemIndex].content : '',
          };

          let newValue = field.value;

          if (
            field.value.findIndex((item: any) => item.value === newItemFormat.value) > -1
          ) {
            // remove item
            newValue = field.value.filter(
              (item: any) => item['value'] !== newItemFormat.value,
            );
          } else {
            // add item
            newValue = [...newValue, newItemFormat];
          }

          field.onChange(newValue);
        }}
        renderValue={(selected) => {
          if (selected?.length === 0) {
            return <Box sx={{ color: '#888888' }}>{placeholder}</Box>;
          }

          const selectedValue = selected?.map((value: any) => {
            return value['content'];
          });
          return selectedValue?.join(', ');
        }}
        input={<OutlinedInput />}
        MenuProps={MenuProps}
        {...rest}
      >
        {menus.map((item, key) => (
          <MenuItem key={key} value={item.value}>
            <Checkbox
              checked={
                field?.value?.findIndex(
                  (checkItem: any) => checkItem['value'] === item.value,
                ) > -1
              }
            />
            <ListItemText primary={item.content} />
          </MenuItem>
        ))}
      </Select>

      {hasError && <FormHelperText>{errorMessage}</FormHelperText>}
    </FormControl>
  );
};

export default InputMultiSelect;
