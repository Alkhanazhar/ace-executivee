import "./App.css";
import { useRoutes } from "react-router-dom";

import NotFoundPage from "./pages/NotFound";

import HomePage from "./pages/home";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },

  {
    path: "*",
    element: <NotFoundPage />,
  },
];

function App() {
  const element = useRoutes(routes);
  return element;
}

export default App;