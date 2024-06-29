import { useEffect, useState } from "react";
import "./companies.scss";
import httpModule from "../../helpers/http.module";
import { ICompany } from "../../types/global.typing";
import { error } from "console";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CompaniesGrid from "../../components/companies/CompaniesGrid.component";
const Companies = () => {
  //use state// manage that list
  const [companies, setCompanies] = useState<ICompany[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const redirect = useNavigate();
  //use effect fetch the data using endpoint url
  useEffect(() => {
    setLoading(true);
    httpModule
      .get<ICompany[]>("/Company/Get") //get the data
      .then((response) => {
        //response
        setCompanies(response.data); //set in usestate in companies list
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
    <div className="content companies">
      <div className="heading">
        <h2>Companies</h2>
        <Button variant="outlined" onClick={() => redirect("/companies/add")}>
          <Add />
        </Button>
      </div>
      {loading ? (
        <CircularProgress size={100} />
      ) : companies.length === 0 ? (
        <h1>No Company</h1>
      ) : (
        <CompaniesGrid data={companies} />
      )}
    </div>
  );
};

export default Companies;
