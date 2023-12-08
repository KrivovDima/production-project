import path from 'path';
import { BuildEnv, BuildMode, BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    html: path.resolve(__dirname, 'public', 'index.html'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'bundle'),
    src: path.resolve(__dirname, 'src'),
  }
  const mode: BuildMode = env.mode ?? 'development'
  const isDev = mode === 'development'
  const port = env.port ?? 3000

  return buildWebpackConfig({isDev, mode, paths, port})
}