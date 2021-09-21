import { Box, Button, SimpleGrid, useMediaQuery } from "@chakra-ui/react";
import { QuizQuestion } from "../quiz-data.types";
import "../Components/QuestionCard/QuestionCard.css";

type AnsweredCardProps = {
  currentQuizQuestion: QuizQuestion;
};

export const AnsweredCard = ({ currentQuizQuestion }: AnsweredCardProps) => {
  const [isLargerThan600] = useMediaQuery("(min-width:600px)");
  return (
    <Box
      maxW="70%"
      margin="4rem auto"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box p="6" borderColor="#14a776">
        <Box
          mt="1"
          fontWeight="semibold"
          marginBottom="3rem"
          as="h4"
          lineHeight="tight"
          isTruncated
          fontSize="1.5rem"
          whiteSpace="normal"
        >
          {currentQuizQuestion.question}
        </Box>
        <SimpleGrid
          columns={2}
          spacing={10}
          gridTemplateColumns={
            isLargerThan600 ? "repeat(2, minmax(0, 1fr))" : "none"
          }
        >
          {currentQuizQuestion.options.map((option) => {
            return (
              <Button
                key={option._id}
                className="option"
                colorScheme={option.isSelected ? "blue" : "gray"}
                fontSize="1.1rem"
              >
                {option.option}
              </Button>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
