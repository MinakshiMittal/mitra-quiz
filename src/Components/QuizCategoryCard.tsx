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
    <Flex justifyContent="center" alignItems="center" padding="5rem 0 0 0">
      {quizzes.map((quizCategory: Quiz) => {
        return (
          <Box
            key={quizCategory._id}
            onClick={() => navigate(`/quiz/${quizCategory._id}/introduction`)}
            maxW="sm"
            borderRadius="lg"
            overflow="hidden"
            padding="1rem"
            flex="45%"
            maxWidth="45%"
            margin="1rem"
            border="3px solid #14a776c9"
            cursor="pointer"
          >
            <Image
              src={quizCategory.quizCoverImageURL}
              alt="quiz cover image"
              borderRadius="0.5rem"
            />
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              fontSize="xx-large"
              fontFamily="Varela Round"
              textAlign="center"
              color="#14a776"
            >
              {quizCategory.quizName}
            </Box>
          </Box>
        );
      })}
    </Flex>
  );
};
