import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
    const router = createBrowserRouter([
        {
            path:'/',
            element: <HomeLayout></HomeLayout>
        },
        {
            path:'news',
            element: <h1>we are in news page</h1>
        },
        {
            path:'auth',
            element: <h1>login </h1>
        },
        {
            path: '*',
            element: <h2>error</h2>
        }
    ])

export default router;