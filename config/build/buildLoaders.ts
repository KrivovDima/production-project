import { RuleSetRule } from "webpack"
import { BuildOptions } from "./types/config"
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

  export const buildLoaders = ({isDev}: BuildOptions): RuleSetRule[] => {
    const svgLoader = {
      test: /\.svg$/,
      use: '@svgr/webpack',
    }

    const imgLoader = {
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
      }

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
      svgLoader,
      imgLoader,
      tsLoader,
      sassLoader,
      ]
  }