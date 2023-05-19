import { Autocomplete, Box, CircularProgress, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useController } from 'react-hook-form';
import { InputComboBoxPropsType } from './types';
import clsx from 'clsx';

const InputComboBox = (props: InputComboBoxPropsType) => {
  const {
    control,
    name,
    menus,
    id,
    loading,
    placeholder,
    readOnly,
    disabled,
    width,
    onClickLabel,
    freeSolo,
    ...rest
  } = props;

  const size = rest.size || 'small';

  const {
    field,
    fieldState: { error },
  } = useController({ name: name, control: control });
  const [focusedInput, setFocusedInput] = useState('');

  const handleFocus = () => {
    setFocusedInput(name);
  };
  return (
    <Autocomplete
      freeSolo={freeSolo}
      onFocus={handleFocus}
      disablePortal
      options={menus}
      id={id}
      key={field.value?.value}
      onChange={(e: React.SyntheticEvent<Element, Event>, value) => {
        field.onChange(value ?? null);
      }}
      isOptionEqualToValue={(option, value) => {
        return option.value === value?.value;
      }}
      getOptionLabel={(option) => {
        const label = option?.label;
        const labelItem = menus.find((item) => item.value === option.value);
        return label && label !== '' ? label : labelItem?.label ?? '';
      }}
      renderOption={(props, option) => {
        if (onClickLabel !== undefined) {
          return (
            <Box
              component="span"
              onClick={() => onClickLabel(option.value)}
              key={option.value}
              width={width}
            >
              <Box component="li" {...props}>
                {option.label}
              </Box>
            </Box>
          );
        }

        return (
          <Box key={option.value}>
            <Box component="li" {...props}>
              {option.label}
            </Box>
          </Box>
        );
      }}
      value={field.value}
      loading={loading}
      // handleHomeEndKeys
      readOnly={readOnly}
      renderInput={(params) => {
        return (
          <TextField
            autoFocus={focusedInput === name}
            key={params.id}
            className={clsx({
              'is-readonly': readOnly,
              'is-disabled': disabled,
            })}
            sx={{ marginY: 0 }}
            inputRef={field.ref}
            onBlur={field.onBlur}
            error={error ? !!error : false}
            helperText={error ? error.message : null}
            {...params}
            {...rest}
            size={size}
            placeholder={placeholder}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} sx={{ mr: 4 }} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            }}
          />
        );
      }}
    />
  );
};

export default InputComboBox;
