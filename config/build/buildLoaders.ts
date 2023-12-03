import { RuleSetRule } from "webpack"
import { BuildOptions } from "./types/config"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

  export const buildLoaders = ({isDev}: BuildOptions): RuleSetRule[] => {
    const tsLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

    const sassLoader = {
      test: /\.s[ac]ss$/i,
      use: [
        isDev ? "style-loader" : MiniCssExtractPlugin.loader,
        {
          loader: "css-loader",
          options: {
            modules: {
              auto: /\.module\./,
              localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]'
            },
          }
        },
        "sass-loader",
      ],
    }

    return [
      tsLoader,
      sassLoader,
      ]
  }