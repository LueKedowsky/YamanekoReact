import SingleRelease from "./SingleRelease/SingleRelease";
import "./ReleasesPage.scss";
import data from "../../data/tempData/data.json";
import { SingleReleaseDataType } from "../../Types/dataTypes";

const ReleasesPage: React.FC = () => {
  const releaseData: SingleReleaseDataType[] = JSON.parse(JSON.stringify(data));
  return (
    <div className="releases-container">
      <div className="releases-banner">
        <img className="releases-banner-img" src={require("../../data/assets/icons/releases.png")} alt="" />
      </div>
      <main className="releases-container-main">
        {releaseData.map((props) => {
          return <SingleRelease {...props} />;
        })}
      </main>
    </div>
  );
};

export default ReleasesPage;
