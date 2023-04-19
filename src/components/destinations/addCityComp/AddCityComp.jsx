import {
  FormHelperText,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import React, { useRef, useState } from "react";
import { useAddDestinationMutation, useGetAllCitiesQuery } from "../../../store/middleWares/citiesApi";
import classes from "./addCityComp.module.css";

const AddCityComp = () => {
  const [name, setName] = useState("");
  const [addCountry] = useAddDestinationMutation();
  const [country, setCountry] = useState("");
  const { data = [] } = useGetAllCitiesQuery();
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [metakeywords, setMetakeywords] = useState("");
  const [metadescription, setMetadescription] = useState("");
  const editorRef = useRef(null);
  const [previews, setPreviews] = useState(null);
  const [file, setFile] = useState(null);

  const onSubmit = async () => {
    let data2 = new FormData();
    data2.append("parent",parseInt(country) );
    data2.append("name", name);
    data2.append("url", url);
    data2.append("photo", file);
    data2.append("description", "asdasd");
    data2.append("title", title);
    data2.append("metakeywords", metakeywords);
    data2.append("metadescription", metadescription);
    data2.append("lang", "ru");
    if (data2) {
      await addCountry(data2).then((res) => console.log(res));
      // console.log(data2.forEach(e => console.log(e)));
    }
  };
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
          onChange={(e) => setUrl(e.target.value)}
          sx={{ width: "100%" }}
        />
          <TextField
          required
          id="outlined-required"
          label="Title*:"
          defaultValue=""
          size="small"
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: "100%" }}
        />
          <TextField
          required
          id="outlined-required"
          label="Metakeywords*:"
          defaultValue=""
          size="small"
          onChange={(e) => setMetakeywords(e.target.value)}
          sx={{ width: "100%" }}
        />
          <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue=""
          init={{
              selector: "textarea.summernote",
              language_url: "./assets/plugins/TinyMCE/language/ru_RU.js",
              plugins: `print preview paste importcss searchreplace autolink autosave save 
                  directionality code visualblocks visualchars fullscreen image 
                  link media template codesample table charmap hr pagebreak nonbreaking 
                  anchor insertdatetime advlist lists wordcount textpattern noneditable 
                  help charmap quickbars emoticons`,
              menubar: "file edit view insert format tools table help",
              toolbar: `undo redo | code | bold italic underline strikethrough | 
                  fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | 
                  outdent indent |  numlist bullist | forecolor backcolor removeformat | charmap emoticons | 
                  preview print | insertfile image media link anchor`,
              visualblocks_default_state: true,
              toolbar_sticky: true,
              autosave_ask_before_unload: true,
              autosave_interval: "30s",
              autosave_prefix: "{path}{query}-{id}-",
              autosave_restore_when_empty: false,
              autosave_retention: "2m",
              image_advtab: true,
              importcss_append: true,
              image_title: true,
              automatic_uploads: true,
              file_picker_types: "image",
              images_file_types: "png,jpg,svg,webp",
              // images_upload_url: ${location.pathname + location.search}&TinyMCEuploadImage,
              height: 600,
              image_caption: true,
              quickbars_selection_toolbar:
                "bold italic | quicklink h2 h3 blockquote quickimage quicktable",
              noneditable_noneditable_class: "mceNonEditable",
              toolbar_mode: "sliding",
              contextmenu: "link image table",
              content_style:
                "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
            }}
        />
          <TextField
          required
          id="outlined-required"
          label="Metadescription*:"
          defaultValue=""
          size="small"
          onChange={(e) => setMetadescription(e.target.value)}
          sx={{ width: "100%" }}
        />
          <div className={classes.image}>
          <h3>Фото типа</h3>
          <div className={classes.img_wrapper}>
            {previews
              ? previews.map((pic) => {
                  return <img src={pic} className={classes.img1} alt="__" />;
                })
              : null}
          </div>
          <TextField
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            sx={{ width: "100%", my: "20px" }}
          />
        </div>
        <Button variant="contained" onClick={onSubmit} size="small" sx={{width: "250px"}}>Сохранить</Button>
      </form>
    </div>
  );
};

export default AddCityComp;
