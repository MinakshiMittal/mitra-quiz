import { Box, Button, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";
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
  const [disabled, setDisabled] = useState(false);
  const [isLargerThan600] = useMediaQuery("(min-width:600px)");

  return (
    <Box
      maxW={isLargerThan600 ? "70%" : "100%"}
      margin={isLargerThan600 ? "6rem auto" : "2rem auto"}
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
          whiteSpace="normal"
          fontSize="1.3rem"
        >
          {currentQuizQuestion?.question}
        </Box>
        <SimpleGrid
          columns={2}
          spacing={10}
          gridTemplateColumns={
            isLargerThan600 ? "repeat(2, minmax(0, 1fr))" : "none"
          }
        >
          {currentQuizQuestion?.options.map((option) => {
            return (
              <Button
                key={option._id}
                className="option"
                disabled={disabled}
                colorScheme={option.isSelected ? "blue" : "gray"}
                whiteSpace="normal"
                fontSize="1.1rem"
                onClick={() => {
                  setDisabled(true);
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
              borderColor="blue"
              onClick={() => {
                if (currentQuestionNumber < 3) {
                  quizDispatch({
                    type: "SET_CURRENT_QUESTION",
                  });
                }
                setDisabled(false);
              }}
            >
              Next
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
