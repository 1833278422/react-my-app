import { createBrowserRouter, Navigate } from "react-router-dom";

import Main from "../pages/main";
import Home from "../pages/home";
import Mall from "../pages/mall";
import User from "../pages/user";
import Page1 from "../pages/other/page1";
import Page2 from "../pages/other/page2";

const routers = [
  {
    path: "/",
    Component: Main,
    children: [
      {
        path: '',
        Component: <Navigate to="home"></Navigate>
      },
      {
        path: "home",
        Component: Home,
      },
      {
        path: "mall",
        Component: Mall,
      },
      {
        path: "user",
        Component: User,
      },
      {
        path: "other",
        children: [
          
            {
              path: "page1",
              Component: Page1,
            },
            {
              path: "page2",
              Component: Page2,
            },
        ] ,
      },
    ],
  },
];

export default createBrowserRouter(routers);
