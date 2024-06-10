import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <header>
      <h1>گالری عکس های قجری | Qajari Photo Gallery</h1>
    </header>
    <div style={{ flex: 1 }}>
      <main style={{ flex: 1, paddingTop: 10 }}>
        <App />
      </main>
    </div>
    <div
      style={{
        position: "sticky",
        bottom: 0,
        left: 0,
        height: 32,
        width: "100%",
        backgroundColor: "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <a
        style={{ fontSize: 16, color: "white" }}
        href="https://github.com/AmyrAhmady/qajari.pics"
        target="_blank"
        rel="noreferrer noopener"
      >
        Source code on GitHub
      </a>
    </div>
  </React.StrictMode>
);
