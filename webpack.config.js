var path = require('path');
var webpack = require('webpack');
module.exports ={
    devServer: {
      stats: 'errors-only',
    },
    
    entry: [path.resolve(__dirname, 'src/index.js')],
    output : {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    
    module: {
        loaders: [
            
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'src'),
                    loader: 'babel-loader',
                    query: {
                        presets: ['react','es2015']
                    }
                },
                
                {
                    loader: 'style-loader!css-loader!sass-loader',
                    test: /\.scss$/,
                }
                
                
            ]
    },
    
    plugins: [
       
        new webpack.HotModuleReplacementPlugin()
    ]
}