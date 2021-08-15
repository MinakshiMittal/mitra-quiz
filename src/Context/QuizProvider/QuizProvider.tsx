import { createContext, useContext, useReducer, useEffect } from "react";
import { quizReducer } from "../quizReducer";
import {
  QuizProviderProps,
  ContextInitialState,
  InitialQuizState,
} from "./QuizProvider.types";
import axios from "axios";

const initialQuizState: InitialQuizState = {
  quizzes: [],
  currentQuestionNumber: 0,
  totalScore: 0,
  timer: 30,
  currentQuiz: [],
  error: "",
  loading: true,
};

const QuizContext = createContext<ContextInitialState>(
  {} as ContextInitialState
);

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://mitra-quiz.mittalminakshi.repl.co/quizzes"
        );
        console.log("responsewish", response.data);
        if (response.status === 200) {
          dispatch({
            type: "FETCH_QUIZZES_SUCCESS",
            payload: {
              quizzes: response.data.quizzes,
            },
          });
        }
      } catch (error) {
        // dispatch({ type: "FETCH_QUIZZES_ERROR" });
        console.log();
      }
    })();
  }, [dispatch]);

  return (
    <QuizContext.Provider value={{ state, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
