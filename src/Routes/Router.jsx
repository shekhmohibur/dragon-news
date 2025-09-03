import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryNews from "../pages/CategoryNews";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
    const router = createBrowserRouter([
        {
            path:'/',
            element: <HomeLayout></HomeLayout>,
            children: [
                {
                    path:'',
                    element:<Navigate to='/category/01'></Navigate>
                },
                {
                    path:'/category/:id',
                    element:<CategoryNews></CategoryNews>,
                    loader:({ params }) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
                }
            ]
        },
        {
            path:'news',
            element: <h1>we are in news page</h1>
        },
        {
            path:'auth',
            element: <AuthLayout></AuthLayout>,
            children:[
                {
                    path:'/auth/logion',
                    element:<Login></Login>
                },
                {
                    path:'/auth/register',
                    element:<Register></Register>
                }
            ]
        },
        {
            path: '*',
            element: <h2>error</h2>
        }
    ])

export default router;