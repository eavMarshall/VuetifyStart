const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const APP_NAME = 'Vuetifiy Starter';

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'public/'),
        publicPath: '/'
    },
    devtool: 'source-map',
    devServer:{
        contentBase: 'public'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false
                        }
                    },
                ],
            },
            {
                test: /\.js$/,
                exclude: [
                    /\bcore-js\b/,
                    /\bwebpack\/buildin\b/,
                    /(node_modules|bower_components)/
                ],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'vue-style-loader',
                    'style-loader',
                    'css-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass'),
                            sassOptions: {
                                fiber: require('fibers')
                            },
                        },
                    },
                ],
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: APP_NAME,
        })
    ],
    resolve: {
        extensions: ['.js', '.vue'],
        alias: {
            '@root': path.resolve(__dirname, 'src/'),
            '@components': path.resolve(__dirname, 'src/components/'),
            '@plugins': path.resolve(__dirname, 'src/plugins/'),
            '@appPages': path.resolve(__dirname, 'src/pages/app/'),
            '@assets': path.resolve(__dirname, 'src/assets/'),
            'vue$': 'vue/dist/vue.esm.js',
        },
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    chunks: 'initial',
                    name: 'vendor',
                    enforce: true
                },
            }
        }
    }
};
