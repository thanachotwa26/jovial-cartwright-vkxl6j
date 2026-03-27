import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css"; // บรรทัดนี้สำคัญมาก เพื่อดึงความสวยงามมาใช้
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement!);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);