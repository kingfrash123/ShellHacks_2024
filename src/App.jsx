// import { useState } from "react";
// import "./App.css";
import Header from "/src/components/loginUI/Header.jsx";
import Hero from "/src/components/loginUI/Hero.jsx";
// import Dashboard from "/src/components/dashboardUI/Dashboard.jsx";

function App() {
  // const [count, setCount] = useState(0);

  //   <button onClick={() => setCount((count) => count + 1)}>
  //   count is {count}
  // </button>
  return (
    <div className="brightnessWorkaround">
      <Header />
      <Hero />
    </div>
  );
}

export default App;
