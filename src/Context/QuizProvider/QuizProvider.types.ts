import { Option, QuizQuestion, Quizzes, Quiz } from "../../quiz-data.types";
import React, { ReactNode } from "react";

export type ContextInitialState = {
  state: InitialQuizState;
  dispatch: React.Dispatch<QuizAction>;
};

export type InitialQuizState = {
  quizzes: [] | Quiz[];
  currentQuestionNumber: number;
  totalScore: number;
  timer: number;
  currentQuiz: QuizQuestion[] | [];
  loading: boolean;
  error: string;
};

export type QuizProviderProps = {
  children: ReactNode;
};

export type QuizAction =
  | { type: "FETCH_QUIZZES_SUCCESS"; payload: Quizzes }
  | { type: "FETCH_QUIZZES_ERROR" }
  | { type: "RESET" }
  | { type: "SET_CURRENT_QUESTION" }
  | { type: "SET_CURRENT_QUIZ_TOTAL_SCORE"; payload: Option }
  | {
      type: "SAVE_USERS_ANSWERS";
      payload: { quizQuestion: QuizQuestion; option: Option };
    }
  | {
      type: "DISPLAY_USERS_ANSWERS";
      payload: QuizQuestion[];
    }
  | { type: "SET_CURRENT_QUIZ"; payload: QuizQuestion[] | [] };
