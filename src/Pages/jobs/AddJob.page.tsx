import React, { useState, useEffect } from "react";
import "./jobs.scss";
import {
  ICompany,
  ICreateCompanyDto,
  ICreateJobDto,
} from "../../types/global.typing";
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

const levelsArray: string[] = [
  "Intern",
  "Junior",
  "MidLevel",
  "Senior",
  "TeamLead",
  "CTO",
  "Architect",
];
const AddJob = () => {
  const [job, setJob] = useState<ICreateJobDto>({
    title: "",
    level: "",
    companyId: "",
  });
  //if we not used than not navigate in another page
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const redirect = useNavigate();
  useEffect(() => {
    httpModule
      .get<ICompany[]>("/Company/Get") //get the data
      .then((response) => {
        //response
        setCompanies(response.data); //set in usestate in companies list
      }) //catch if you get any error  getting fetch the data
      .catch((error) => {
        alert("error");
        console.log(error);
      });
  }, []);
  const handleClickSaveBtn = () => {
    if (job.title === "" || job.level === "" || job.companyId === "") {
      alert("Fill all fields");
      return;
    }
    httpModule
      .post("/Company/Create", job)
      .then((response) => redirect("/jobs"))
      .catch((error) => console.log(error));
  };
  const handleClickBackBtn = () => {
    redirect("/jobs"); 
  };
  return (
    <div className="content">
      <div className="add-job"></div>
      <h2>Add New Job</h2>
      <TextField
        autoComplete="off"
        label="Job Title"
        variant="outlined"
        value={job.title}
        onChange={(e) => setJob({ ...job, title: e.target.value })}
      />

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label"> Job Level</InputLabel>
        <Select
          value={job.level}
          label="Job Level"
          onChange={(e) => setJob({ ...job, level: e.target.value })}
        >
          {levelsArray.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth>
        <InputLabel>Company</InputLabel>
        <Select
          value={job.companyId}
          label="Company"
          onChange={(e) => setJob({ ...job, companyId: e.target.value })}
        >
          {companies.map((item) => (
            <MenuItem key={item.id} value={item.id}>
              {item.name}
            </MenuItem>
          ))}
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

export default AddJob;
