import { createHashRouter } from "react-router-dom";

import { Home, PageNotFound, Projects, Me, Skills } from "@pages";
import { MainLayout } from "@layouts";

const routers = createHashRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/me",
        element: <Me />,
      },
      {
        path: "/me/skills",
        element: <Skills />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
export { routers };
