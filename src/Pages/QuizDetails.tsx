import { QuizIntroduction } from "./QuizIntroduction";
import { useParams } from "react-router-dom";
import { Quiz } from "../quiz-data.types";
import { useQuiz } from "../Context/QuizProvider/QuizProvider";

export const QuizDetails = () => {
  const { quizId } = useParams();
  const {
    state: { quizzes },
  } = useQuiz();

  const quizCategory: Quiz | undefined = quizzes.find(
    (quizCategory: Quiz) => quizCategory._id === quizId
  );
  return <QuizIntroduction quizCategory={quizCategory} />;
};
