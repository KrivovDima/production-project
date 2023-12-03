import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolvers } from "./buildResolvers";
import { buildDevServer } from "./buildDevServer";

export const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
    const {mode, paths, isDev} = options
    const {entry, output} = paths

    return {
        mode,
        entry,
        output: {
            filename: '[name].[contenthash].js',
            path: output,
            clean: true,
        },
        plugins: buildPlugins(paths),
        module: {
            rules: buildLoaders(options),
          },
        resolve: buildResolvers(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,
    }
}