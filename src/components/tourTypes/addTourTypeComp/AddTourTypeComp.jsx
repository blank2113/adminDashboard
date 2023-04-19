import { Button, TextField } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";
import { useAddTourTypeMutation } from "../../../store/middleWares/mainApi";
import classes from "./addTourTypeComp.module.css";
import { useForm } from "react-hook-form";

const AddTourTypeComp = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState(false);
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [url, setUrl] = useState("");
  const [title, setTitle] = useState("");
  const [metakeywords, setMetakeywords] = useState("");
  const [metadescription, setMetadescription] = useState("");
  const [sorting, setSorting] = useState(0);
  const [previews, setPreviews] = useState();
  const [addTourType] = useAddTourTypeMutation();
  const editorRef = useRef(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  useEffect(() => {
    if (!file) return;
    let tmp = [];
    for (let i = 0; i < file.length; i++) {
      tmp.push(URL.createObjectURL(file[i]));
    }
    const objectUrls = tmp;
    if (file) {
      setPreviews(objectUrls);
      setStatus(true);
    } else {
      setPreviews(false);
      setStatus(false);
    }

    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [file]);

  const onSubmit = async () => {
    let data = new FormData();
    data.append("parent", 0);
    data.append("name", name);
    data.append("type", type);
    data.append("url", url);
    data.append("photo", file);
    data.append("description", editorRef.current.getContent());
    data.append("title", title);
    data.append("metakeywords", metakeywords);
    data.append("metadescription", metadescription);
    data.append("sorting", sorting);
    if (data) {
      await addTourType(data).then((res) => console.log(res));
    }
    reset();
  };
  return (
    <div className={classes.AddTourTypeComp}>
      <h1>Добавление</h1>
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
          label="Ссылка на тип"
          defaultValue=""
          size="small"
          onChange={(e) => setType(e.target.value)}
          sx={{ width: "100%" }}
        />
        <TextField
          required
          id="outlined-required"
          label="url"
          defaultValue=""
          size="small"
          onChange={(e) => setUrl(e.target.value)}
          sx={{ width: "100%" }}
        />
        <TextField
          required
          id="outlined-required"
          label="title"
          defaultValue=""
          size="small"
          onChange={(e) => setTitle(e.target.value)}
          sx={{ width: "100%" }}
        />
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
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
          label="Metakeywords"
          defaultValue=""
          size="small"
          onChange={(e) => setMetakeywords(e.target.value)}
          sx={{ width: "100%" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Metadescription"
          defaultValue=""
          size="small"
          onChange={(e) => setMetadescription(e.target.value)}
          sx={{ width: "100%" }}
        />
        <div className={classes.image}>
          <h3>Фото типа</h3>
          <div className={classes.img_wrapper}>
            {previews || status
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
        <div>
          <Button
            size="medium"
            variant="contained"
            onClick={onSubmit}
            sx={{ color: "#000" }}
          >
            Сохранить изменения
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AddTourTypeComp;
