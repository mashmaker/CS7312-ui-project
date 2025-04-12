import { createBrowserRouter } from "react-router-dom";

import AlertList from "./alert-list/AlertList.container";
import AlertDetail from "./alert-detail/AlertDetail.container";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AlertList,
  },
  {
    path: "/{id}",
    Component: AlertDetail,
  },
]);

export default router;
