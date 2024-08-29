import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {

    return (
        <div className="app">
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
const AppRoute = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children:
            [
                {
                    path: "/",
                    element: <Body />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/grocery",
                    element:
                        <Suspense
                            fallback={<h1>Loading Grocery Page</h1>
                            }><Grocery />
                        </Suspense>
                },
                {
                    path: "/contact",
                    element: <Contact />
                },
                {
                    path: "/menu/:resId",
                    element: <RestaurantMenu />
                }
            ],
        errorElement: <Error />
    }
])



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRoute} />);