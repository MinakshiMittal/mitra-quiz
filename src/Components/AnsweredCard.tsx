import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import { QuizQuestion } from "../quiz-data.types";
import "./QuestionCard.css";

type AnsweredCardProps = {
  currentQuizQuestion: QuizQuestion;
};

export const AnsweredCard = ({ currentQuizQuestion }: AnsweredCardProps) => {
  return (
    <Box
      maxW="70%"
      margin="2rem auto"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
    >
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          marginBottom="3rem"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {currentQuizQuestion.question}
        </Box>
        <SimpleGrid columns={2} spacing={10}>
          {currentQuizQuestion.options.map((option) => {
            return (
              <Button
                key={option._id}
                className="option"
                colorScheme={option.isSelected ? "blue" : "gray"}
              >
                {option.text}
              </Button>
            );
          })}
        </SimpleGrid>
      </Box>
    </Box>
  );
};
