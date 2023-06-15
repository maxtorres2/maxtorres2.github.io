import "./App.css";
import profile from "./profile.png";
import Links from "./links";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Max Torres</h1>
        <p>
          <Typewriter
            options={{
              cursor: "_",
            }}
            onInit={(typewriter) => {
              typewriter.typeString("// Software Engineer").start();
            }}
          />
        </p>

        <img src={profile} className="profile" />
        <Links />
      </header>
    </div>
  );
}

export default App;
