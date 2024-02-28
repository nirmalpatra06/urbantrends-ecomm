// import components
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
// import pages
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Productdetails from "./pages/Productdetails";
import WishList from "./pages/WishList";

//ProductsData
// import { productsData } from "./api/Api";

// router setUp
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
        // loader: productsData,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
