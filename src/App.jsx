import Title from "./components/Title";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./css/index.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSurvey from "./components/survey/MainSurvey";
import UserTable from "./components/UserTable";
import NewLocationTable from "./components/NewLocationTable";
import ResultsTable from "./components/ResultsTable";
import Calendar from "./components/Calendar/EventCalendar";
import Success from "./components/survey/Success";
import StepContextProvider from "./components/survey/StepContextProvider.jsx";

function App() {
  return (
    <>
      <Header />
      <Title />
      <BrowserRouter>
        <Routes>
          <Route element={<StepContextProvider />}>
            <Route path="/" element={<MainSurvey />} />
          </Route>
          <Route path="/locations" element={<NewLocationTable />} />
          <Route path="/users" element={<UserTable />} />
          <Route path="/appointments" element={<Calendar />} />
          <Route path="/results" element={<ResultsTable />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
