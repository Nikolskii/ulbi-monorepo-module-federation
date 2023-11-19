import path from 'path';
import webpack from 'webpack';
import { buildWebpack, BuildPaths, BuildMode, BuildPlatform } from '@packages/build-config';
import packageJson from './package.json';

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
    port: env.port ?? 3001,
    mode: env.mode ?? 'development',
    analyzer: env.analyzer,
    platform: env.platform ?? 'desktop',
    paths
  });

  config.plugins.push(new webpack.container.ModuleFederationPlugin({
    // Название микрофронтенда
    name: 'shop',
    // Название файла, который будет удаленно подключаться в host контейнер. По-умолчанию называют remoteEntry.js
    filename: 'remoteEntry.js',
    // Указываем, что хотим предоставить приложению-контейнеру
    // В данном случае отдаем наружу роутер. Та часть приложения, которую будем внедрять в в хост-контейнер
    exposes: {
      './Router': './src/router/Router.tsx'
    },
    // Указываем, какие библиотеки - общие. И какие должы шарится. Можно указать требуемую версию
    // eager сообщает, что библиотеку нужно подгрузить сразу. Противоположность lazy loading. То есть нужна немедленно
    shared: {
      ...packageJson.dependencies,
      react: {
        eager: true,
        requiredVersion: packageJson.dependencies['react']
      },
      'react-router-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-router-dom']
      },
      'react-dom': {
        eager: true,
        requiredVersion: packageJson.dependencies['react-dom']
      }
    }
  }));

  return config;
};