import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
//import "./App.css";
import Sidebar from "./assets/components/Sidebar";
import "./assets/styles/sidebar.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      {/* Qui poi metterai gli altri componenti */}
      <main>
        <h1>Benvenuto nel clone di Spotify!</h1>
      </main>
    </div>
  );
}

export default App;
