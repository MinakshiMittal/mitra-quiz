import { createContext, ReactNode, useContext, useReducer } from "react";
import { mentalHealthQuizzes } from "../quiz-data";
import { MentalHealthQuizzes, QuizQuestion } from "../quiz-data.types";
import { quizReducer, QuizAction } from "./quizReducer";

export type ContextInitialState = {
  mentalHealthQuizzes: MentalHealthQuizzes;
  currentQuestionNumber: number;
  totalScore: number;
  timer: number;
  dispatch: (action: QuizAction) => void;
  currentQuiz: QuizQuestion[] | [];
};

export type InitialQuizState = {
  mentalHealthQuizzes: MentalHealthQuizzes;
  currentQuestionNumber: number;
  totalScore: number;
  timer: number;
  currentQuiz: QuizQuestion[] | [];
};

const initialQuizState: InitialQuizState = {
  mentalHealthQuizzes: [...mentalHealthQuizzes],
  currentQuestionNumber: 0,
  totalScore: 0,
  timer: 30,
  currentQuiz: []
};

export type QuizProviderProps = {
  children: ReactNode;
};

const QuizContext = createContext<ContextInitialState>(
  {} as ContextInitialState
);

export const QuizProvider = ({ children }: QuizProviderProps) => {
  const [state, dispatch] = useReducer(quizReducer, initialQuizState);

  return (
    <QuizContext.Provider
      value={{
        mentalHealthQuizzes,
        currentQuestionNumber: state.currentQuestionNumber,
        totalScore: state.totalScore,
        timer: state.timer,
        dispatch,
        currentQuiz: state.currentQuiz
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  return useContext(QuizContext);
};
