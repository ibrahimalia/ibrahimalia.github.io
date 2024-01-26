import ReactDOM from "react-dom/client";
import "./assets/index.css";
import { RouterProvider } from "react-router-dom";
import { routers } from "./routes";
import { MediaQueryProvider } from "@context";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


ReactDOM.createRoot(document.getElementById("root")!).render(
  <MediaQueryProvider>
    <RouterProvider router={routers} />
  </MediaQueryProvider>
);
