import { DateTimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import dayjs from "dayjs";
import { forwardRef, useState } from "react";
import { useController } from "react-hook-form";
import { InputDateTimePropsTypes } from "./types";
import clsx from "clsx";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

// eslint-disable-next-line react/display-name
const InputDateTime = forwardRef((props: InputDateTimePropsTypes, ref: any) => {
  const [isOpenPopup, setIsOpenPopup] = useState<boolean>(false);
  const { name, control, disabled, readOnly, placeholder, ...rest } = props;

  const {
    field,
    fieldState: { error },
  } = useController({ name: name, control: control });

  const size = rest.size || "small";
  const fullWidth = rest.fullWidth || true;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateTimePicker
        renderInput={(props: any) => {
          return (
            <TextField
              {...props}
              className={clsx({
                "is-readonly": readOnly,
                "is-disabled": disabled,
              })}
              sx={{ marginY: 0 }}
              InputLabelProps={{
                shrink: true,
              }}
              inputProps={{
                ...props.inputProps,
                placeholder: placeholder,
                value: field.value
                  ? dayjs(field.value).locale("vi").format("DD/MM/YYYY HH:mm")
                  : "",
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
        inputRef={ref ?? field.ref}
        value={field.value}
        readOnly={readOnly}
        onChange={(e: any) => {
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
});

export default InputDateTime;
