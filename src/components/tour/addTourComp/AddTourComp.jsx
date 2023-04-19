import React, { useEffect, useRef, useState } from "react";
import BasicTabs from "./basicTabs/BasicTabs";
import classes from "./addTourComp.module.css";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import TextField from "@mui/material/TextField";
import { Editor } from "@tinymce/tinymce-react";
import { Skeleton } from "@mui/material";

const AddTourComp = ({ data }) => {
  const [value, setValue] = React.useState(dayjs(new Date()));
  const [value2, setValue2] = React.useState(dayjs(new Date()));
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
    <div className={classes.AddTourComp}>
      <form>
        <div className={classes.BasicSettings}>
          <h3>Общие настройки</h3>
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
        <div className={classes.DateAndPrice}>
          <h3>Цены и Даты</h3>
          <div className={classes.date}>
            <h4>Цены для рассчета группового тура</h4>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer
                components={["DatePicker"]}
                sx={{ width: "100%", display: "flex" }}
              >
                <DesktopDatePicker
                  label="Дата с:"
                  value={value}
                  sx={{ width: "100%" }}
                  onChange={(newValue) => setValue(newValue)}
                />
                <DesktopDatePicker
                  label="Дата по:"
                  value={value2}
                  sx={{ width: "100%" }}
                  onChange={(newValue) => setValue2(newValue)}
                />
              </DemoContainer>
            </LocalizationProvider>
            <div className={classes.top_price}>
              <TextField
                required
                id="outlined-required"
                label="Цена за двухместное размещение:"
                defaultValue=""
                size="small"
                sx={{ width: "100%" }}
              />
              <TextField
                required
                id="outlined-required"
                label="Цена за одноместное размещение:"
                defaultValue=""
                size="small"
                sx={{ width: "100%" }}
              />
            </div>
          </div>
          <div className={classes.mid}>
            <div className={classes.mid_item}>
              <h4>Цены для рассчета индивидуального тура</h4>
              <div className={classes.mid_item_inner}>
                <TextField
                  required
                  id="outlined-required"
                  label="Цена (Старая):"
                  defaultValue=""
                  size="small"
                  sx={{ width: "100%" }}
                  helperText="Цена, которая показывается на всем сайте."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Цена (Новая):"
                  defaultValue=""
                  size="small"
                  sx={{ width: "100%" }}
                  helperText="Основная цена, которая показывается на всем сайте."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Цена тура за один день:"
                  defaultValue=""
                  size="small"
                  sx={{ width: "100%" }}
                  helperText="Цена для рассчета тура по индивидуальной дате."
                />
                <TextField
                  required
                  id="outlined-required"
                  label="Цена тура за одноместное размещение:"
                  defaultValue=""
                  size="small"
                  sx={{ width: "100%" }}
                  helperText="Цена тура для индивидуального путешественника."
                />
              </div>
            </div>
            <div className={classes.mid_item}>
              <h4>Цена индивидуального тура для рассчета соло путешествия</h4>
              <div className={classes.mid_item_inner}>
                <TextField
                  required
                  id="outlined-required"
                  label="Цена тура:"
                  defaultValue=""
                  size="small"
                  sx={{ width: "100%" }}
                  helperText="Цена для путешественника который едит один."
                />
              </div>
            </div>
          </div>
        </div>
        <div className={classes.Descr}>
          <h3>Описание Тура</h3>
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
          <div className={classes.selects_transports}>
            <h4>Тип транспорта:</h4>
            <FormControlLabel control={<Checkbox />} label="Самолет" />
            <FormControlLabel control={<Checkbox />} label="Поезд" />
            <FormControlLabel control={<Checkbox />} label="Легковое авто" />
            <FormControlLabel control={<Checkbox />} label="Минивен" />
            <FormControlLabel control={<Checkbox />} label="Минибас" />
            <FormControlLabel control={<Checkbox />} label="Автобус" />
          </div>

          <TextField
            id="outlined-required"
            label="Количество путешественников:"
            defaultValue=""
            size="small"
            sx={{ width: "100%", my: "20px" }}
            helperText="Укажите минимальное и максимальное количество путешественников."
          />
          <TextField
            id="outlined-required"
            label="Команда:"
            defaultValue=""
            size="small"
            sx={{ width: "100%", my: "20px" }}
            helperText="Укажите кто будет исполнителем данного тура."
          />
        </div>
        <div className={classes.image}>
          <h3>Изображение</h3>
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
      </form>
    </div>
  );
};

export default AddTourComp;
