import { createBrowserRouter } from "react-router-dom";

// Routes
import Root from "./Routes/Root.jsx";
import Menu from "./Components/Menu/menu.jsx";
import StartPage from "./Routes/Startpage/Startpage.jsx";
import Varukorg from "./Routes/Varukorg/Varukorg.jsx";
import { Delivery } from "./Routes/Delivery/Delivery.jsx";
import Payment from "./Routes/Payment/Payment.jsx";
import Kvitto from "./Components/Kvitto/Kvitto.jsx";
import { EmployeeView } from "./Routes/EmployeeView/EmployeeView.jsx";
import Chefsview from "./routes/Chefsview/Chefsview.jsx";
import AboutUs from "./Components/Om oss/Om-oss.jsx";

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
        element: <Payment />,
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
      {
        path: "/omoss",
        element: <AboutUs />,
      },
    ],
  },
]);
export { router };
