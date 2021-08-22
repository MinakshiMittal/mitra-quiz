export type Option = {
  _id: string;
  option: string;
  isSelected: boolean;
  points: number;
};

export type QuizQuestion = {
  _id: string;
  question: string;
  options: Option[];
};

export type Quiz = {
  _id: string;
  quizName: string;
  quizCoverImageURL: string;
  questions: QuizQuestion[];
};

export type Quizzes = {
  quizzes: Quiz[];
};
