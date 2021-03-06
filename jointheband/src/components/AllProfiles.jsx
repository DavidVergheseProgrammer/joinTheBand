import Profile from "./Profile.jsx";
import drumfill from "../sounds/drumfill.mp3";

function AllProfiles(props) {
  const drumFillAudio = new Audio(drumfill);
  drumFillAudio.volume = 0.02;

  return (
    <div>
      <a href="top" name="top">
        <h2>Profiles:</h2>
      </a>
      <div id="all-profiles-parent-div">
      {props.data.map((item, key) => {
        // item stores data of musician's profile
        return (
          <div>
            {/* pass item as prop to Profile */}
            <Profile  key={key} item={item} refresh={props.refresh} />
          </div>
        );
      })}</div>
      <a href="#top">
        <button
          onClick={function () {
            drumFillAudio.play();
          }}
        >
          Back to Top
        </button>
      </a>
    </div>
  );
}

export default AllProfiles;
