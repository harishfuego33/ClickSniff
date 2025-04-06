import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import video from "../assets/videos/27770-365891067_small.mp4";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
const Search = () => {
  const [focus, setFocus] = useState<boolean>(false);
  return (
    <main id="home" className="home">
      <video
        src={video}
        className="background-videos"
        autoPlay
        loop
        muted
        playsInline
      />
      <section className="home-section">
        <div className="search-input-container">
          <h1 className="login-heading">Search</h1>
          <form className={`search-form ${focus ? "focus" : ""}`}>
            <input
              className="search-area"
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
            />
            <button type="submit" className="search-button">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                color="white"
                className="logo"
              />
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Search;
