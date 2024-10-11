import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Logworkout from "./components/pages/Logworkout";
import WorkoutHistory from "./components/pages/WorkoutHistory";
import SearchPage from "./components/pages/SearchPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path:"/",
          element:<Home/>,
          index: true,
        },
        {
          path: "/logworkout",
          element:<Logworkout/>,
        },
        {
          path: "/history",
          element:<WorkoutHistory/>,
        },
        {
          path: "/searching",
          element:<SearchPage/>,
        },
      ]
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
