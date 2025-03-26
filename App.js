import React from "react";
import ReactDOM from "react-dom/client";
import Head from "./src/components/Head";
import Body from "./src/components/Body";
import { Provider } from "react-redux";
import store from "./src/utils/store";

const App = () => {
    return(
        <Provider store={store}>
            <div>
                <Head />
                <Body />
            </div>
        </Provider>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
