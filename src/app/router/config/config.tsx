import { About } from "pages/About"
import {Main} from "pages/Main"
import { RouteProps } from "react-router-dom"
import { AppPages, pagesPaths } from "shared/config/router"

export const routesConfig:RouteProps[] = [
    {
        path: pagesPaths[AppPages.MAIN],
        element: <Main />
    },
    {
        path: pagesPaths[AppPages.ABOUT],
        element: <About />
    }
] 