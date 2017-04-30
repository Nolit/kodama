module.exports = {
    context: __dirname + '/src',

    entry: {
        js: "./js/index.ts"
    },

    output: {
        path: __dirname + '/dist',
        filename: "./js/index.js"
    },

    module: {
        rules: [{
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
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
}