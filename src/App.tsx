import { useContext, lazy, Suspense } from "react";
import { ThemeContext } from "./context/theme.context";
import Navbar from "./components/navbar/Navbar.components";
import { Routes, Route } from "react-router-dom";
import CustomLinearProgress from "./components/custom-linear-progress/CustomLinearProgress.component";

const Home = lazy(() => import("./Pages/home/Homepage"));
const Companies = lazy(() => import("./Pages/companies/Companies.page"));
const AddCompany = lazy(() => import("./Pages/companies/AddCompany.page"));
const Jobs = lazy(() => import("./Pages/jobs/Jobs.page"));
const AddJob = lazy(() => import("./Pages/jobs/AddJob.page"));
const Candidates = lazy(() => import("./Pages/candidates/Candidates.page"));
const AddCandidate = lazy(() => import("./Pages/candidates/AddCandidate.page"));

const App = () => {
  const { darkMode } = useContext(ThemeContext);
  const appStyles = darkMode ? "app dark" : "app";
  return (
    <div className={appStyles}>
      <Navbar />
      <div className="wrapper">
        <Suspense fallback={<CustomLinearProgress />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/companies">
              <Route index element={<Companies />}></Route>
              <Route path="add" element={<AddCompany />} />
            </Route>
            <Route path="/jobs">
              <Route index element={<Jobs />}></Route>
              <Route path="add" element={<AddJob />} />
            </Route>
            <Route path="/candidates">
              <Route index element={<Candidates />}></Route>
              <Route path="add" element={<AddCandidate />} />
            </Route>
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default App;
