"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useState } from "react";
import {
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHouse,
  faProcedures,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const pages = ["Products", "Tablet", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

export default function HeaderComponents() {
  const drawerWidth = 290;
  const [isOpenNav, setIsOpenNav] = useState<boolean>(false);
  const [isOpenInfoUser, setIsOpenInfoUser] = useState<boolean>(false);

  const handleOpenNavMenu = () => {
    setIsOpenNav(true);
  };
  const handleOpenUserMenu = () => {
    setIsOpenInfoUser(true);
  };

  const handleCloseNavMenu = () => {
    setIsOpenNav(false);
  };

  const handleCloseUserMenu = () => {
    setIsOpenInfoUser(false);
  };

  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <Link
                  href="/"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ListItemIcon sx={{ fontSize: "20px" }}>
                    <FontAwesomeIcon icon={faHouse} />
                  </ListItemIcon>
                  <ListItemText primary="Trang chủ" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Link
                  href="/user"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ListItemIcon sx={{ fontSize: "20px" }}>
                    <FontAwesomeIcon icon={faUser} />
                  </ListItemIcon>
                  <ListItemText primary="Quản lý người dùng" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Link
                  href="/products"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ListItemIcon sx={{ fontSize: "20px" }}>
                    <FontAwesomeIcon icon={faProcedures} />
                  </ListItemIcon>
                  <ListItemText primary="Quản lý sản phẩm" />
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <Link
                  href="/order"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <ListItemIcon sx={{ fontSize: "30px" }}>
                    <FontAwesomeIcon icon={faBars} />
                  </ListItemIcon>
                  <ListItemText primary="Quản lý đơn hàng" />
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
          {/* <Divider /> */}
        </Box>
      </Drawer>
    </>
  );
}
