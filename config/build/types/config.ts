export type BuildPaths = {
    html: string
    entry: string
    output: string
}

export type BuildMode = "none" | "development" | "production"

export type BuildOptions = {
    paths: BuildPaths
    mode: BuildMode
    isDev: boolean
    port: number
}

export type BuildEnv = {
    mode: BuildMode
    port: number
}