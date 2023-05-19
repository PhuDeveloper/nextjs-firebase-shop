import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { CreateModalProps } from "./types";
import { useForm } from "react-hook-form";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import InputText from "@/helpers/form/InputText";
import InputDate from "@/helpers/form/InputDate";
import UploadFile from "@/helpers/form/UploadFile";
export default function CreateUserModal(props: CreateModalProps) {
  const { isShowCreateUser, setIsShowCreateUser } = props;
  const { handleSubmit, control } = useForm<any>({});

  const handleClose = () => {
    setIsShowCreateUser(false);
  };

  const onSubmit = (value: any) => {
    console.log("value", value);
  };

  const handleSubmitAvatar = (file: any, path: any) => {
    console.log("file", file);
    console.log("path", path);
  };

  return (
    <Dialog open={isShowCreateUser} onClose={handleClose}>
      <DialogTitle>Tạo người dùng</DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {" "}
              <Typography>Họ và tên</Typography>
              <InputText
                control={control}
                id="fullName"
                name="fullName"
                fullWidth
                placeholder="Nhập họ và tên"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Địa chỉ email</Typography>
              <InputText
                control={control}
                id="emailAdress"
                name="emailAdress"
                fullWidth
                placeholder="Nhập địa chỉ email"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Tên đăng nhập</Typography>
              <InputText
                control={control}
                id="accountName"
                name="accountName"
                fullWidth
                placeholder="Nhập tên đăng nhập"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Mật khẩu</Typography>
              <InputText
                control={control}
                id="passWord"
                name="passWord"
                fullWidth
                placeholder="Nhâp mật khẩu"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Số điện thoại</Typography>
              <InputText
                control={control}
                id="phone"
                name="phone"
                fullWidth
                placeholder="Nhập số điện thoại"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography>Địa chỉ</Typography>
              <InputText
                control={control}
                id="address"
                name="address"
                fullWidth
                placeholder="Nhập địa chỉ"
              />
            </Grid>
            <Grid item xs={6}>
              {/* <InputText
            control={control}
              id="birthDay"
              fullWidth
              
            /> */}
              <Typography>Ngày sinh</Typography>
              <InputDate
                control={control}
                name="birthDay"
                placeholder="Chọn ngày sinh"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography>Khóa người dùng</Typography>
              <InputText control={control} id="lock" name="lock" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Typography>Chức vụ</Typography>
              <InputText control={control} id="role" name="role" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Typography>Avata</Typography>
              <UploadFile
                isLoading={false}
                onSubmit={handleSubmitAvatar}
                text="Tải lên hình ảnh"
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type="submit">Tạo</Button>
          <Button onClick={handleClose}>Hủy</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
