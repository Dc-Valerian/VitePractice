import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../Components";

export const Elements = createBrowserRouter([
    {
        path:"/",
        element:<HomeLayout/>
    }
])