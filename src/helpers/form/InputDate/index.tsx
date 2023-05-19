import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import clsx from 'clsx';
import dayjs from 'dayjs';
import { useState } from 'react';
import { useController } from 'react-hook-form';
import { InputDatePropsTypes } from './types';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

const InputDate = (props: InputDatePropsTypes) => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const { views, name, control, disabled, readOnly, placeholder, ...rest } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name: name, control: control });

  const size = rest.size || 'small';
  const fullWidth = rest.fullWidth || true;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        views={views}
        renderInput={(props) => {
          return (
            <TextField
              {...props}
              className={clsx({
                'is-readonly': readOnly,
                'is-disabled': disabled,
              })}
              sx={{ marginY: 0 }}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                ...props.inputProps,
                placeholder: placeholder,
                value: field.value
                  ? views
                    ? dayjs(field.value).locale('vi').format('MM/YYYY')
                    : dayjs(field.value).locale('vi').format('DD/MM/YYYY')
                  : '',
                onChange: () => {},
              }}
              autoComplete="off"
              disabled={disabled}
              size={size}
              fullWidth={fullWidth}
              error={error ? !!error : false}
              helperText={error ? error?.message : null}
              {...rest}
              onClick={() => {
                setIsOpenPopup(true);
              }}
            />
          );
        }}
        disabled={disabled}
        inputRef={field.ref}
        value={field.value}
        readOnly={readOnly}
        onChange={(e) => {
          field.onChange(e);
        }}
        onClose={() => {
          setIsOpenPopup(false);
        }}
        onOpen={() => {
          setIsOpenPopup(true);
        }}
        open={isOpenPopup}
      />
    </LocalizationProvider>
  );
};

export default InputDate;
