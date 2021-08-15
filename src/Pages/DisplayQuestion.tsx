import { useParams } from "react-router-dom";
import { QuizQuestion, Quiz } from "../quiz-data.types";
import { QuestionCard } from "../Components";
import { useQuiz } from "../Context/QuizProvider/QuizProvider";
import { useEffect } from "react";

export const DisplayQuestion = () => {
  const { quizId } = useParams();
  const {
    state: { currentQuestionNumber, totalScore },
  } = useQuiz();
  const {
    state: { quizzes },
  } = useQuiz();

  const quizQuestions: QuizQuestion[] | undefined = quizzes.find(
    (quizCategory: Quiz) => quizCategory._id === quizId
  )?.questions;

  const { dispatch: quizDispatch } = useQuiz();
  useEffect(() => {
    quizDispatch({
      type: "SET_CURRENT_QUIZ",
      payload: quizQuestions ? quizQuestions : [],
    });
  }, [quizDispatch, quizQuestions]);

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
