import HtmlWebpackPlugin from "html-webpack-plugin"
import webpack from "webpack"
import { BuildPaths } from "./types/config"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export const buildPlugins = ({html}: BuildPaths): webpack.WebpackPluginInstance[] => {
    return [
        new HtmlWebpackPlugin({
        template: html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin(),
    ]
}