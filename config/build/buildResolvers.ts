import webpack, { ResolveOptions } from "webpack"
import { BuildOptions } from "./types/config"

export const buildResolvers = (options: BuildOptions): ResolveOptions  => {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        modules: ['node_modules', options.paths.src],
        preferAbsolute: true,
        mainFiles: ['index'],
      }
}