import { Autocomplete, TextField } from '@mui/material';
import clsx from 'clsx';
import React from 'react';
import { useController } from 'react-hook-form';
import { InputSearchPropsType } from './types';

const InputSearch = (props: InputSearchPropsType) => {
  const { control, name, menus, id, loading, placeholder, readOnly, disabled, ...rest } =
    props;

  const size = rest.size || 'small';

  const { field } = useController({ name: name, control: control });

  return (
    <Autocomplete
      freeSolo
      disableClearable
      ref={field.ref}
      onChange={(e, value) => {
        field.onChange(value ?? null);
      }}
      onBlur={(value) => field.onChange(value ?? null)}
      value={field.value}
      options={menus.map((option) => option.label)}
      getOptionLabel={(option) => option.toString()}
      renderInput={(params) => (
        <TextField
          className={clsx({
            'is-readonly': readOnly,
            'is-disabled': disabled,
          })}
          sx={{ margin: 0 }}
          placeholder={placeholder}
          key={params.id}
          {...params}
          {...rest}
          size={size}
          InputProps={{
            ...params.InputProps,
            type: 'search',
          }}
        />
      )}
    />
  );
};

export default InputSearch;
