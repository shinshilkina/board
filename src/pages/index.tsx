import {
  BrowserRouter as Router,
  useRoutes,
} from "react-router-dom";
import Todos from './todos/index';
import Home from './home';
import { useEffect, useState } from "react";

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/todos", element: <Todos /> },
  ]);
  return routes;
};

const AppWrapper = () => {
  const [domLoaded, setDomLoaded] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
      <Router>
        <App />
      </Router>
      )}
    </>
  );
};

export default AppWrapper;
