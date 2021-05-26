import { QuizIntroduction } from "./QuizIntroduction";
import { useParams } from "react-router-dom";
import { mentalHealthQuizzes } from "../quiz-data";
import { MentalHealthQuiz } from "../quiz-data.types";

export const QuizDetails = () => {
  const { quizId } = useParams();

  const quizCategory: MentalHealthQuiz | undefined = mentalHealthQuizzes.find(
    (quizCategory: MentalHealthQuiz) => quizCategory.id === quizId
  );
  return <QuizIntroduction quizCategory={quizCategory} />;
};
