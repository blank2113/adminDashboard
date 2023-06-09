import { Button, TextField } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import {
  useEditTourTypeMutation,
  useGetTourTypesOneQuery,
} from "../../../store/middleWares/mainApi";
import classes from "./reviewComponent.module.css";

const ReviewComponent = () => {
  const { id } = useParams();
  const { data = [] } = useGetTourTypesOneQuery(id);
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
  const editorRef = useRef(null);
  const [editTourType] = useEditTourTypeMutation();

  useEffect(() => {
    setName(data.name);
    setType(data.type);
    setUrl(data.url);
    setTitle(data.title);
    setMetadescription(data.metadescription);
    setMetakeywords(data.metakeywords);
    setFile(data.photo);
    sessionStorage.setItem("tId", id);
  }, [id, data]);

  // useEffect(() => {
  //   if (!file) return;
  //   let tmp = [];
  //   for (let i = 0; i < file.length; i++) {
  //     tmp.push(URL.createObjectURL(file[i]));
  //   }
  //   const objectUrls = tmp;
  //   if (file) {
  //     setPreviews(objectUrls);
  //     setStatus(true);
  //   } else {
  //     setPreviews(false);
  //     setStatus(false);
  //   }

  //   for (let i = 0; i < objectUrls.length; i++) {
  //     return () => {
  //       URL.revokeObjectURL(objectUrls[i]);
  //     };
  //   }
  // }, [file]);

  const onSubmit = async () => {
    let data2 = new FormData();
    data2.append("parent", 0);
    data2.append("name", name);
    data2.append("type", type);
    data2.append("url", url);
    data2.append("photo", file);
    data2.append("description", editorRef.current.getContent());
    data2.append("title", title);
    data2.append("metakeywords", metakeywords);
    data2.append("metadescription", metadescription);
    data2.append("sorting", null);
    data2.append("created_at", null);
    data2.append("updated_at", null);
    if (data2) {
      await editTourType(data2).then((res) => console.log(res));
    }
  };

  return (
    <div className={classes.ReviewComponent}>
      <h1>Редактирование</h1>
      {data.id ? (
        <form className={classes.form}>
          <TextField
            required
            id="outlined-required"
            label="Название"
            defaultValue={data.name}
            size="small"
            onChange={(e) => setName(e.target.value)}
            sx={{ width: "100%" }}
          />
          <TextField
            required
            id="outlined-required"
            label="Ссылка на тип"
            defaultValue={data.type}
            onChange={(e) => setType(e.target.value)}
            size="small"
            sx={{ width: "100%" }}
          />
          <TextField
            required
            label="url"
            defaultValue={data.url}
            size="small"
            onChange={(e) => setUrl(e.target.value)}
            sx={{ width: "100%" }}
          />
          <TextField
            required
            label="title"
            defaultValue={data.title}
            size="small"
            onChange={(e) => setTitle(e.target.value)}
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
            label="Metakeywords"
            defaultValue={data.metakeywords}
            onChange={(e) => setMetakeywords(e.target.value)}
            size="small"
            sx={{ width: "100%" }}
          />
          <TextField
            required
            id="outlined-required"
            label="Metadescription"
            defaultValue={data.metadescription}
            onChange={(e) => setMetadescription(e.target.value)}
            size="small"
            sx={{ width: "100%" }}
          />
          <div className={classes.image}>
            <h3>Фото типа</h3>
            <div className={classes.img_wrapper}>
              {previews || status ? (
                previews.map((pic) => {
                  return <img src={pic} className={classes.img1} alt="__" />;
                })
              ) : (
                <img
                  src={`https://turi-uzbekistana.ru/images/tourtypes/${data?.photo}`}
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
          <div>
            <Button
              size="medium"
              onClick={onSubmit}
              variant="contained"
              sx={{ color: "#000" }}
            >
              Сохранить изменения
            </Button>
          </div>
        </form>
      ) : (
        <div>Looding..</div>
      )}
    </div>
  );
};

export default ReviewComponent;
