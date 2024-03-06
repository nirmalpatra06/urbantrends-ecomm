// import components
import Footer from "./components/footer/Footer";
import Header from "./components/Header/Header";
// import pages
import Home from "./pages/Home";
import Mens from "./pages/Mens";
import Womens from "./pages/Womens";
import Gadgets from "./pages/Gadgets";
import Jewellery from "./pages/Jewellery";
import Cart from "./pages/Cart";
import WishList from "./pages/WishList";
import Profile from "./pages/Profile";
import Productdetails from "./pages/Productdetails";

//ProductsData
import { productsData } from "./api/Api";

// router setUp
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import Login from "./pages/Login";

const Layout = () => {
  return (
    <>
      <Header />
      <ScrollRestoration />
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
        loader: productsData,
      },
      {
        path: "/product/:id",
        element: <Productdetails />,
      },
      {
        path: "/mens",
        element: <Mens />,
        loader: productsData,
      },
      {
        path: "/womens",
        element: <Womens />,
        loader: productsData,
      },
      {
        path: "/gadgets",
        element: <Gadgets />,
        loader: productsData,
      },
      {
        path: "/jewellery",
        element: <Jewellery />,
        loader: productsData,
      },
      {
        path: "/wishlists",
        element: <WishList />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/login",
        element: <Login />,
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
