import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Data from "./routes/Data";
import NewHooks from "./routes/NewHooks";

export const router = createBrowserRouter([
    { path: "/", element: <App  /> },
    { path: "/data", element: <Data  /> },
    { path: "/newhooks", element: <NewHooks  /> }
  ]);