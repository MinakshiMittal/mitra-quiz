import { AnsweredCard } from "../Components";
import { useQuiz } from "../Context/quiz-context";
import { useNavigate } from "react-router-dom";
import { QuizQuestion } from "../quiz-data.types";
import { Text, Button } from "@chakra-ui/react";

export const AnalysisPage = () => {
  const { currentQuiz, totalScore, dispatch: quizDispatch } = useQuiz();
  const navigate = useNavigate();

  return (
    <>
      <Text fontSize="1rem" fontWeight="bolder" color="black">
        Your Answers
      </Text>
      <Text fontSize="1rem" fontWeight="bolder" color="black">
        Total Score: {totalScore}{" "}
      </Text>
      {currentQuiz?.map((question: QuizQuestion) => {
        return (
          <AnsweredCard
            key={question.questionId}
            currentQuizQuestion={question}
          />
        );
      })}
      <Button
        colorScheme="red"
        onClick={() => {
          navigate("/");
          quizDispatch({ type: "RESET" });
        }}
      >
        Play More Quiz
      </Button>
    </>
  );
};
