import { createBrowserRouter } from "react-router-dom";

// Routes
import Root from "./Routes/Root";
import Menu from "./Components/Menu/menu";
import StartPage from "./Routes/Startpage/Startpage";
import Varukorg from "./Components/Varukorg/Varukorg.tsx";
import { Delivery } from "./Routes/Delivery.jsx";
import CheckoutPage from "./Components/betalning/Betalning.tsx";
import Kvitto from "./Components/Kvitto/Kvitto.tsx";
import { EmployeeView } from "./Routes/EmployeeView.jsx";
import Chefsview from "./Routes/Chefsview/Chefsview.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <StartPage />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/varukorg",
        element: <Varukorg />,
      },
      {
        path: "/leverans",
        element: <Delivery />,
      },
      {
        path: "/betalning",
        element: <CheckoutPage />,
      },
      {
        path: "/kvitto",
        element: <Kvitto />,
      },
      {
        path: "/employee",
        element: <EmployeeView />,
      },
      {
        path: "/chefsview",
        element: <Chefsview />,
      },
    ],
  },
]);
export { router };
