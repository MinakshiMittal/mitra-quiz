import { AnsweredCard, MainNav } from "../Components";
import { useQuiz } from "../Context/QuizProvider/QuizProvider";
import { useNavigate } from "react-router-dom";
import { QuizQuestion } from "../quiz-data.types";
import { Text, Button } from "@chakra-ui/react";

export const AnalysisPage = () => {
  const {
    state: { currentQuiz, totalScore },
    dispatch: quizDispatch,
  } = useQuiz();
  const navigate = useNavigate();

  return (
    <>
      <MainNav />
      <Text
        fontSize="3rem"
        fontWeight="bolder"
        color="black"
        paddingTop="4rem"
        whiteSpace="normal"
        fontFamily="Varela Round"
      >
        Analysis
      </Text>
      <Text
        fontSize="1.3rem"
        fontWeight="bolder"
        color="red"
        whiteSpace="normal"
        fontFamily="Varela Round"
      >
        Total Score: {totalScore}{" "}
      </Text>
      {totalScore <= currentQuiz.length * 8 &&
        totalScore >= currentQuiz.length * 5 + 1 && (
          <Text
            color="#14a766"
            marginTop="1.5rem"
            fontSize="1.7rem"
            fontWeight="900"
            fontFamily="Varela Round"
          >
            Good Mental Health. Just maintain this standard.
          </Text>
        )}
      {totalScore <= currentQuiz.length * 5 &&
        totalScore >= currentQuiz.length * 3 + 1 && (
          <Text
            color="#14a766"
            marginTop="1.5rem"
            fontSize="1.7rem"
            fontWeight="900"
            fontFamily="Varela Round"
          >
            Average Mental Health. Few things to be managed and modified.
          </Text>
        )}
      {totalScore <= currentQuiz.length * 3 &&
        totalScore >= currentQuiz.length * 1 + 1 && (
          <Text
            color="red"
            marginTop="1.5rem"
            fontSize="1.7rem"
            fontWeight="900"
            fontFamily="Varela Round"
          >
            Below Average Mental Health. Still lot more things to be managed and
            modified.
          </Text>
        )}
      {totalScore <= currentQuiz.length * 1 && totalScore > 0 && (
        <Text
          color="red"
          marginTop="1.5rem"
          fontSize="1.7rem"
          fontWeight="900"
          fontFamily="Varela Round"
        >
          Poor Mental Health. Might need professional help.
        </Text>
      )}
      {totalScore === 0 && (
        <Text
          color="black"
          marginTop="1.5rem"
          fontSize="1.7rem"
          fontWeight="900"
          fontFamily="Varela Round"
        >
          Answer questions to have the analysis.
        </Text>
      )}
      {currentQuiz?.map((question: QuizQuestion) => {
        return (
          <AnsweredCard key={question._id} currentQuizQuestion={question} />
        );
      })}
      <Button
        colorScheme="red"
        marginBottom="1rem"
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
