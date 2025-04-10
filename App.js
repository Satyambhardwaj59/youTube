import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./src/components/Head";
import Body from "./src/components/Body";
import { Provider } from "react-redux";
import store from "./src/utils/store";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainContainer from "./src/components/MainContainer";
import WatchPage from "./src/components/WatchPage";
import Shimmar from "./src/components/Shimmar";


const appRouter = createBrowserRouter([{
    path: "/",
    element: <Body />,
    children: [
        {
            path: "/",
            element: <MainContainer />
        },
        {
            path: "/watch",
            element: <WatchPage/>
        },
        {
            path: "/Shimmar",
            element: <Shimmar/>
        }
    ]
}]);

const App = () => {
    return(
        <Provider store={store}>
            <div>
                <Head />
                <RouterProvider router={appRouter}/>
            </div>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
