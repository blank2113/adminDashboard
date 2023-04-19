import { Button, TextField } from "@mui/material";
import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useRef, useState } from "react";
import classes from "./addHotelsComp.module.css";

const AddHotelsComp = () => {
    const [name,setName]= useState("")
    const editorRef = useRef(null);
    const [file, setFile] = useState(null);
    const [previews, setPreviews] = useState();
    const [arr]=useState([])
    
    const ddd = ()=>{
      arr.push({id: 1,name: "name"})
    }
    useEffect(()=>{
      console.log(arr);
    })

     useEffect(() => {
    if (!file) return;
    let tmp = [];
    for (let i = 0; i < file.length; i++) {
      tmp.push(URL.createObjectURL(file[i]));
    }
    const objectUrls = tmp;
    if (file) {
      setPreviews(objectUrls);
    } else {
      setPreviews(null);
    }

    for (let i = 0; i < objectUrls.length; i++) {
      return () => {
        URL.revokeObjectURL(objectUrls[i]);
      };
    }
  }, [file]);
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
          <div className={classes.image}>
            <h3>Фото типа</h3>
            <div className={classes.img_wrapper}>
              {previews  ? (
                previews.map((pic) => {
                  return <img src={pic} className={classes.img1} alt="__" />;
                })
              ) : null}
            </div>
            <TextField
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              sx={{ width: "100%", my: "20px" }}
            />
          </div>
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
          {arr.map((item,index) => <div>
          <p>{item.id}</p>
          <input type="text" onChange={e => arr[index].name=e.target.value}/>
          </div>)}
          <Button variant="contained" onClick={ddd} size="small" >asd</Button>
        <Button variant="contained" size="small" sx={{width: "250px"}}>Сохранить</Button>
      </form>
    </div>
  );
};

export default AddHotelsComp;
