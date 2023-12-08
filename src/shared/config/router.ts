export enum AppPages {
    MAIN = 'main',
    ABOUT = 'about',
}

export const pagesPaths: Record<AppPages, string> = {
    [AppPages.MAIN]: '/',
    [AppPages.ABOUT]: '/about',
}