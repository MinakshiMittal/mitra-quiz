import "../../global.d.ts";
import "./GettingStarted.css";
import { MainNav } from "../../Components";
import HomePage from "../../assets/home-page.jpg";

export const GettingStarted = () => {
  return (
    <>
      <MainNav />
      <img
        src={HomePage}
        className="landing-page-background-image"
        alt="home page"
      />
      <div className="signature-line">
        HEAL YOUR MIND AND SOUL WITH OUR THERAPY SERVICES
      </div>
      {/* <Link to="/quizzes"> */}
      <button className="getting-started-button">GET STARTED</button>
      {/* </Link> */}
      {/* <div className="problem-quote-text">
        Problem Hai?
        <br />
        Andar Solution Hai!!!
      </div> */}
    </>
  );
};
