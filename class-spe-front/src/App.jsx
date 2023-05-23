import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Home } from "./pages/home/home";
import { NotFound } from "./pages/not-found/notFound";
import { Product } from "./pages/products/product";
import { MainProduct } from "./components/MainProduct";
import { Loguin } from "./pages/loguin";
import { MainLayout } from "./components/MainLayout";
import { LoguinProvider } from "./contexts/loguin";

export function App() {

  const appRouter = createBrowserRouter([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Home />
        },

        {
          path: "/product/:id",
          element: <Product />
        },

        {
          path: "/main-product/:id",
          element: <MainProduct />
        }
      ]
    },

    {
      path: "/loguin",
      element: <Loguin />
    },

    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <LoguinProvider>

      <RouterProvider router={appRouter} />

    </LoguinProvider>
  )
}

export default App
