import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useEditDestinationMutation,
  useGetOneDestinationQuery,
} from "../../../store/middleWares/citiesApi";
import classes from "./editDestinationComp.module.css";

const EditDestinationComp = () => {
  const { id } = useParams();
  const { data = [] } = useGetOneDestinationQuery(id);
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [metakeywords, setMetakeywords] = useState("");
  const [metadescription, setMetadescription] = useState("");
  const editorRef = useRef(null);
  const [previews, setPreviews] = useState(null);
  const [file, setFile] = useState(null);
  const [editDestination] = useEditDestinationMutation();
  console.log(data);

  useEffect(() => {
    if (data.id <= 5) {
      setCountry(0);
    } else {
      setCountry(data.id);
    }
    setName(data.name);
    setUrl(data.url);
    setTitle(data.title);
    setMetadescription(data.metadescription);
    setMetakeywords(data.metakeywords);
    setFile(data.photo);
    sessionStorage.setItem("destinationId", id);
  }, [id, data]);

  const onSubmit = async () => {
    let data = new FormData();
    data.append("parent", country);
    data.append("name", name);
    data.append("url", url);
    data.append("photo", file);
    data.append("description", editorRef.current.getContent());
    data.append("title", title);
    data.append("metakeywords", metakeywords);
    data.append("metadescription", metadescription);
    data.append("lang", "ru");
    if (data) {
      await editDestination(data)
        .then((res) => console.log(res))
        .catch((e) => console.log(e));
    //   console.log(data.forEach(e => console.log(e)));
    }
  };

  return (
    <div className={classes.EditDestinationComp}>
      <h1>Добавление</h1>
      {data.id ? (
        <form className={classes.form}>
          <TextField
            required
            id="outlined-required"
            label="Название города*:"
            defaultValue={data.name}
            size="small"
            onChange={(e) => setName(e.target.value)}
            sx={{ width: "100%" }}
          />
          {/* <FormControl fullWidth size="small">
          <InputLabel id="demo-simple-select-label">Страна</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Страны"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            {data.slice(0, 5).map((item) => (
              <MenuItem key={item.id} value={item.id}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl> */}
          <TextField
            required
            id="outlined-required"
            label="Ссылка на город*:"
            defaultValue={data.url}
            size="small"
            onChange={(e) => setUrl(e.target.value)}
            sx={{ width: "100%" }}
          />
          <TextField
            required
            id="outlined-required"
            label="Title*:"
            defaultValue={data.title}
            size="small"
            onChange={(e) => setTitle(e.target.value)}
            sx={{ width: "100%" }}
          />
          <TextField
            required
            id="outlined-required"
            label="Metakeywords*:"
            defaultValue={data.metakeywords}
            size="small"
            onChange={(e) => setMetakeywords(e.target.value)}
            sx={{ width: "100%" }}
          />
          <Editor
            onInit={(evt, editor) => (editorRef.current = editor)}
            initialValue={data.description}
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
            defaultValue={data.metadescription}
            size="small"
            onChange={(e) => setMetadescription(e.target.value)}
            sx={{ width: "100%" }}
          />
          <div className={classes.image}>
            <h3>Фото типа</h3>
            <div className={classes.img_wrapper}>
              {previews ? (
                previews.map((pic) => {
                  return <img src={pic} className={classes.img1} alt="__" />;
                })
              ) : (
                <img
                  src={
                    data.id > 5
                      ? `https://turi-uzbekistana.ru/images/city/${data?.photo}`
                      : `https://turi-uzbekistana.ru/images/country/${data?.photo}`
                  }
                  className={classes.img1}
                  alt="__"
                />
              )}
            </div>
            <TextField
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              sx={{ width: "100%", my: "20px" }}
            />
          </div>
          <Button
            variant="contained"
            onClick={onSubmit}
            size="small"
            sx={{ width: "250px" }}
          >
            Сохранить
          </Button>
        </form>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default EditDestinationComp;
