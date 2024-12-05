import "./app.css";
import LinkButtonRow from "../components/link-button-row";
import Typewriter from "typewriter-effect";

export function App() {
  return (
    <div className="app">
      <h1>Max Torres</h1>
      <p className="typewriter">
        <Typewriter
          options={{
            cursor: "_",
            delay: 100,
          }}
          onInit={(typewriter) => {
            typewriter.typeString("// Software Engineer").start();
          }}
        />
      </p>
      <LinkButtonRow />
    </div>
  );
}
