import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by{" "}
          <a
            href="https://www.linkedin.com/in/soraya-guariente-04b1a3166/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Soraya Guariente{" "}
          </a>{" "}
          and is open-sorced on{" "}
          <a
            href="https://github.com/sorayaguariente/react-weather-dark-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
