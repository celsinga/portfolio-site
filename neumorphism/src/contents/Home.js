import { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <h1>
          Colin <mark>Elsinga</mark>
        </h1>
        <ReactTypingEffect
          className="typingeffect"
          text={[
            "Full Stack Developer",
            "UI/UX Designer",
            "Music Producer",
          ]}
          speed={100}
          eraseDelay={400}
        />
        <div className="hr_line">
          <div className="hr_inner"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default Home;
