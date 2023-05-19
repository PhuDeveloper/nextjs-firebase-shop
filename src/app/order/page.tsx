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
export default function OrderPage() {
  return (
    <Paper sx={{ p: 2 }}>
      <Typography variant="h6" pb={2}>
        Quản lý đơn hàng
      </Typography>
      {/* <Button variant="outlined" sx={{ mb: 2 }}>
        Thêm sản phẩm
      </Button> */}
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
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell>Ảnh</TableCell>
              <TableCell>Giá vốn</TableCell>
              <TableCell>Giá bán</TableCell>
              <TableCell>Giảm giá</TableCell>
              <TableCell>Mô tả</TableCell>
              <TableCell>Thả tim</TableCell>
              <TableCell>Size</TableCell>
              <TableCell>Số lượng</TableCell>
              <TableCell>Danh mục</TableCell>
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
    </Paper>
  );
}
