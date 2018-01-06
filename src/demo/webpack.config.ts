import { EnvironmentPlugin, HotModuleReplacementPlugin, NamedModulesPlugin, NoEmitOnErrorsPlugin, optimize } from 'webpack' // tslint:disable-line:max-line-length
import * as OptimizeCssAssetsPlugin from 'optimize-css-assets-webpack-plugin'
import * as HtmlWebpackPlugin from 'html-webpack-plugin'
import * as ExtractTextPlugin from 'extract-text-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { join } from 'path'
import { cssLoaders, getPlugins, jsLoader } from './loaders'

const dist = '../../demo'
const publicPath = '/'

export default (env: any) => {
	const port: number = env && env.HOST_PORT || 9002
	const analyzerPort: number = env && env.ANALYZER_PORT || 8885
	return {
		context: join(__dirname),
		entry: {
			app: [
				'babel-polyfill',
				'react-hot-loader/patch',
				// activate HMR for React

				`webpack-dev-server/client?http://localhost:${port}`,
				// bundle the client for webpack-dev-server
				// and connect to the provided endpoint

				'webpack/hot/only-dev-server',
				// bundle the client for hot reloading
				// only- means to only hot reload for successful updates)

				'./index.tsx',
			],
		},
		output: {
			path: join(__dirname, dist),
			filename: '[name].js',
			publicPath
		},
		module: {
			rules: [
				{
					test: /\.(sass|scss|css)$/,
					use: [
						{
							loader: 'style-loader',
							options: {
								sourceMap: true
							}
						},
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							},
						},
						{ loader: 'resolve-url-loader' },
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true
							}
						}
					]
				},
				{
					test: /\.(jpe?g|png|gif|svg|jpg|json)$/i,
					exclude: /node_modules/,
					loader: 'file-loader'
				},
				{
					test: /\.(eot|svg|ttf|woff|woff2)$/i,
					exclude: /node_modules/,
					loader: 'file-loader'
				},
				{
					test: /\.(ico)$/i,
					exclude: /node_modules/,
					loader: 'file-loader?name=[name].[ext]'
				},
				{
					test: /\.ts(x?)$/,
					exclude: [/node_modules/],
					use: [{
						loader: 'babel-loader',
						options: {
							presets: [['env', { modules: false, useBuiltIns: 'usage', targets: { browsers: ['last 2 major versions', 'ie 10'] } }], 'react'],
							plugins: ['react-hot-loader/babel'],
							babelrc: false
						}
					},
					{
						loader: 'ts-loader',
						options: {
							compilerOptions: {
								target: 'es6',
								module: 'es2015',
								jsx: 'preserve',
								sourceMap: false
							}
						}
					}],
				},
			],
		},
		plugins: [
			new HotModuleReplacementPlugin(),
			new NamedModulesPlugin(),
			new NoEmitOnErrorsPlugin(),
			new HtmlWebpackPlugin({
				template: 'index.html',
				filename: 'index.html',
				inject: 'body',
			}),
			new BundleAnalyzerPlugin({
				// Can be `server`, `static` or `disabled`.
				// In `server` mode analyzer will start HTTP server to show bundle report.
				// In `static` mode single HTML file with bundle report will be generated.
				// In `disabled` mode you can use this plugin to just generate Webpack Stats JSON file by setting `generateStatsFile` to `true`.
				analyzerMode: 'server',
				// Host that will be used in `server` mode to start HTTP server.
				analyzerHost: '127.0.0.1',
				// Port that will be used in `server` mode to start HTTP server.
				analyzerPort,
				// Path to bundle report file that will be generated in `static` mode.
				// Relative to bundles output directory.
				reportFilename: 'report.html',
				// Module sizes to show in report by default.
				// Should be one of `stat`, `parsed` or `gzip`.
				// See "Definitions" section for more information.
				defaultSizes: 'parsed',
				// Automatically open report in default browser
				openAnalyzer: true,
				// If `true`, Webpack Stats JSON file will be generated in bundles output directory
				generateStatsFile: false,
				// Name of Webpack Stats JSON file that will be generated if `generateStatsFile` is `true`.
				// Relative to bundles output directory.
				statsFilename: 'stats.json',
				// Options for `stats.toJson()` method.
				// For example you can exclude sources of your modules from stats file with `source: false` option.
				// See more options here: https://github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
				statsOptions: null,
				// Log level. Can be 'info', 'warn', 'error' or 'silent'.
				logLevel: 'info'
			})
		],
		resolve: {
			extensions: ['.jsx', '.js', '.ts', '.tsx'],
			alias: {

			}
		},
		devtool: 'source-map',
		devServer: {
			port,
			historyApiFallback: true,
			hot: true,
			contentBase: './demo',
		}
	}
}
