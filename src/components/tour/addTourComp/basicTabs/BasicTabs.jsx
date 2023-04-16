import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import BasicSettings from "./basicSettings/BasicSettings";
import DateAndPrice from "./dateAndPrice/DateAndPrice";
import DescriptionComp from "./descriptionComp/DescriptionComp";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          textColor="inherit"
        >
          <Tab
            sx={{ fontSize: "18px", fontWeight: 500 }}
            label="Общие настройки"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontSize: "18px", fontWeight: 500 }}
            label="Цены и даты"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontSize: "18px", fontWeight: 500 }}
            label="Описание тура"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <BasicSettings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DateAndPrice/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <DescriptionComp/>
      </TabPanel>
    </Box>
  );
}
