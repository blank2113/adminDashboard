import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import classes from "./addHotelsComp.module.css";

const AddHotelsComp = () => {
    const [name,setName]= useState("")
  return (
    <div className={classes.AddHotelsComp}>
      <h1>Добавить</h1>
      <form className={classes.form}>
      <TextField
          required
          id="outlined-required"
          label="Название"
          defaultValue=""
          size="small"
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "100%" }}
        />
      <TextField
          required
          id="outlined-required"
          label="Заголовок"
          defaultValue=""
          size="small"
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "100%" }}
        />
      <TextField
          required
          id="outlined-required"
          label="Metakeywords"
          defaultValue=""
          size="small"
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "100%" }}
        />
      <TextField
          required
          id="outlined-required"
          label="Metadescription"
          defaultValue=""
          size="small"
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "100%" }}
        />
      <TextField
          required
          id="outlined-required"
          label="Сслыка на гостницу"
          defaultValue=""
          size="small"
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "100%" }}
        />
      <TextField
          required
          id="outlined-required"
          label="Рейтинг гостницы"
          defaultValue=""
          size="small"
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "100%" }}
        />
        <Button variant="contained" size="small" sx={{width: "250px"}}>Сохранить</Button>
      </form>
    </div>
  );
};

export default AddHotelsComp;
