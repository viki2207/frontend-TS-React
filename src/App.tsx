import { useContext,lazy,Suspense } from "react";
import { ThemeContext } from "./context/theme.context";
import Navbar from "./components/navbar/Navbar.components";
import {Routes,Route } from "react-router-dom";
import CustomLinearProgress from "./components/custom-linear-progress/CustomLinearProgress.component";
const Home = lazy(() => import("./Pages/home/Homepage"));
const App = () => {
  const {darkMode} = useContext(ThemeContext);
  const appStyles = darkMode ? "app dark" :"app"
  return (
    <div className={appStyles}>
      <Navbar />
      <div className="wrapper">
        <Suspense fallback={<CustomLinearProgress/>}>
        <Routes>
          <Route path="/" element= {<Home/>}/>
          </Routes>
          </Suspense>
      </div>
    </div>
  )
}

export default App