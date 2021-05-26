import { Option, QuizQuestion } from "../quiz-data.types";
import { InitialQuizState } from "./quiz-context";

export type QuizAction =
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

export const quizReducer = (state: InitialQuizState, action: QuizAction) => {
  switch (action.type) {
    case "RESET":
      return {
        ...state,
        currentQuestionNumber: 0,
        totalScore: 0
      };

    case "SET_CURRENT_QUIZ":
      return {
        ...state,
        currentQuiz: [...action.payload]
      };

    case "SET_CURRENT_QUESTION":
      return {
        ...state,
        currentQuestionNumber: state.currentQuestionNumber + 1
      };

    case "SET_CURRENT_QUIZ_TOTAL_SCORE":
      return {
        ...state,
        totalScore: state.totalScore + action.payload.points
      };

    case "SAVE_USERS_ANSWERS":
      return {
        ...state,
        currentQuiz: state.currentQuiz?.map((question: QuizQuestion) => {
          if (question.question === action.payload.quizQuestion.question) {
            question.options.map((option: Option) => {
              if (option.text === action.payload.option.text) {
                option.isSelected = true;
              }
              return option;
            });
          }

          return question;
        })
      };

    default:
      return state;
  }
};
