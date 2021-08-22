import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../Context/QuizProvider/QuizProvider";
import { QuizQuestion } from "../quiz-data.types";
import "./QuestionCard.css";

type QuestionCardProps = {
  currentQuizQuestion: QuizQuestion | undefined;
  quizQuestions: QuizQuestion[] | undefined;
  quizId: string;
};

export const QuestionCard = ({
  currentQuizQuestion,
  quizQuestions,
  quizId,
}: QuestionCardProps) => {
  const {
    dispatch: quizDispatch,
    state: { currentQuestionNumber },
  } = useQuiz();
  const navigate = useNavigate();

  return (
    <Box
      maxW="70%"
      margin="6rem auto"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          marginBottom="1rem"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {currentQuizQuestion?.question}
        </Box>
        <SimpleGrid columns={2} spacing={10}>
          {currentQuizQuestion?.options.map((option) => {
            return (
              <Button
                key={option._id}
                className="option"
                onClick={() => {
                  setTimeout(() => {
                    if (currentQuestionNumber < 3) {
                      quizDispatch({
                        type: "SET_CURRENT_QUESTION",
                      });
                    }
                    quizDispatch({
                      type: "SET_CURRENT_QUIZ_TOTAL_SCORE",
                      payload: option,
                    });
                    quizDispatch({
                      type: "SAVE_USERS_ANSWERS",
                      payload: {
                        quizQuestion: currentQuizQuestion,
                        option: option,
                      },
                    });
                  }, 1500);
                }}
              >
                {option.option}
              </Button>
            );
          })}
        </SimpleGrid>
        <Box margin="2rem 1rem 0 1rem">
          {currentQuestionNumber < 3 && (
            <Button
              margin="0 1rem"
              colorScheme="red"
              onClick={() => {
                if (currentQuestionNumber < 3) {
                  quizDispatch({
                    type: "SET_CURRENT_QUESTION",
                  });
                }
              }}
            >
              Skip
            </Button>
          )}
          {currentQuestionNumber === 3 && (
            <Button
              colorScheme="red"
              onClick={() => {
                navigate(`/quiz/${quizId}/analysis`);
              }}
            >
              Finish
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};
