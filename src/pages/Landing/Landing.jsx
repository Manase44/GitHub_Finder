import "./Landing.css";
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import Repos from "../../components/Repositories/Repos";
import Followers from "../../components/Followers/Followers";
import Following from "../../components/Following/Following";

const Landing = () => {
  return (
    <div>
      <Header />
      <div className="main-div">
        <Aside />
        <div className="main-div-content">
          <Repos />
          <Followers />
          <Following />
        </div>
      </div>
    </div>
  );
};

export default Landing;
