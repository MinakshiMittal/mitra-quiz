import { Box, Image, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { mentalHealthQuizzes } from "../quiz-data";
import { MentalHealthQuiz } from "../quiz-data.types";

export const QuizCategoryCard = () => {
  const navigate = useNavigate();
  return (
    <Flex>
      {mentalHealthQuizzes.map((quizCategory: MentalHealthQuiz) => {
        return (
          <Box
            key={quizCategory.id}
            onClick={() => navigate(`/quiz/${quizCategory.id}/introduction`)}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            padding="1rem"
          >
            <Image src={quizCategory.quizCoverImage} alt="quiz cover image" />
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {quizCategory.quizName}
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
};
