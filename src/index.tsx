import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ThemeProvider } from "./theme/ThemeContext";

render(<ThemeProvider><BrowserRouter>
<App />
</BrowserRouter></ThemeProvider>, document.getElementById('root'))