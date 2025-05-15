import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/index.scss";
import Navbar from "./components/appbar/navbar/Navbar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar variant="primary" sideBarPosition="right" />
    {/* <Button size="md" variant="primary">asdsad</Button> */}
    {/* <App /> */}
  </StrictMode>
);
