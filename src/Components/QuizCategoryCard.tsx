import { Box, Image, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../quiz-data.types";
import { useQuiz } from "../Context/QuizProvider/QuizProvider";

export const QuizCategoryCard = () => {
  const navigate = useNavigate();
  const {
    state: { quizzes },
  } = useQuiz();
  console.log("quizzes", quizzes);
  return (
    <Flex>
      {quizzes.map((quizCategory: Quiz) => {
        return (
          <Box
            key={quizCategory._id}
            onClick={() => navigate(`/quiz/${quizCategory._id}/introduction`)}
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            padding="1rem"
          >
            <Image
              src={quizCategory.quizCoverImageURL}
              alt="quiz cover image"
            />
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
