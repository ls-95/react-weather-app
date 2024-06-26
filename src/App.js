import "./App.css";
import Weather from "./Weather";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
        <Weather />
      </header>
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
