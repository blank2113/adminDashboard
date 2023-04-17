import {
  FormHelperText,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { useGetAllCitiesQuery } from "../../../store/middleWares/citiesApi";
import classes from "./addCityComp.module.css";

const AddCityComp = () => {
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const { data = [] } = useGetAllCitiesQuery();

  return (
    <div className={classes.AddCityComp}>
      <h1>Добавление</h1>
      <form className={classes.form}>
        <TextField
          required
          id="outlined-required"
          label="Название города*:"
          defaultValue=""
          size="small"
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "100%" }}
        />
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-label">Страна</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Страны"
              value={country}
              onChange={e => setCountry(e.target.value)}
            >
              {data.slice(0, 5).map((item) => (
                <MenuItem key={item.id} value={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
          required
          id="outlined-required"
          label="Ссылка на город*:"
          defaultValue=""
          size="small"
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "100%" }}
        />
          <TextField
          required
          id="outlined-required"
          label="Title*:"
          defaultValue=""
          size="small"
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "100%" }}
        />
          <TextField
          required
          id="outlined-required"
          label="Metakeywords*:"
          defaultValue=""
          size="small"
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "100%" }}
        />
          <TextField
          required
          id="outlined-required"
          label="Metadescription*:"
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

export default AddCityComp;
