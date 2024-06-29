import React, { useState } from "react";
import "./companies.scss";
import { ICreateCompanyDto } from "../../types/global.typing";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { redirect, useNavigate } from "react-router-dom";
import httpModule from "../../helpers/http.module";

const AddCompany = () => {
  const [company, setCompany] = useState<ICreateCompanyDto>({
    name: "",
    size: "",
  });
  //if we not used than not navigate in another page
  const redirect = useNavigate();
  const handleClickSaveBtn = () => {
    if (company.name === "" || company.size === "") {
      alert("Fill all fields");
      return;
    }
    httpModule
      .post("/Company/Create", company)
      .then((response) => redirect("/companies"))
      .catch((error) => console.log(error));
  };
  const handleClickBackBtn = () => {
    alert("sd");
    redirect("/companies");
  };
  return (
    <div className="content">
      <div className="add-company"></div>
      <h2>Add New Company</h2>
      <TextField
        autoComplete="off"
        label="Company Name"
        variant="outlined"
        value={company.name}
        onChange={(e) => setCompany({ ...company, name: e.target.value })}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> Company Size</InputLabel>
        <Select
          value={company.size}
          label="Company Size"
          onChange={(e) => setCompany({ ...company, size: e.target.value })}
        >
          <MenuItem value="Small">Small</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Large">Large</MenuItem>
        </Select>
      </FormControl>
      <div className="btns">
        <Button variant="outlined" color="primary" onClick={handleClickSaveBtn}>
          Save
        </Button>
        <Button variant="outlined" color="primary" onClick={handleClickBackBtn}>
          Back
        </Button>
      </div>
    </div>
  );
};

export default AddCompany;
