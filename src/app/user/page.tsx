"use client";

import {
  Button,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import CreateUserModal from "@/components/createUserModal";
export default function UserPage() {
  const [isShowCreateUser, setIsShowCreateUser] = useState<boolean>(false);

  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" pb={2}>
        Danh sách người dùng
      </Typography>
      <Button
        variant="outlined"
        sx={{ mb: 2 }}
        onClick={() => setIsShowCreateUser(true)}
      >
        Tạo mới người dùng
      </Button>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: blue[300],
                "&:last-child td, &:last-child th": {
                  border: "solid 1px black",
                },
              }}
            >
              <TableCell>Email</TableCell>
              <TableCell>Họ tên</TableCell>
              <TableCell>Avata</TableCell>
              <TableCell>Địa chỉ</TableCell>
              <TableCell>Ngày sinh</TableCell>
              <TableCell>Số điện thoại</TableCell>
              <TableCell>Chức vụ</TableCell>
              <TableCell>Khóa</TableCell>
              <TableCell>Chỉnh sửa</TableCell>
              <TableCell>Thao tác</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow
              sx={{
                "&:last-child td, &:last-child th": {
                  border: "solid 1px #C4C4C4",
                },
              }}
            >
              <TableCell>SP</TableCell>
              <TableCell>SP</TableCell>
              <TableCell>SP</TableCell>
              <TableCell>SP</TableCell>
              <TableCell>SP</TableCell>
              <TableCell>SP</TableCell>
              <TableCell>SP</TableCell>
              <TableCell>SP</TableCell>
              <TableCell>SP</TableCell>
              <TableCell
                sx={{ display: "flex", justifyContent: "space-around" }}
              >
                <IconButton>
                  <EditIcon />
                </IconButton>

                <IconButton aria-label="delete">
                  <DeleteForeverIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <CreateUserModal
        isShowCreateUser={isShowCreateUser}
        setIsShowCreateUser={setIsShowCreateUser}
      />
    </Paper>
  );
}
