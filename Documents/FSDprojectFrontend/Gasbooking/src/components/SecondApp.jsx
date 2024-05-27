import { RouterProvider, createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../components/DashboardLayout";
import { loader as userLoader } from "./Dashboard";

const router = createBrowserRouter([
    {
        path: 'dashboard',
        element: <DashboardLayout/>,
        loader: userLoader,
        children: [
            {
                path: 'dashboard',
                element: <h1>Dashboard</h1>
            }
        ]
    }
]);

const SecondApp = () => {
    return <RouterProvider router={router} />;
}

export default SecondApp;