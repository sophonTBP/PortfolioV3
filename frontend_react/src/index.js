import React from "react";
import { createRoot } from "react-dom/client";
import  {ThemeProvider}  from "./wrapper/ThemeContext";
import App from "./App";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
 
<App />

);
