import { Button, TextField } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";
import classes from "./addTourTypeComp.module.css";

const AddTourTypeComp = () => {
  const [file, setFile] = useState();
  const [status, setStatus] = useState(false);
  const [previews, setPreviews] = useState();
  const editorRef = useRef(null);
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
          sx={{ width: "100%" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Ссылка на тип"
          defaultValue=""
          size="small"
          sx={{ width: "100%" }}
        />
        <Editor
          onInit={(evt, editor) => (editorRef.current = editor)}
          initialValue="<p>This is the initial content of the editor.</p>"
          init={{
            height: 500,
            menubar: true,
            plugins: [
              "advlist autolink lists link image charmap print preview anchor",
              "searchreplace visualblocks code fullscreen",
              "insertdatetime media table paste code help wordcount",
            ],
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
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
          sx={{ width: "100%" }}
        />
        <TextField
          required
          id="outlined-required"
          label="Metadescription"
          defaultValue=""
          size="small"
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
            onChange={(e) => setFile(e.target.files)}
            sx={{ width: "100%", my: "20px" }}
          />
        </div>
        <div>
        <Button size="medium" variant="contained" sx={{color: "#000"}}>Сохранить изменения</Button>

        </div>
      </form>
    </div>
  );
};

export default AddTourTypeComp;
