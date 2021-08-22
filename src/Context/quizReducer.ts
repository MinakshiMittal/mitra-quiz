import { Option, QuizQuestion } from "../quiz-data.types";
import {
  InitialQuizState,
  QuizAction,
} from "./QuizProvider/QuizProvider.types";

export const quizReducer = (state: InitialQuizState, action: QuizAction) => {
  switch (action.type) {
    case "FETCH_QUIZZES_SUCCESS":
      return {
        ...state,
        quizzes: [...action.payload.quizzes],
        loading: false,
      };

    case "FETCH_QUIZZES_ERROR":
      return {
        ...state,
        error: "Something went wrong",
      };

    case "RESET":
      return {
        ...state,
        currentQuestionNumber: 0,
        totalScore: 0,
      };

    case "SET_CURRENT_QUIZ":
      return {
        ...state,
        currentQuiz: [...action.payload],
      };

    case "SET_CURRENT_QUESTION":
      return {
        ...state,
        currentQuestionNumber: state.currentQuestionNumber + 1,
      };

    case "SET_CURRENT_QUIZ_TOTAL_SCORE":
      return {
        ...state,
        totalScore: state.totalScore + action.payload.points,
      };

    case "SAVE_USERS_ANSWERS":
      return {
        ...state,
        currentQuiz: state.currentQuiz?.map((question: QuizQuestion) => {
          if (question.question === action.payload.quizQuestion.question) {
            question.options.map((option: Option) => {
              if (option.option === action.payload.option.option) {
                option.isSelected = true;
              }
              return option;
            });
          }

          return question;
        }),
      };

    default:
      return state;
  }
};
