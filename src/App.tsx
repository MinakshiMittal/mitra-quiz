import "./App.css";
import {
  // GettingStarted,
  QuizListingPage,
  QuizDetails,
  DisplayQuestion,
  AnalysisPage,
} from "./Pages";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<GettingStarted />} /> */}
        <Route path="/" element={<QuizListingPage />} />
        <Route path="/quiz/:quizId/introduction" element={<QuizDetails />} />
        <Route path={`/quiz/:quizId`} element={<DisplayQuestion />} />
        <Route path="/quiz/:quizId/analysis" element={<AnalysisPage />} />
      </Routes>
    </div>
  );
}

export default App;
