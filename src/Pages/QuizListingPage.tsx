import { QuizCategoryCard } from "../Components";
export const QuizListingPage = () => {
  return (
    <>
      {/* <h1>
        Mental health problems don’t define who you are. They are something you
        experience. You walk in the rain and you feel the rain, but,
        importantly, YOU ARE NOT THE RAIN.
      </h1> */}
      <h1 style={{ fontSize: "2rem", fontWeight: "bolder", padding: "1rem" }}>
        Mental Health Quizzes{" "}
      </h1>
      <QuizCategoryCard />
    </>
  );
};
