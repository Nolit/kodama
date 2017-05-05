const nodeExternals = require('webpack-node-externals');

module.exports = {
    context: __dirname + '/src',
    entry: {
        index: "./js/index.ts",
        bootstrap: "./js/bootstrap.ts"
    },

    output: {
        path: __dirname + '/dist',
        filename: "./js/[name].js"
    },
    resolve: {
        extensions: [' ', '.js', '.vue', '.ts']
    },
    target: "web",
    externals: [nodeExternals()],

    module: {
        rules: [{
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true
                }
            }
        ]
    }
};