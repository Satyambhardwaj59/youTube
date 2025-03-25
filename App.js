import React from "react";
import ReactDOM from "react-dom/client";
import Try from "./src/Try";

const App = () => {
    return(
        <div>
            <Try />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
