import { useParams } from "react-router-dom";
import { mentalHealthQuizzes } from "../quiz-data";
import { QuizQuestion, MentalHealthQuiz } from "../quiz-data.types";
import { QuestionCard } from "../Components";
import { useQuiz } from "../Context/quiz-context";
import { useEffect } from "react";

export const DisplayQuestion = () => {
  const { quizId } = useParams();
  const { currentQuestionNumber, totalScore } = useQuiz();

  const quizQuestions: QuizQuestion[] | undefined = mentalHealthQuizzes.find(
    (quizCategory: MentalHealthQuiz) => quizCategory.id === quizId
  )?.questions;

  const { dispatch: quizDispatch } = useQuiz();
  useEffect(() => {
    quizDispatch({ type: "SET_CURRENT_QUIZ", payload: quizQuestions?quizQuestions : []});
  }, []);

  const currentQuizQuestion: QuizQuestion | undefined = quizQuestions
    ? quizQuestions[currentQuestionNumber]
    : undefined;

  return (
    <>
      {/* <div>Timer</div> */}
      <div>Total Score: {totalScore}</div>
      <QuestionCard
        currentQuizQuestion={currentQuizQuestion}
        quizQuestions={quizQuestions}
        quizId={quizId}
      />
    </>
  );
};
