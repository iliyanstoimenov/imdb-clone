module.exports = {
    mode: "development",
    devServer: {
        static: "./dist"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{loader: 'babel-loader'}],
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg|xml|json)$/i,
                type: 'asset/resource'
            }
        ]
    }
}