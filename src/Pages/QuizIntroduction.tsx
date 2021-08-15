import { Button, Container, Text, Center } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Quiz } from "../quiz-data.types";

type QuizIntroductionProps = {
  quizCategory: Quiz | undefined;
};

export const QuizIntroduction = ({ quizCategory }: QuizIntroductionProps) => {
  const navigate = useNavigate();
  return (
    <>
      <Container
        style={{
          border: "1px solid black",
          margin: "auto",
          textAlign: "left",
          marginTop: "10%",
          padding: "1rem",
        }}
      >
        <Text fontSize="md">
          <span role="img" aria-label="emojis">
            🧠
          </span>
          There's no negative marking.
        </Text>
        <Text fontSize="md">
          <span role="img" aria-label="emojis">
            🧠
          </span>
          Different questions have different points.
        </Text>
        <Text fontSize="md">
          <span role="img" aria-label="emojis">
            🧠
          </span>
          You can answer the question only once.
        </Text>
        <Center>
          <Button
            margin="1rem"
            onClick={() => navigate(`/quiz/${quizCategory?._id}`)}
          >
            Start Quiz
          </Button>
        </Center>
      </Container>
    </>
  );
};
