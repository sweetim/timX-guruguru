module.exports = {
    entry: './src',
    output: {
        path: 'build',
        filename: 'bundle.js',
        publicPath: 'build/'
    },
    module: {
        loaders: [
            {
                test: /\.js/,
                loader: 'babel',
                exclude: '/node_modules'
            },
            {
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            {
                test: /\.html/,
                loader: 'html'
            }
        ]
    },
    devServer: {
        inline: true
    }
}
