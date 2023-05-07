import ReactDOM from "react-dom/client";
import IndexPage from "./pages/index";

const $root = document.querySelector("#root");
const root = ReactDOM.createRoot($root);

root.render(<IndexPage/>);