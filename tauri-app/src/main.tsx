import ReactDOM from "react-dom/client";
import IRouter from "./routes";
import "./global.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <IRouter />
);
