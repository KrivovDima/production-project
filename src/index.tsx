import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "app/App";
import { ThemeProvider } from "shared/providers/ThemeProvider/ThemeContext";

render(<ThemeProvider><BrowserRouter>
<App />
</BrowserRouter></ThemeProvider>, document.getElementById('root'))