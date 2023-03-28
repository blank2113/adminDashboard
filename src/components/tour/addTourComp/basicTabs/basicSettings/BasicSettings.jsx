import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import classes from './basicSettings.module.css'

const BasicSettings = () => {
  return (
    <div className={classes.BasicSettings}>
      <TextField
        required
        id="outlined-required"
        label="Заголовок H1"
        defaultValue=""
        size="small"
        sx={{ width: "100%" }}
      />
      <TextField
        required
        id="outlined-required"
        label="Заголовок H2"
        defaultValue=""
        size="small"
        sx={{ width: "100%" }}
      />
      <TextField
        required
        id="outlined-required"
        label="Metakeywords"
        defaultValue=""
        size="small"
        sx={{ width: "100%" }}
      />
      <TextField
        required
        id="outlined-required"
        label="Metadescription"
        defaultValue=""
        size="large"
        sx={{ width: "100%" }}
      />
      <TextField
        required
        id="outlined-required"
        label="Ссылка на страницу"
        defaultValue=""
        size="small"
        sx={{ width: "100%" }}
      />
      <div className={classes.selects}>
        <FormControlLabel
          control={<Checkbox />}
          label="Показать на главной странице (В первом блоке)"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Показать на главной странице (В втором блоке)"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Показать на главной странице (В третьем блоке)"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Добавить галочку (Гарантированный тур)"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="Перенести тур в архив"
        />
      </div>
      <TextField
        id="outlined-required"
        label="Скидка на тур | Новый тур:"
        defaultValue=""
        size="small"
        sx={{ width: "100%" }}
      />
    </div>
  );
};

export default BasicSettings;
