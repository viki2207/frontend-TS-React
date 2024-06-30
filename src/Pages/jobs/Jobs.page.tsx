import { useEffect, useState } from "react";
import "./jobs.scss";
import httpModule from "../../helpers/http.module";
import { IJob } from "../../types/global.typing";
import { error } from "console";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import JobsGrid from "../../components/jobs/JobsGrid.component";
//import CompaniesGrid from "../../components/companies/CompaniesGrid.component";
const Jobs = () => {
  //use state// manage that list
  const [jobs, setJobs] = useState<IJob[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const redirect = useNavigate();
  //use effect fetch the data using endpoint url
  useEffect(() => {
    setLoading(true);
    httpModule
      .get<IJob[]>("/Job/Get") //get the data
      .then((response) => {
        //response
        setJobs(response.data); //set in usestate in companies list
        setLoading(false); // set the loading false beacause we getting our data
      }) //catch if you get any error  getting fetch the data
      .catch((error) => {
        alert("error");
        console.log(error);
        setLoading(false);
      });
  }, []);
  // console.log(companies);
  return (
    <div className="content jobs">
      <div className="heading">
        <h2>Jobs</h2>
        <Button variant="outlined" onClick={() => redirect("/jobs/add")}>
          <Add />
        </Button>
      </div>
      {loading ? (
        <CircularProgress size={100} />
      ) : jobs.length === 0 ? (
        <h1>No Jobs</h1>
      ) : (
        <JobsGrid data={jobs} />
      )}
    </div>
  );
};

export default Jobs;
