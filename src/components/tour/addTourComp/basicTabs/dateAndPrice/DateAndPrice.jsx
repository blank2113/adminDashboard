import React, { useState } from "react";
import classes from "./dateAndPrice.module.css";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";

const DateAndPrice = () => {
  const [value, setValue] = React.useState(dayjs(new Date()));
  const [value2, setValue2] = React.useState(dayjs(new Date()));
  console.log(value.$y);

  return (
    <div className={classes.DateAndPrice}>
      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DemoItem label="Дата с">
            <DateCalendar
              value={value}
              sx={{
                backgroundColor: "rgba(231, 231, 231, 0.753)",
                borderRadius: "15px",
              }}
              onChange={(newValue) => setValue(newValue)}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateCalendar", "DateCalendar"]}>
          <DemoItem label="Дата по">
            <DateCalendar
              value={value2}
              sx={{
                backgroundColor: "rgba(231, 231, 231, 0.753)",
                borderRadius: "15px",
              }}
              onChange={(newValue) => setValue2(newValue)}
            />
          </DemoItem>
        </DemoContainer>
      </LocalizationProvider> */}
      <div className={classes.date}>
        <h3>Цены для рассчета группового тура</h3>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer
            components={["DatePicker"]}
            sx={{ width: "100%", display: "flex" }}
          >
            <DesktopDatePicker
              label="Дата с:"
              value={value}
              sx={{ width: "100%" }}
              onChange={(newValue) => setValue(newValue)}
            />
            <DesktopDatePicker
              label="Дата по:"
              value={value2}
              sx={{ width: "100%" }}
              onChange={(newValue) => setValue2(newValue)}
            />
          </DemoContainer>
        </LocalizationProvider>
        <div className={classes.top_price}>
          <TextField
            required
            id="outlined-required"
            label="Цена за двухместное размещение:"
            defaultValue=""
            size="small"
            sx={{ width: "100%" }}
          />
          <TextField
            required
            id="outlined-required"
            label="Цена за одноместное размещение:"
            defaultValue=""
            size="small"
            sx={{ width: "100%" }}
          />
        </div>
      </div>
      <div className={classes.mid}>
        <div className={classes.mid_item}>
          <h4>Цены для рассчета индивидуального тура</h4>
          <div className={classes.mid_item_inner}>
            <TextField
              required
              id="outlined-required"
              label="Цена (Старая):"
              defaultValue=""
              size="small"
              sx={{ width: "100%" }}
              helperText="Цена, которая показывается на всем сайте."
            />
            <TextField
              required
              id="outlined-required"
              label="Цена (Новая):"
              defaultValue=""
              size="small"
              sx={{ width: "100%" }}
              helperText="Основная цена, которая показывается на всем сайте."
            />
            <TextField
              required
              id="outlined-required"
              label="Цена тура за один день:"
              defaultValue=""
              size="small"
              sx={{ width: "100%" }}
              helperText="Цена для рассчета тура по индивидуальной дате."
            />
            <TextField
              required
              id="outlined-required"
              label="Цена тура за одноместное размещение:"
              defaultValue=""
              size="small"
              sx={{ width: "100%" }}
              helperText="Цена тура для индивидуального путешественника."
            />
          </div>
        </div>
        <div className={classes.mid_item}>
          <h4>Цена индивидуального тура для рассчета соло путешествия</h4>
          <div className={classes.mid_item_inner}>
            <TextField
              required
              id="outlined-required"
              label="Цена (Старая):"
              defaultValue=""
              size="small"
              sx={{ width: "100%" }}
              helperText="Цена для путешественника который едит один."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateAndPrice;
