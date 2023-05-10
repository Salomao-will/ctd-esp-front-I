import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home/home";

export function App() {

  const appRouter = createBrowserRouter([
    {
      path: "home",
      element: <Home />,
    },
  ]);

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
