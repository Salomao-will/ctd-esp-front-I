import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Home } from "./pages/home/home";
import { NotFound } from "./pages/not-found/notFound";
import { Product } from "./pages/products/product";
import { MainProduct } from "./components/MainProduct";

export function App() {

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/product/:id",
      element: <Product />
    },

    {
      path: "/main-product/:id",
      element: <MainProduct />
    },

    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return (
    <RouterProvider router={appRouter} />
  )
}

export default App
