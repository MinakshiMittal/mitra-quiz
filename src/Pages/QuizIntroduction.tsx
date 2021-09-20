import {
  Button,
  Container,
  Text,
  Center,
  useMediaQuery,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../quiz-data.types";
import { MainNav } from "../Components";

type QuizIntroductionProps = {
  quizCategory: Quiz | undefined;
};

export const QuizIntroduction = ({ quizCategory }: QuizIntroductionProps) => {
  const navigate = useNavigate();
  const [isLargerThan600] = useMediaQuery("(min-width:600px)");

  return (
    <>
      <MainNav />
      <h1 className="instructions-heading">Instructions</h1>
      <Container>
        <Container
          style={{
            border: "1px solid black",
            borderRadius: "0.5rem",
            margin: isLargerThan600 ? "auto" : "",
            textAlign: "left",
            marginTop: isLargerThan600 ? "6%" : "12%",
            padding: "1rem",
          }}
        >
          <Text className="instructions" fontSize="1.3rem" fontWeight="500">
            <span role="img" aria-label="emojis">
              🧠
            </span>
            There's no negative marking.
          </Text>
          <Text className="instructions" fontSize="1.3rem" fontWeight="500">
            <span role="img" aria-label="emojis">
              🧠
            </span>
            Different questions have different points.
          </Text>
          <Text className="instructions" fontSize="1.3rem" fontWeight="500">
            <span role="img" aria-label="emojis">
              🧠
            </span>
            You can answer the question only once.
          </Text>
          <Text className="instructions" fontSize="1.3rem" fontWeight="500">
            <span role="img" aria-label="emojis">
              🧠
            </span>
            Each option has different scores and the total score tells about
            your mental health.
          </Text>
          <Center>
            <Button
              margin="1rem"
              colorScheme="red"
              onClick={() => navigate(`/quiz/${quizCategory?._id}`)}
            >
              Start Quiz
            </Button>
          </Center>
        </Container>
      </Container>
    </>
  );
};
