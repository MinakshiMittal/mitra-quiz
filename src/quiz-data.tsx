import { MentalHealthQuizzes } from "./quiz-data.types";
import "./global.d.ts";
import Happy from "./assets/happy.jpg";
import KnowledgeOfSelf from "./assets/knowledge-of-self.jpg";

export const mentalHealthQuizzes: MentalHealthQuizzes = [
  {
    id: "1",
    quizName: "How Happy Are You?",
    quizCoverImage: Happy,
    questions: [
      {
        questionId: "1.1",
        question:
          "I believe my life will truly begin when the right person or circumstances come along.",
        options: [
          { optionId: "1.1.1", text: "Never", isSelected: false, points: 8 },
          {
            optionId: "1.1.2",
            text: "Infrequently",
            isSelected: false,
            points: 5
          },
          {
            optionId: "1.1.3",
            text: "Sometimes",
            isSelected: false,
            points: 3
          },
          {
            optionId: "1.1.4",
            text: "Frequently",
            isSelected: false,
            points: 1
          }
        ]
      },
      {
        questionId: "1.2",
        question: "I feel best when I give unconditionally to others.",
        options: [
          { optionId: "1.2.1", text: "Never", isSelected: false, points: 1 },
          {
            optionId: "1.2.2",
            text: "Infrequently",
            isSelected: false,
            points: 3
          },
          {
            optionId: "1.2.3",
            text: "Sometimes",
            isSelected: false,
            points: 5
          },
          {
            optionId: "1.2.4",
            text: "Frequently",
            isSelected: false,
            points: 8
          }
        ]
      },
      {
        questionId: "1.3",
        question:
          " When I think about people in my life, I focus on those who have hurt or disappointed me.",
        options: [
          { optionId: "1.3.1", text: "Never", isSelected: false, points: 8 },
          {
            optionId: "1.3.2",
            text: "Infrequently",
            isSelected: false,
            points: 5
          },
          {
            optionId: "1.3.3",
            text: "Sometimes",
            isSelected: false,
            points: 3
          },
          {
            optionId: "1.3.4",
            text: "Frequently",
            isSelected: false,
            points: 1
          }
        ]
      },
      {
        questionId: "1.4",
        question: " When things don't go well, I feel trapped or overwhelmed.",
        options: [
          { optionId: "1.4.1", text: "Never", isSelected: false, points: 8 },
          {
            optionId: "1.4.2",
            text: "Infrequently",
            isSelected: false,
            points: 5
          },
          {
            optionId: "1.4.3",
            text: "Sometimes",
            isSelected: false,
            points: 3
          },
          {
            optionId: "1.4.4",
            text: "Frequently",
            isSelected: false,
            points: 1
          }
        ]
      }
    ]
  },
  {
    id: "2",
    quizName: "Knowledge of Self",
    quizCoverImage: KnowledgeOfSelf,
    questions: [
      {
        questionId: "2.1",
        question: "Feeling down, depressed, or hopeless",
        options: [
          {
            optionId: "2.1.1",
            text: "Not At All",
            isSelected: false,
            points: 8
          },
          {
            optionId: "2.1.2",
            text: "Several days",
            isSelected: false,
            points: 5
          },
          {
            optionId: "2.1.3",
            text: "More than half the days",
            isSelected: false,
            points: 3
          },
          {
            optionId: "2.1.4",
            text: "Nearly every day",
            isSelected: false,
            points: 1
          }
        ]
      },
      {
        questionId: "2.2",
        question:
          "Trouble concentrating on things, such as reading the newspaper or watching television",
        options: [
          {
            optionId: "2.2.1",
            text: "Not At All",
            isSelected: false,
            points: 8
          },
          {
            optionId: "2.2.2",
            text: "Several days",
            isSelected: false,
            points: 5
          },
          {
            optionId: "2.2.3",
            text: "More than half the days",
            isSelected: false,
            points: 3
          },
          {
            optionId: "2.2.4",
            text: "Nearly every day",
            isSelected: false,
            points: 1
          }
        ]
      },
      {
        questionId: "2.3",
        question:
          " Do you experience intense sorrow and emotional pain many months after the loss?",
        options: [
          { optionId: "2.3.1", text: "Never", isSelected: false, points: 8 },
          {
            optionId: "2.3.2",
            text: "Infrequently",
            isSelected: false,
            points: 5
          },
          {
            optionId: "2.3.3",
            text: "Sometimes",
            isSelected: false,
            points: 3
          },
          {
            optionId: "2.3.4",
            text: "Frequently",
            isSelected: false,
            points: 1
          }
        ]
      },
      {
        questionId: "2.4",
        question:
          " Do you feel numb or detached from other people or activities you once enjoyed?",
        options: [
          { optionId: "2.4.1", text: "Never", isSelected: false, points: 8 },
          {
            optionId: "2.4.2",
            text: "Infrequently",
            isSelected: false,
            points: 5
          },
          {
            optionId: "2.4.3",
            text: "Sometimes",
            isSelected: false,
            points: 3
          },
          {
            optionId: "2.4.4",
            text: "Frequently",
            isSelected: false,
            points: 1
          }
        ]
      }
    ]
  }
];
