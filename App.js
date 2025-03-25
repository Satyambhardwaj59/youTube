import React from "react";
import ReactDOM from "react-dom/client";
import Try from "./src/Try";
import Head from "./src/components/Head";
import Body from "./src/components/Body";

const App = () => {
    return(
        <div>
            <Head />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
