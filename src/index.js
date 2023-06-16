import React from "react";
import Routing from "./routing";
import ReactDom from "react-dom/client"

const container=document.getElementById("root");
const root=ReactDom.createRoot(container);
root.render(<Routing />)