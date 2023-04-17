import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import classes from './addCountryComp.module.css'

const AddCountryComp = () => {
    const [name,setName] = useState("")
  return (
    <div className={classes.AddCountryComp}>
        <h1>Добавление</h1>
        <form className={classes.form}>
        <TextField
          required
          id="outlined-required"
          label="Название страны*:"
          defaultValue=""
          size="small"
          onChange={(e) => setName(e.target.value)}
          sx={{ width: "100%" }}
        />  
        <TextField
          required
          id="outlined-required"
          label="Ссылка на страну*:"
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
  )
}

export default AddCountryComp