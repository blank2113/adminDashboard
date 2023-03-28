import React from "react";
import classes from "./header.module.css";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <header className={classes.Header}>
      <div className={classes.inner}>
        <h1>Админ-панель</h1>
        <div className={classes.user}>
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Настройки</MenuItem>
            <MenuItem onClick={handleClose}>Выйти</MenuItem>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
