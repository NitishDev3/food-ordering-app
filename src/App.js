import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import UserContext from "./utils/UserContext";
import ChangeUserName from "./components/ChangeUserName";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {

    const [userName, setUserName] = useState();

    useEffect(() => {
        //Api call
        const data = {
            user: "Nitish"  //for example we get this from API call
        }
        setUserName(data.user);
    }, []);

    return (
        <div className="app">
            <Provider store={appStore} >
                <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
                    <Header />
                    <Outlet />
                    <Footer />
                </UserContext.Provider>
            </Provider>
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
                },
                {
                    path: "/updateusername",
                    element: <ChangeUserName />
                },
                {
                    path: "/cart",
                    element: <Cart />
                }
            ],
        errorElement: <Error />
    }
])


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={AppRoute} />);