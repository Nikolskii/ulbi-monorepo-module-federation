import path from 'path';
import webpack from 'webpack';
import { buildWebpack, BuildPaths, BuildMode, BuildPlatform, BuildOptions } from '@packages/build-config';

interface EnvVariables {
  mode?: BuildMode;
  port?: number;
  platform?: BuildPlatform,
  analyzer?: boolean;
}

export default (env: EnvVariables) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src')
  };

  const config: webpack.Configuration = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop',
    paths
  });

  return config;
};