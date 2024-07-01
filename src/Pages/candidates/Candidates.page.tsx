import { useEffect, useState } from "react";
import "./candidates.scss";
import httpModule from "../../helpers/http.module";
import { ICandidate } from "../../types/global.typing";
import { error } from "console";
import { Button, CircularProgress } from "@mui/material";
import { Add } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import CandidatesGrid from "../../components/candidates/CandidatesGrid.component";
//import CompaniesGrid from "../../components/companies/CompaniesGrid.component";
const Candidates = () => {
  //use state// manage that list
  const [candidates, setCandidates] = useState<ICandidate[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const redirect = useNavigate();
  //use effect fetch the data using endpoint url
  useEffect(() => {
    setLoading(true);
    httpModule
      .get<ICandidate[]>("/Candidate/Get") //get the data
      .then((response) => {
        //response
        setCandidates(response.data); //set in usestate in companies list
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
    <div className="content candidates">
      <div className="heading">
        <h2>Candidates</h2>
        <Button variant="outlined" onClick={() => redirect("/candidates/add")}>
          <Add />
        </Button>
      </div>
      {loading ? (
        <CircularProgress size={100} />
      ) : candidates.length === 0 ? (
        <h1>No Candidate</h1>
      ) : (
        <CandidatesGrid data={candidates} />
      )}
    </div>
  );
};

export default Candidates;
